package com.quick.boot.jwtboot.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class AuthenticationVO {
    private int code;
    private String msg;
    private Token data;

    @Data
    public static class Token{
        String token;
    }
}
