package com.quick.boot.api.modules.hall.domain;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import java.util.Date;
import lombok.Data;

@Data
@TableName(value = "tb_emp")
public class Emp {
    /**
     * ID
     */
    @TableId(value = "id", type = IdType.INPUT)
    private Integer id;

    /**
     * 员工姓名
     */
    @TableField(value = "`name`")
    private String name;

    /**
     * 员工详情
     */
    @TableField(value = "detail")
    private String detail;

    /**
     * 性别
     */
    @TableField(value = "sex")
    private String sex;

    /**
     * 用户编号
     */
    @TableField(value = "user_id")
    private Integer userId;

    /**
     * 状态
     */
    @TableField(value = "`state`")
    private String state;

    /**
     * 角色
     */
    @TableField(value = "`role`")
    private String role;

    /**
     * 工作时间
     */
    @TableField(value = "job_time")
    private String jobTime;

    /**
     * 入职时间
     */
    @TableField(value = "join_time")
    private Date joinTime;
    @TableField(exist = false)
    private String password;
    @TableField(exist = false)
    private String phone;
}