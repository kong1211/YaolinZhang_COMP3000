package com.quick.boot.api.modules.system.domain;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import lombok.Data;

@Data
@TableName(value = "tb_info")
public class Info {
    /**
     * ID
     */
    @TableId(value = "id", type = IdType.AUTO)
    private Integer id;

    /**
     * title
     */
    @TableField(value = "title")
    private String title;

    /**
     * Description
     */
    @TableField(value = "description")
    private String description;

    /**
     * 内容
     */
    @TableField(value = "content")
    private String content;

    /**
     * Order
     */
    @TableField(value = "sort")
    private Integer sort;
}