package com.quick.boot.api.modules.system.service.impl;

import org.springframework.stereotype.Service;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.quick.boot.api.modules.system.mapper.TokenMapper;
import com.quick.boot.api.modules.system.domain.Token;
import com.quick.boot.api.modules.system.service.TokenService;
@Service
public class TokenServiceImpl extends ServiceImpl<TokenMapper, Token> implements TokenService{

}
