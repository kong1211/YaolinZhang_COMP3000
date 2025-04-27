package com.quick.boot.api.modules.system.service.impl;

import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.quick.boot.api.modules.system.domain.Menu;
import com.quick.boot.api.modules.system.mapper.MenuMapper;
import com.quick.boot.api.modules.system.service.MenuService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MenuServiceImpl extends ServiceImpl<MenuMapper, Menu> implements MenuService {

    private List<Menu> treeMenus(Integer pid) {
        List<Menu> menus = baseMapper.queryMenusByPid(pid);
        for (Menu menu : menus) {
            menu.setChildren(treeMenus(menu.getId()));
        }
        return menus;
    }

    @Override
    public List<Menu> treeMenus() {
        return treeMenus(0);
    }

    @Override
    public Page<Menu> queryMenus(String name, Integer pageNum, Integer pageSize) {
        int current = (pageNum - 1) * pageSize;
        if (name == null) {
            name = "%%";
        } else {
            name = "%" + name + "%";
        }
        List<Menu> menus = baseMapper.queryMenus(current, pageSize, name);
        Page<Menu> page = new Page<>();
        page.setTotal(baseMapper.queryTotal(name));
        page.setRecords(menus);
        page.setSize(pageSize);
        page.setPages(pageNum);
        return page;
    }
}
