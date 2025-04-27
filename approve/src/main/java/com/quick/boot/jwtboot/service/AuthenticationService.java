package com.quick.boot.jwtboot.service;


import com.quick.boot.jwtboot.authc.AuthenticationUser;

import java.util.List;

public interface AuthenticationService {

    AuthenticationUser getUser(String username, String password);

    List<String> getRoles(String username);

    List<String> getPermissions(String username);
}
