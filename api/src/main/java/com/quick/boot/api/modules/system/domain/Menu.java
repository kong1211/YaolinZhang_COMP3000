package com.quick.boot.api.modules.system.domain;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import lombok.Data;

import java.util.List;

@Data
@TableName(value = "tb_menu")
public class Menu {
    /**
     * ID
     */
    @TableId(value = "id", type = IdType.AUTO)
    private Integer id;

    /**
     * 菜单名称
     */
    @TableField(value = "name")
    private String name;

    /**
     * 菜单地址
     */
    @TableField(value = "path")
    private String path;

    /**
     * 父级菜单
     */
    @TableField(value = "parent")
    private Integer parent;

    /**
     * 菜单图表
     */
    @TableField(value = "icon")
    private String icon;

    @TableField(exist = false)
    private String parentName;

    @TableField(exist = false)
    private List<Menu> children;

    public static final String COL_ID = "id";

    public static final String COL_NAME = "name";

    public static final String COL_PATH = "path";

    public static final String COL_PARENT = "parent";

    public static final String COL_ICON = "icon";
}