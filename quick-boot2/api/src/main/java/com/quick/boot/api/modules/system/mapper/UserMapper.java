package com.quick.boot.api.modules.system.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.quick.boot.api.modules.system.domain.Menu;
import com.quick.boot.api.modules.system.domain.User;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface UserMapper extends BaseMapper<User> {

    User queryByUsername(String username);

    List<String> getPermissions(Integer uid);

    List<String> getRoles(Integer uid);

    List<Menu> getMenusByPid(@Param("uid") Integer uid, @Param("pid") Integer pid);

}