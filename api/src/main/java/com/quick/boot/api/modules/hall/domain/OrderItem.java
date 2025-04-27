package com.quick.boot.api.modules.hall.domain;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import java.math.BigDecimal;
import lombok.Data;

@Data
@TableName(value = "tb_order_item")
public class OrderItem {
    /**
     * ID
     */
    @TableId(value = "id", type = IdType.INPUT)
    private Integer id;

    /**
     * 订单ID
     */
    @TableField(value = "order_id")
    private Integer orderId;

    /**
     * 菜品ID
     */
    @TableField(value = "item_id")
    private Integer itemId;

    /**
     * 菜品名称
     */
    @TableField(value = "item_name")
    private String itemName;

    /**
     * 数量
     */
    @TableField(value = "num")
    private Integer num;

    /**
     * 单价
     */
    @TableField(value = "unit_price")
    private BigDecimal unitPrice;

    /**
     * 总价
     */
    @TableField(value = "total_price")
    private BigDecimal totalPrice;
}