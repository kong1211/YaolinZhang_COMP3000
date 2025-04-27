package com.quick.boot.jwtboot.config;

import com.quick.boot.jwtboot.utils.JWTUtil;
import com.quick.boot.jwtboot.authc.JWTRealm;
import com.quick.boot.jwtboot.filter.JWTFilter;
import com.quick.boot.jwtboot.service.AuthenticationService;
import com.quick.boot.jwtboot.token.TokenDAO;
import org.apache.shiro.mgt.SecurityManager;
import org.apache.shiro.realm.Realm;
import org.apache.shiro.session.mgt.DefaultSessionManager;
import org.apache.shiro.spring.security.interceptor.AuthorizationAttributeSourceAdvisor;
import org.apache.shiro.spring.web.ShiroFilterFactoryBean;
import org.apache.shiro.web.mgt.DefaultWebSecurityManager;
import org.springframework.aop.framework.autoproxy.DefaultAdvisorAutoProxyCreator;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import javax.servlet.Filter;
import java.util.Map;

@Configuration
public class ShiroConfig {
    private TokenDAO tokenDAO;
    private JWTUtil jwtUtil;
    private AuthenticationService authenticationService;

    public ShiroConfig(TokenDAO tokenDAO, JWTUtil jwtUtil, AuthenticationService authenticationService) {
        this.tokenDAO = tokenDAO;
        this.jwtUtil = jwtUtil;
        this.authenticationService = authenticationService;
    }

    @Bean
    public SecurityManager securityManager() {
        DefaultWebSecurityManager manager = new DefaultWebSecurityManager();
        manager.setRealm(realm());
        manager.setCacheManager(null);
        manager.setRememberMeManager(null);
        manager.setSessionManager(sessionManager());
        return manager;
    }

    @Bean
    public ShiroFilterFactoryBean shiroFilterFactoryBean() {
        ShiroFilterFactoryBean shiroFilterFactoryBean = new ShiroFilterFactoryBean();
        shiroFilterFactoryBean.setSecurityManager(securityManager());

        // 实例化JWT过滤器
        Map<String, Filter> filters = shiroFilterFactoryBean.getFilters();
        filters.put("jwt", new JWTFilter(tokenDAO, jwtUtil, authenticationService));

        // jwt过滤器过滤所有的接口
        Map<String, String> chainDefinitionMap = shiroFilterFactoryBean.getFilterChainDefinitionMap();
        chainDefinitionMap.put("/**", "jwt");
        return shiroFilterFactoryBean;
    }


    @Bean
    public DefaultSessionManager sessionManager() {
        return new DefaultSessionManager();
    }

    @Bean
    public Realm realm() {
        return new JWTRealm();
    }

    @Bean
    public DefaultAdvisorAutoProxyCreator advisorAutoProxyCreator() {
        DefaultAdvisorAutoProxyCreator advisorAutoProxyCreator = new DefaultAdvisorAutoProxyCreator();
        advisorAutoProxyCreator.setProxyTargetClass(true);
        return advisorAutoProxyCreator;
    }

    @Bean
    public AuthorizationAttributeSourceAdvisor authorizationAttributeSourceAdvisor() {
        AuthorizationAttributeSourceAdvisor authorizationAttributeSourceAdvisor = new AuthorizationAttributeSourceAdvisor();
        authorizationAttributeSourceAdvisor.setSecurityManager(securityManager());
        return authorizationAttributeSourceAdvisor;
    }
}
