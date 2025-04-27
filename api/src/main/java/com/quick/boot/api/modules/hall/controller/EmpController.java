package com.quick.boot.api.modules.hall.controller;

import com.baomidou.mybatisplus.extension.api.R;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.quick.boot.api.dto.Restful;
import com.quick.boot.api.modules.hall.domain.Emp;
import com.quick.boot.api.modules.hall.service.EmpService;
import com.quick.boot.api.modules.system.domain.User;
import com.quick.boot.api.modules.system.domain.UserRole;
import com.quick.boot.api.modules.system.mapper.UserMapper;
import com.quick.boot.api.modules.system.mapper.UserRoleMapper;
import com.quick.boot.api.modules.system.service.UserService;
import com.quick.boot.api.vo.PageQuery;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Date;

@RequestMapping("hall/emp")
@RestController
public class EmpController {
    @Autowired
    private EmpService empService;
    @Autowired
    private UserMapper userMapper;
    @Autowired
    private UserRoleMapper userRoleMapper;

    @GetMapping("list")
    public Restful<Page<Emp>> empList(PageQuery query) {
        Page<Emp> page = empService.query().like("name", query.getSearch()).page(new Page<>(query.getPageNum(), query.getPageSize()));
        for (Emp record : page.getRecords()) {
            Integer userId = record.getUserId();
            User user = userMapper.selectById(userId);
            record.setPhone(user.getPhone());
            record.setPassword(user.getPassword());
        }
        return Restful.ok(page);
    }

    @PostMapping("save")
    public Restful<Void> saveEmp(@RequestBody Emp emp) {
        if (emp.getId() == null) {
            User user = new User();
            user.setUsername(emp.getPhone());
            user.setPassword(emp.getPassword());
            user.setName(emp.getName());
            user.setPhone(emp.getPhone());
            user.setDisabled(false);
            user.setAvatar(null);
            try {
                if (userMapper.insert(user) > 0) {
                    UserRole ur = new UserRole();
                    ur.setUserId(user.getId());
                    if (emp.getRole().equals("job")){
                        ur.setRoleId(3);
                    }else if (emp.getRole().equals("cook")) {
                        ur.setRoleId(4);
                    }
                    userRoleMapper.insert(ur);
                    emp.setUserId(user.getId());
                    emp.setJoinTime(new Date());
                    empService.save(emp);
                }
            } catch (Exception e) {
                return Restful.failed("注册用户失败");
            }
        } else {
            User user = userMapper.selectById(emp.getUserId());
            user.setPhone(emp.getPhone());
            user.setPassword(user.getPassword());
            userMapper.updateById(user);
            empService.updateById(emp);
        }
        return Restful.ok();
    }

    @DeleteMapping("del/{id}")
    public Restful<Void> deleteEmp(@PathVariable Integer id) {
        Emp emp = empService.getById(id);
        if (emp != null) {
            userMapper.deleteById(emp.getId());
            empService.removeById(id);
        }
        return Restful.ok();
    }
}
