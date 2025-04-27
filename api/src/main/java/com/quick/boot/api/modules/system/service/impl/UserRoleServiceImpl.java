package com.quick.boot.api.modules.system.service.impl;

import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.quick.boot.api.modules.system.domain.UserRole;
import com.quick.boot.api.modules.system.mapper.UserRoleMapper;
import com.quick.boot.api.modules.system.service.UserRoleService;
import org.springframework.stereotype.Service;
@Service
public class UserRoleServiceImpl extends ServiceImpl<UserRoleMapper, UserRole> implements UserRoleService {

}
