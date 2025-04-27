package com.quick.boot.api.modules.system.vo;

import lombok.Data;

@Data
public class UpdateProfileVO {
    private String avatar;
    private String name;
    private String phone;
    private String oldPwd;
    private String newPwd;
    private String confirmPwd;
}
