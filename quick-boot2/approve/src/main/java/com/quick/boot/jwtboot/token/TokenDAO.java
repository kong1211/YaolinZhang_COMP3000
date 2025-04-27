package com.quick.boot.jwtboot.token;

public interface TokenDAO {

    void del(String username);

    void put(String username, String token);

    boolean isExist(String username);

    String get(String username);
}
