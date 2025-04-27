package com.quick.boot.api.modules.system.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.quick.boot.api.modules.system.domain.Menu;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface MenuMapper extends BaseMapper<Menu> {

    List<Menu> queryMenusByPid(Integer pid);

    List<Menu> queryMenus(@Param("current") Integer current,@Param("size") Integer size,@Param("name") String name);
    Long queryTotal(@Param("name") String name);
}