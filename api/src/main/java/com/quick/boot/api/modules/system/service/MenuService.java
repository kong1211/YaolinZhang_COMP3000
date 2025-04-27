package com.quick.boot.api.modules.system.service;

import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.quick.boot.api.modules.system.domain.Menu;
import com.baomidou.mybatisplus.extension.service.IService;

import java.util.List;

public interface MenuService extends IService<Menu> {

    List<Menu> treeMenus();

    Page<Menu> queryMenus(String name, Integer pageNum, Integer pageSize);


}
