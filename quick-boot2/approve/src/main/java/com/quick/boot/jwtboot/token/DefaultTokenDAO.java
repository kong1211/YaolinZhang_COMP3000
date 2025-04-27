package com.quick.boot.jwtboot.token;

import java.util.concurrent.ConcurrentHashMap;

public class DefaultTokenDAO implements TokenDAO {

    private ConcurrentHashMap<String, String> concurrentHashMap = new ConcurrentHashMap<>();

    @Override
    public void del(String username) {
        concurrentHashMap.remove(username);
    }

    @Override
    public void put(String username, String token) {
        concurrentHashMap.put(username, token);
    }

    @Override
    public boolean isExist(String username) {
        if (username == null)
            return false;
        return concurrentHashMap.get(username) != null;
    }

    @Override
    public String get(String username) {
        return concurrentHashMap.get(username);
    }
}
