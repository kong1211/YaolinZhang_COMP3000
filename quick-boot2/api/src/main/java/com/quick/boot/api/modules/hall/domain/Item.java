package com.quick.boot.api.modules.hall.domain;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import java.math.BigDecimal;
import lombok.Data;

@Data
@TableName(value = "tb_item")
public class Item {
    /**
     * ID
     */
    @TableId(value = "id", type = IdType.AUTO)
    private Integer id;

    /**
     * dish name
     */
    @TableField(value = "`name`")
    private String name;

    /**
     * dish info
     */
    @TableField(value = "detail")
    private String detail;

    /**
     * dish price
     */
    @TableField(value = "price")
    private BigDecimal price;
}
