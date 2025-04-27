package com.quick.boot.api.modules.hall.service.impl;

import org.springframework.stereotype.Service;
import javax.annotation.Resource;
import java.util.List;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.quick.boot.api.modules.hall.mapper.OrderItemMapper;
import com.quick.boot.api.modules.hall.domain.OrderItem;
import com.quick.boot.api.modules.hall.service.OrderItemService;
@Service
public class OrderItemServiceImpl extends ServiceImpl<OrderItemMapper, OrderItem> implements OrderItemService{

}
