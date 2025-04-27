package com.quick.boot.api.modules.system.service;

import com.quick.boot.api.dto.Restful;
import com.quick.boot.api.modules.system.domain.User;
import com.quick.boot.api.modules.system.dto.UserInfo;
import com.quick.boot.api.modules.system.vo.UpdateProfileVO;
import com.baomidou.mybatisplus.extension.service.IService;

public interface UserService extends IService<User> {

    User getByUsername(String username);

    UserInfo getUserInfo(String username);

    Restful<Void> updateProfile(String username, UpdateProfileVO profile);
}
