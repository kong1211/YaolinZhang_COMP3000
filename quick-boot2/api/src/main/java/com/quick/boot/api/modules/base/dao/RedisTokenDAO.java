package com.quick.boot.api.modules.base.dao;

import com.quick.boot.jwtboot.token.TokenDAO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.stereotype.Component;

@Component
public class RedisTokenDAO implements TokenDAO {

    @Autowired
    private RedisTemplate<String, String> redisTemplate;

    @Override
    public void del(String username) {
        redisTemplate.delete(username);
    }

    @Override
    public void put(String username, String token) {
        redisTemplate.opsForValue().set(username, token);
    }

    @Override
    public boolean isExist(String username) {
        return get(username) != null;
    }

    @Override
    public String get(String username) {
        return redisTemplate.opsForValue().get(username);
    }
}
