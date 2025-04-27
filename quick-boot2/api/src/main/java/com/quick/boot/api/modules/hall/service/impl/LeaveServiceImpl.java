package com.quick.boot.api.modules.hall.service.impl;

import org.springframework.stereotype.Service;
import javax.annotation.Resource;
import java.util.List;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.quick.boot.api.modules.hall.domain.Leave;
import com.quick.boot.api.modules.hall.mapper.LeaveMapper;
import com.quick.boot.api.modules.hall.service.LeaveService;
@Service
public class LeaveServiceImpl extends ServiceImpl<LeaveMapper, Leave> implements LeaveService{

}
