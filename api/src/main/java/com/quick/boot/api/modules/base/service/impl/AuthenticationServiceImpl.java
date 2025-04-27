package com.quick.boot.api.modules.base.service.impl;

import com.quick.boot.api.modules.system.domain.User;
import com.quick.boot.api.modules.system.mapper.UserMapper;
import com.quick.boot.jwtboot.authc.AuthenticationUser;
import com.quick.boot.jwtboot.service.AuthenticationService;

import javax.annotation.Resource;
import java.util.ArrayList;
import java.util.List;

public class AuthenticationServiceImpl implements AuthenticationService {

    @Resource
    private UserMapper userMapper;

    @Override
    public AuthenticationUser getUser(String username, String password) {
        User users = userMapper.queryByUsername(username);

        if (users != null) {
            if (!users.getDisabled() && users.getPassword().equals(password)) {
                return new AuthenticationUser(users.getUsername(), users.getPassword());
            }
        }
        return null;
    }

    @Override
    public List<String> getRoles(String username) {
        User users = userMapper.queryByUsername(username);
        if (users != null)
            return userMapper.getRoles(users.getId());
        else
            return new ArrayList<>();
    }

    @Override
    public List<String> getPermissions(String username) {
        User users = userMapper.queryByUsername(username);
        if (users != null)
            return userMapper.getPermissions(users.getId());
        else
            return null;
    }
}
