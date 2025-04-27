package com.quick.boot.api.modules.system.domain;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import lombok.Data;

@Data
@TableName(value = "tb_user")
public class User {
    /**
     * ID
     */
    @TableId(value = "id", type = IdType.AUTO)
    private Integer id;

    /**
     * username
     */
    @TableField(value = "username")
    private String username;

    /**
     * psw
     */
    @TableField(value = "password")
    private String password;

    /**
     * Name
     */
    @TableField(value = "name")
    private String name;

    /**
     * phonenumber
     */
    @TableField(value = "phone")
    private String phone;

    /**
     * status
     */
    @TableField(value = "disabled")
    private Boolean disabled;

    /**
     * profile
     */
    @TableField(value = "avatar")
    private String avatar;

    public static final String COL_ID = "id";

    public static final String COL_USERNAME = "username";

    public static final String COL_PASSWORD = "password";

    public static final String COL_NAME = "name";

    public static final String COL_PHONE = "phone";

    public static final String COL_DISABLED = "disabled";
}