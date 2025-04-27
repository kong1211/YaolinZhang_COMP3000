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
     * 下单人
     */
    @TableField(value = "user_id")
    private Integer userId;

    /**
     * 下单人昵称
     */
    @TableField(value = "nick_name")
    private String nickName;

    /**
     * 下单时间
     */
    @TableField(value = "create_time")
    private Date createTime;

    /**
     * 总金额
     */
    @TableField(value = "total_amount")
    private BigDecimal totalAmount;

    /**
     * 订单状态
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
