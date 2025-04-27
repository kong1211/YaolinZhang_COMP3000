package com.quick.boot.jwtboot.config;

import com.quick.boot.jwtboot.service.AuthenticationService;
import com.quick.boot.jwtboot.token.TokenDAO;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Import;

@Import(JWTBoot.class)
public abstract class AbstractJWTConfiguration {

    public AbstractJWTConfiguration() {
    }

    @Bean
    public abstract AuthenticationService authenticationService();

    @Bean
    public abstract TokenDAO tokenDAO();
}
