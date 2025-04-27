package com.quick.boot.api.modules.hall.domain;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import java.util.Date;
import lombok.Data;

@Data
@TableName(value = "tb_expel")
public class Expel {
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
     * 类型
     */
    @TableField(value = "`type`")
    private String type;

    /**
     * 理由
     */
    @TableField(value = "reason")
    private String reason;

    /**
     * 内容
     */
    @TableField(value = "content")
    private String content;

    /**
     * 创建时间
     */
    @TableField(value = "create_time")
    private Date createTime;
}