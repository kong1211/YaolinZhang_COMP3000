package com.quick.boot.jwtboot.config;

import com.quick.boot.jwtboot.utils.JWTUtil;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;

@Configuration
@ComponentScan("com.quick.boot.jwtboot")
public class JWTBoot {

    @Bean
    public JWTUtil jwtUtil() {
        return new JWTUtil();
    }

}
