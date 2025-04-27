package com.quick.boot.jwtboot.entity;

import lombok.AllArgsConstructor;
import lombok.Data;

@AllArgsConstructor
@Data
public class Result {
    private Boolean success;
    private String message;
    private String data;
}
