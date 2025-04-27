package com.quick.boot.api.modules.system.controller;

import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.quick.boot.api.dto.Restful;
import com.quick.boot.api.modules.system.domain.Info;
import com.quick.boot.api.modules.system.service.InfoService;
import com.quick.boot.api.modules.system.service.LogService;
import com.quick.boot.api.vo.PageQuery;
import com.quick.boot.jwtboot.helper.LoginHelper;
import org.apache.shiro.authz.annotation.RequiresPermissions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequestMapping("info")
@RestController
public class InfoController {

    @Autowired
    private InfoService infoService;
    @Autowired
    private LogService logService;

    @GetMapping("list")
    @RequiresPermissions({"ss-info-list"})
    public Restful<Page<Info>> getInfoList(PageQuery query) {
        logService.addLog(LoginHelper.getUsername(), "查看系统信息列表");
        Page<Info> page = infoService
                .query()
                .like("title", query.getSearch())
                .orderByDesc("sort")
                .page(new Page<>(query.getPageNum(), query.getPageSize()));
        return Restful.ok(page);
    }

    @DeleteMapping("del/{id}")
    @RequiresPermissions({"ss-info-delete"})
    public Restful<Void> delInfo(@PathVariable Integer id) {
        logService.addLog(LoginHelper.getUsername(), "删除系统信息 ID=>" + id);
        return infoService.removeById(id) ? Restful.ok() : Restful.failed();
    }

    @PostMapping("save")
    @RequiresPermissions({"ss-info-save"})
    public Restful<Void> saveInfo(@RequestBody Info info) {
        boolean flag = infoService.saveOrUpdate(info);
        logService.addLog(LoginHelper.getUsername(), "保存系统信息 ID=>" + info.getId());
        return flag ? Restful.ok() : Restful.failed();
    }

}
