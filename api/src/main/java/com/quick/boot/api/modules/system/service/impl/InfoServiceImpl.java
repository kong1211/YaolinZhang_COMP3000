package com.quick.boot.api.modules.system.service.impl;

import org.springframework.stereotype.Service;
import javax.annotation.Resource;
import java.util.List;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.quick.boot.api.modules.system.mapper.InfoMapper;
import com.quick.boot.api.modules.system.domain.Info;
import com.quick.boot.api.modules.system.service.InfoService;

@Service
public class InfoServiceImpl extends ServiceImpl<InfoMapper, Info> implements InfoService {

}


