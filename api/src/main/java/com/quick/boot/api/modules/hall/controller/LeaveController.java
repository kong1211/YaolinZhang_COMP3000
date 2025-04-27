package com.quick.boot.api.modules.hall.controller;

import com.baomidou.mybatisplus.extension.conditions.query.QueryChainWrapper;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.quick.boot.api.dto.Restful;
import com.quick.boot.api.modules.hall.domain.Emp;
import com.quick.boot.api.modules.hall.domain.Item;
import com.quick.boot.api.modules.hall.domain.Leave;
import com.quick.boot.api.modules.hall.service.ItemService;
import com.quick.boot.api.modules.hall.service.LeaveService;
import com.quick.boot.api.modules.system.domain.User;
import com.quick.boot.api.modules.system.mapper.UserMapper;
import com.quick.boot.api.modules.system.service.UserService;
import com.quick.boot.api.vo.PageQuery;
import com.quick.boot.jwtboot.helper.LoginHelper;
import org.apache.shiro.SecurityUtils;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import java.util.Date;

@RequestMapping("/hall/leave")
@RestController
public class LeaveController {

    @Resource
    private LeaveService leaveService;
    @Resource
    private UserService userService;

    @GetMapping("list")
    public Restful<Page<Leave>> itemList(PageQuery query) {
        QueryChainWrapper<Leave> wrapper = leaveService.query().like("state", query.getSearch());
        String username = LoginHelper.getUsername();
        if (username != null &&!SecurityUtils.getSubject().hasRole("admin")){
            User user = userService.getByUsername(username);
            if (user != null) {
                wrapper.eq("user_id", user.getId());
            }
        }
        Page<Leave> page = wrapper.page(new Page<>(query.getPageNum(), query.getPageSize()));

        for (Leave record : page.getRecords()) {
            User user = userService.getById(record.getUserId());
            record.setNickName(user.getName());
        }
        return Restful.ok(page);
    }

    @PostMapping("save")
    public Restful<Void> saveItem(@RequestBody Leave item) {
        if (item.getId()==null){
            User user = userService.getByUsername(LoginHelper.getUsername());
            item.setUserId(user.getId());
            item.setCreateTime(new Date());
        }


        leaveService.saveOrUpdate(item);
        return Restful.ok();
    }

    @DeleteMapping("del/{id}")
    public Restful<Void> delItem(@PathVariable Integer id) {
        leaveService.removeById(id);
        return Restful.ok();
    }

}
