package com.quick.boot.api.modules.hall.controller;

import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.quick.boot.api.dto.Restful;
import com.quick.boot.api.modules.hall.domain.Item;
import com.quick.boot.api.modules.hall.service.ItemService;
import com.quick.boot.api.modules.system.domain.Role;
import com.quick.boot.api.vo.PageQuery;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;

@RequestMapping("/hall/item")
@RestController
public class ItemController {

    @Resource
    private ItemService itemService;

    @GetMapping("list")
    public Restful<Page<Item>> itemList(PageQuery query) {
        Page<Item> page = itemService
                .query()
                .like("name", query.getSearch())
                .page(new Page<>(query.getPageNum(), query.getPageSize()));
        return Restful.ok(page);
    }

    @PostMapping("save")
    public Restful<Void> saveItem(@RequestBody Item item) {
        itemService.saveOrUpdate(item);
        return Restful.ok();
    }

    @DeleteMapping("del/{id}")
    public Restful<Void> delItem(@PathVariable Integer id) {
        itemService.removeById(id);
        return Restful.ok();
    }

}
