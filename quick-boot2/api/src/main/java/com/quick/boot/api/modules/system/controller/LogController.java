package com.quick.boot.api.modules.system.controller;

import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.quick.boot.api.dto.Restful;
import com.quick.boot.api.modules.system.domain.Log;
import com.quick.boot.api.modules.system.service.LogService;
import com.quick.boot.api.vo.PageQuery;
import org.apache.shiro.authz.annotation.RequiresPermissions;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.Resource;

@RequestMapping("log")
@RestController
public class LogController {

    @Resource
    private LogService logService;

    @RequiresPermissions({"ss-log-list"})
    @GetMapping("page")
    public Restful<Page<Log>> logPage(PageQuery query) {
        Page<Log> logPage = logService
                .query()
                .like("content", query.getSearch())
                .or()
                .like("username", query.getSearch())
                .orderByDesc("create_time")
                .page(new Page<>(query.getPageNum(), query.getPageSize()));
        return Restful.ok(logPage);
    }

    @DeleteMapping("del/{id}")
    @RequiresPermissions({"ss-log-delete"})
    public Restful<Void> delLog(@PathVariable Integer id) {
        logService.removeById(id);
        return Restful.ok(null);
    }

    @DeleteMapping("cleanAll")
    @RequiresPermissions({"ss-log-delete"})
    public Restful<Void> cleanLogs() {
        logService.remove(logService.query().getWrapper());
        return Restful.ok();
    }

}
