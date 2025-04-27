package com.quick.boot.api.modules.hall.domain;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import java.math.BigDecimal;
import java.util.Date;import java.util.List;
import lombok.Data;

@Data
@TableName(value = "tb_order")
public class Order {
    /**
     * ID
     */
    @TableId(value = "id", type = IdType.AUTO)
    private Integer id;

    /**
     * order人
     */
    @TableField(value = "user_id")
    private Integer userId;

    /**
     * order人nickname
     */
    @TableField(value = "nick_name")
    private String nickName;

    /**
     * time
     */
    @TableField(value = "create_time")
    private Date createTime;

    /**
     * cost
     */
    @TableField(value = "total_amount")
    private BigDecimal totalAmount;

    /**
     * order status
     */
    @TableField(value = "`state`")
    private String state;

    /**
     * 用户评价
     */
    @TableField(value = "`comment`")
    private String comment;
    @TableField(exist = false)
    private List<OrderItem> items;
}
