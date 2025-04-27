package com.quick.boot.api.modules.base.dao;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.quick.boot.jwtboot.token.TokenDAO;
import com.quick.boot.api.modules.system.domain.Token;
import com.quick.boot.api.modules.system.service.TokenService;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.Date;

public class MysqlTokenDAO implements TokenDAO {

    @Autowired
    private TokenService tokenService;

    @Override
    public void del(String username) {
        QueryWrapper<Token> wrapper = tokenService
                .query()
                .getWrapper()
                .eq("username", username);
        tokenService.remove(wrapper);
    }

    @Override
    public void put(String username, String token) {
        this.del(username);
        Token t = new Token();
        t.setUsername(username);
        t.setToken(token);
        t.setCreateTime(new Date());
        tokenService.save(t);
    }

    @Override
    public boolean isExist(String username) {
        return get(username) != null;
    }

    @Override
    public String get(String username) {
        Token token = tokenService
                .query()
                .eq("username", username)
                .one();
        if (token != null) return token.getToken();
        return null;
    }
}
