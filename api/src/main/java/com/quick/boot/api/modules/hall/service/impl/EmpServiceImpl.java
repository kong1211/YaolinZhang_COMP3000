package com.quick.boot.api.modules.hall.service.impl;

import org.springframework.stereotype.Service;
import javax.annotation.Resource;
import java.util.List;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.quick.boot.api.modules.hall.mapper.EmpMapper;
import com.quick.boot.api.modules.hall.domain.Emp;
import com.quick.boot.api.modules.hall.service.EmpService;
@Service
public class EmpServiceImpl extends ServiceImpl<EmpMapper, Emp> implements EmpService{

}
