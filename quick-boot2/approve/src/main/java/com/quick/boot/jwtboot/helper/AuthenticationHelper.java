package com.quick.boot.jwtboot.helper;

import com.quick.boot.jwtboot.entity.AuthenticationVO;
import org.springframework.web.client.RestClientException;
import org.springframework.web.client.RestTemplate;

public class AuthenticationHelper {

    private static RestTemplate restTemplate;

    static {
        restTemplate = new RestTemplate();
    }

    private AuthenticationHelper() {
    }

    public static AuthenticationVO login(String username, String password, String secret, String client, int port) {
        StringBuilder url = new StringBuilder();
        url
                .append("http://localhost:")
                .append(port)
                .append("/authentication/login?")
                .append("username=").append(username).append("&")
                .append("password=").append(password).append("&")
                .append("client=").append(client).append("&")
                .append("secret=").append(secret);

        try {
            return restTemplate.getForObject(url.toString(), AuthenticationVO.class);
        } catch (RestClientException e) {
            return null;
        }
    }

    public static AuthenticationVO logout(String secret, String client, String token, int port) {
        StringBuilder url = new StringBuilder();
        url
                .append("http://localhost:")
                .append(port)
                .append("/authentication/logout?")
                .append("client=").append(client).append("&")
                .append("secret=").append(secret).append("&")
                .append("token=").append(token);

        try {
            return restTemplate.getForObject(url.toString(), AuthenticationVO.class);
        } catch (RestClientException e) {
            return null;
        }
    }

}
