package com.quick.boot.api.modules.system.service.impl;

import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.quick.boot.api.modules.system.domain.RolePermission;
import com.quick.boot.api.modules.system.mapper.RolePermissionMapper;
import com.quick.boot.api.modules.system.service.RolePermissionService;
import org.springframework.stereotype.Service;
@Service
public class RolePermissionServiceImpl extends ServiceImpl<RolePermissionMapper, RolePermission> implements RolePermissionService {

}
