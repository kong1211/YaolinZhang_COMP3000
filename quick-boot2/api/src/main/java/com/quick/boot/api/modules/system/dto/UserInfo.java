package com.quick.boot.api.modules.system.dto;

import com.quick.boot.api.modules.system.domain.Menu;
import lombok.Data;

import java.util.List;

@Data
public class UserInfo {

    private List<String> roles;
    private List<String> permissions;
    private List<Menu> menus;
    private String name;
    private String username;
    private Integer userId;
    private String avatar;
    private String introduction = "QuickBoot系统 开发者a13531196495";
}
