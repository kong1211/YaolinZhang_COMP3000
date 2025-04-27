package com.quick.boot.api.modules.hall.service;

import com.quick.boot.api.modules.hall.domain.Order;
import com.baomidou.mybatisplus.extension.service.IService;
public interface OrderService extends IService<Order>{

    void insertOrder(Order order);

    Order getOrder(Integer orderId);

    void deleteOrder(Integer id);
}
