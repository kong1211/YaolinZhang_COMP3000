package com.quick.boot.api.modules.system.service.impl;

import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.quick.boot.api.modules.system.domain.RoleMenu;
import com.quick.boot.api.modules.system.mapper.RoleMenuMapper;
import com.quick.boot.api.modules.system.service.RoleMenuService;
import org.springframework.stereotype.Service;
@Service
public class RoleMenuServiceImpl extends ServiceImpl<RoleMenuMapper, RoleMenu> implements RoleMenuService {

}
