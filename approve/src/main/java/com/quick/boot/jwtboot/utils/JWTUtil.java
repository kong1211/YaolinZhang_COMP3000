package com.quick.boot.jwtboot.utils;

import com.auth0.jwt.JWT;
import com.auth0.jwt.JWTVerifier;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.interfaces.DecodedJWT;
import com.quick.boot.jwtboot.authc.AuthenticationUser;
import org.springframework.beans.factory.annotation.Value;

import java.util.Date;

public class JWTUtil {

    @Value("${jwt.secret}")
    private String secret;

    private JWTVerifier verifier;

    private final static Long expiresMill = 1000 * 60 * 60 * 24L;


    public AuthenticationUser verify(String token) {
        if (verifier == null) {
            this.verifier = JWT.require(Algorithm.HMAC256(secret)).build();
        }

        DecodedJWT verify = verifier.verify(token);
        String username = verify.getClaim("username").asString();

        if (username == null) {
            return null;
        } else {
            AuthenticationUser user = new AuthenticationUser();
            user.setUsername(username);
            user.setPassword("pass");
            return user;
        }
    }


    public String createToken(AuthenticationUser user) {
        return JWT.create()
                .withExpiresAt(new Date(System.currentTimeMillis() + expiresMill))
                .withClaim("username", user.getUsername())
                .sign(Algorithm.HMAC256(secret));
    }

}
