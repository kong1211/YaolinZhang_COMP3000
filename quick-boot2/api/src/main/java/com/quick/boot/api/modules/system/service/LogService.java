package com.quick.boot.api.modules.system.service;

import com.baomidou.mybatisplus.extension.service.IService;
import com.quick.boot.api.modules.system.domain.Log;

public interface LogService extends IService<Log> {

    void addLog(String username, String content);

}
