package com.quick.boot.jwtboot.advice;

import com.quick.boot.jwtboot.entity.AuthenticationVO;
import org.apache.shiro.ShiroException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class AuthenticationAdvice {

    @ExceptionHandler(ShiroException.class)
    public AuthenticationVO exception() {
        return new AuthenticationVO(403, "你当前无此访问权限！", null);
    }

}
