package com.quick.boot.api.config;
//验证登录

import com.quick.boot.api.modules.base.dao.MysqlTokenDAO;
import com.quick.boot.api.modules.base.service.impl.AuthenticationServiceImpl;
import com.quick.boot.jwtboot.config.AbstractJWTConfiguration;
import com.quick.boot.jwtboot.service.AuthenticationService;
import com.quick.boot.jwtboot.token.TokenDAO;
import org.springframework.context.annotation.Configuration;

@Configuration
// 继承AbstractJWTConfiguration 实现两个方法
public class JWTConfig extends AbstractJWTConfiguration {


    // 实例化此对象，返回AuthenticationService
    public AuthenticationService authenticationService() {
        return new AuthenticationServiceImpl();
    }

    // TokenDAO 存储session，默认用的是内存存储，可实现接口进行分布式存储，mysql、redis等
    public TokenDAO tokenDAO() {
        // MySQL存储token
        return new MysqlTokenDAO();
//        return new RedisTokenDAO();
    }

}