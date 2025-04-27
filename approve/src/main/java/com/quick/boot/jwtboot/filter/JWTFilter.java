package com.quick.boot.jwtboot.filter;

import com.quick.boot.jwtboot.utils.JWTUtil;
import com.quick.boot.jwtboot.authc.AuthenticationUser;
import com.quick.boot.jwtboot.authc.JWTAuthenticationToken;
import com.quick.boot.jwtboot.service.AuthenticationService;
import com.quick.boot.jwtboot.token.TokenDAO;
import org.apache.shiro.SecurityUtils;
import org.apache.shiro.web.servlet.ShiroHttpServletRequest;

import javax.servlet.*;
import java.io.IOException;

public class JWTFilter implements Filter {

    private TokenDAO tokenDAO;
    private JWTUtil jwtPlugin;
    private AuthenticationService authenticationService;

    public JWTFilter(TokenDAO tokenDAO, JWTUtil jwtPlugin, AuthenticationService authenticationService) {
        this.tokenDAO = tokenDAO;
        this.jwtPlugin = jwtPlugin;
        this.authenticationService = authenticationService;
    }

    @Override
    public void doFilter(ServletRequest servletRequest, ServletResponse servletResponse, FilterChain filterChain) throws IOException, ServletException {
        ShiroHttpServletRequest request = (ShiroHttpServletRequest) servletRequest;

        String token = request.getHeader("token") == null ? request.getParameter("token") : request.getHeader("token");

        if (token != null) {
            try {
                AuthenticationUser user = jwtPlugin.verify(token);
                if (user != null && checkToken(user.getUsername(), token)) {
                    user.setRoles(authenticationService.getRoles(user.getUsername()));
                    user.setPermissions(authenticationService.getPermissions(user.getUsername()));
                    SecurityUtils.getSubject().login(new JWTAuthenticationToken(user));
                }
            } catch (Exception e) {
                e.printStackTrace();
            }
        }
        filterChain.doFilter(servletRequest, servletResponse);
        SecurityUtils.getSubject().logout();
    }


    private boolean checkToken(String username, String token) {
        if (username != null)
            return tokenDAO.isExist(username) && tokenDAO.get(username).equals(token);
        return false;
    }

}
