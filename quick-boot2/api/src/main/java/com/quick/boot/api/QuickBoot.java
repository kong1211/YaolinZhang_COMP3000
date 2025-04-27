package com.quick.boot.api;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
@MapperScan("com.quick.boot.api.modules.*.mapper")
public class QuickBoot {
    public static void main(String[] args) {
        SpringApplication.run(QuickBoot.class, args);
    }
}
