package com.quick.boot.jwtboot.authc;

import lombok.Data;

import java.util.ArrayList;
import java.util.List;

@Data
public class AuthenticationUser {
    private String username;
    private String password;
    private List<String> roles;
    private List<String> permissions;

    public AuthenticationUser() {
    }

    public AuthenticationUser(String username, String password) {
        this(username, password, new ArrayList<>(), new ArrayList<>());
    }

    public AuthenticationUser(String username, String password, List<String> permissions, List<String> roles) {
        this.username = username;
        this.password = password;
        this.permissions = permissions;
        this.roles = roles;
    }
}
