package com.quick.boot.api.modules.hall.controller;

import com.quick.boot.api.dto.Restful;
import com.quick.boot.api.modules.hall.domain.Expel;
import com.quick.boot.api.modules.hall.service.ExpelService;
import com.quick.boot.jwtboot.entity.Result;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;

@RequestMapping("hall/expel/")
@RestController
public class ExpelController {

    @Autowired
    private ExpelService expelService;

    @GetMapping("list/{userId}")
    public Restful<List<Expel>> getExpelList(@PathVariable Integer userId){
        List<Expel> list = expelService.query().eq("user_id", userId).list();
        return Restful.ok(list);
    }

    @PostMapping("save")
    public Restful<Void> saveExpel(@RequestBody Expel expel){
        expel.setCreateTime(new Date());
        expelService.saveOrUpdate(expel);
        return Restful.ok();
    }

    @DeleteMapping("del/{id}")
    public Restful<Void> delExpel(@PathVariable Integer id){
        expelService.removeById(id);
        return Restful.ok();
    }

}
