package com.quick.boot.api.modules.system.service.impl;

import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.quick.boot.api.dto.Restful;
import com.quick.boot.api.modules.system.domain.Menu;
import com.quick.boot.api.modules.system.dto.UserInfo;
import com.quick.boot.api.modules.system.vo.UpdateProfileVO;
import com.quick.boot.api.modules.system.domain.User;
import com.quick.boot.api.modules.system.mapper.UserMapper;
import com.quick.boot.api.modules.system.service.UserService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;

@Service
public class UserServiceImpl extends ServiceImpl<UserMapper, User> implements UserService {


    @Override
    public User getByUsername(String username) {
        return query()
                .eq("username", username)
                .one();
    }

    @Override
    public UserInfo getUserInfo(String username) {
        User user = this.getByUsername(username);
        if (user == null) return null;
        UserInfo info = new UserInfo();
        info.setUsername(user.getUsername());
        info.setUserId(user.getId());
        info.setName(user.getName());
        info.setAvatar(user.getAvatar());
        info.setRoles(baseMapper.getRoles(user.getId()));
        info.setPermissions(baseMapper.getPermissions(user.getId()));
        info.setMenus(getUserMenus(user.getId(), 0));
        return info;
    }

    @Override
    public Restful<Void> updateProfile(String username, UpdateProfileVO profile) {
        User user = getByUsername(username);
        boolean isUpdatePwd = true;
        if (Objects.isNull(profile.getNewPwd()) ||
                Objects.isNull(profile.getConfirmPwd()) ||
                Objects.isNull(profile.getOldPwd())) {
            isUpdatePwd = false;
        }
        if (isUpdatePwd) {
            if (profile.getOldPwd().equals(user.getPassword())) {
                if (profile.getNewPwd().equals(profile.getConfirmPwd())) {
                    user.setPassword(profile.getNewPwd());
                } else {
                    return Restful.failed("newpassword和confirmpassword不一致！");
                }
            } else {
                return Restful.failed("oldpassword错误，pls重试！");
            }
        }
        user.setName(profile.getName());
        user.setPhone(profile.getPhone());
        user.setAvatar(profile.getAvatar());
        if (updateById(user)) {
            return Restful.ok(null);
        }
        return Restful.failed("系统繁忙！");
    }

    private List<Menu> getUserMenus(Integer uid, Integer pid) {
        List<Menu> list = baseMapper.getMenusByPid(uid, pid);
        for (Menu menu : list) {
            menu.setChildren(getUserMenus(uid, menu.getId()));
        }
        return list;
    }
}
