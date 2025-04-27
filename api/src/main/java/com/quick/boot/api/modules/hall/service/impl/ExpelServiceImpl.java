package com.quick.boot.api.modules.hall.service.impl;

import org.springframework.stereotype.Service;
import javax.annotation.Resource;
import java.util.List;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.quick.boot.api.modules.hall.domain.Expel;
import com.quick.boot.api.modules.hall.mapper.ExpelMapper;
import com.quick.boot.api.modules.hall.service.ExpelService;
@Service
public class ExpelServiceImpl extends ServiceImpl<ExpelMapper, Expel> implements ExpelService{

}
