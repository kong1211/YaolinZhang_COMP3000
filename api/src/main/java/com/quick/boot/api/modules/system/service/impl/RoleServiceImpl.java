package com.quick.boot.api.modules.system.service.impl;

import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.quick.boot.api.modules.system.domain.Role;
import com.quick.boot.api.modules.system.mapper.RoleMapper;
import com.quick.boot.api.modules.system.service.RoleService;
import org.springframework.stereotype.Service;
@Service
public class RoleServiceImpl extends ServiceImpl<RoleMapper, Role> implements RoleService {

}
