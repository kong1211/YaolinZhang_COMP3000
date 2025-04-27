package com.quick.boot.api.modules.system.domain;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import java.util.Date;
import lombok.Data;

@Data
@TableName(value = "tb_token")
public class Token {
    /**
     * ID
     */
    @TableId(value = "id", type = IdType.AUTO)
    private Integer id;

    /**
     * 用户名
     */
    @TableField(value = "username")
    private String username;

    /**
     * token
     */
    @TableField(value = "token")
    private String token;

    /**
     * 创建时间
     */
    @TableField(value = "create_time")
    private Date createTime;

    public static final String COL_ID = "id";

    public static final String COL_USERNAME = "username";

    public static final String COL_TOKEN = "token";

    public static final String COL_CREATE_TIME = "create_time";
}