package com.quick.boot.api.modules.system.service.impl;

import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.quick.boot.api.modules.system.domain.Log;
import com.quick.boot.api.modules.system.mapper.LogMapper;
import com.quick.boot.api.modules.system.service.LogService;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.util.Date;

@Service
public class LogServiceImpl extends ServiceImpl<LogMapper, Log> implements LogService {

    @Value("${quickboot.log_open}")
    private boolean openLog;

    @Override
    public void addLog(String username, String content) {
        if (!openLog) return;
        Log log = new Log();
        log.setCreateTime(new Date());
        log.setUsername(username);
        log.setContent(content);
        save(log);
    }
}
