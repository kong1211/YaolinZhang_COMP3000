package com.quick.boot.api.modules.system.domain;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import java.util.Date;
import lombok.Data;

@Data
@TableName(value = "tb_log")
public class Log {
    /**
     * ID
     */
    @TableId(value = "id", type = IdType.INPUT)
    private Integer id;

    /**
     * 内容
     */
    @TableField(value = "content")
    private String content;

    /**
     * log time
     */
    @TableField(value = "create_time")
    private Date createTime;

    /**
     * username
     */
    @TableField(value = "username")
    private String username;

    public static final String COL_ID = "id";

    public static final String COL_CONTENT = "content";

    public static final String COL_CREATE_TIME = "create_time";

    public static final String COL_USERNAME = "username";
}