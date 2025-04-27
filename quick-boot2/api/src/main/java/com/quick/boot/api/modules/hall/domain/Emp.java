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
     * 员工Name
     */
    @TableField(value = "`name`")
    private String name;

    /**
     * staff info
     */
    @TableField(value = "detail")
    private String detail;

    /**
     * sex
     */
    @TableField(value = "sex")
    private String sex;

    /**
     * 用户编号
     */
    @TableField(value = "user_id")
    private Integer userId;

    /**
     * status
     */
    @TableField(value = "`state`")
    private String state;

    /**
     * role
     */
    @TableField(value = "`role`")
    private String role;

    /**
     * time of work
     */
    @TableField(value = "job_time")
    private String jobTime;

    /**
     * time of attend
     */
    @TableField(value = "join_time")
    private Date joinTime;
    @TableField(exist = false)
    private String password;
    @TableField(exist = false)
    private String phone;
}