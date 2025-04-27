package com.quick.boot.api.modules.hall.domain;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import java.util.Date;

import com.quick.boot.api.modules.system.domain.User;
import lombok.Data;

@Data
@TableName(value = "tb_leave")
public class Leave {
    /**
     * ID
     */
    @TableId(value = "id", type = IdType.INPUT)
    private Integer id;

    /**
     * 用户ID
     */
    @TableField(value = "user_id")
    private Integer userId;

    /**
     * pls假理由
     */
    @TableField(value = "reason")
    private String reason;

    /**
     * pls假内容
     */
    @TableField(value = "content")
    private String content;

    /**
     * checkstatus
     */
    @TableField(value = "`state`")
    private String state;

    /**
     * 创建时间
     */
    @TableField(value = "create_time")
    private Date createTime;

    @TableField(exist = false)
    private String nickName;
}
