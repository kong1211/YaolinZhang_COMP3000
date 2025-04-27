package com.quick.boot.api.modules.hall.service.impl;

import com.baomidou.mybatisplus.core.conditions.AbstractWrapper;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.quick.boot.api.modules.hall.domain.OrderItem;
import com.quick.boot.api.modules.hall.service.OrderItemService;
import com.quick.boot.api.modules.system.domain.User;
import com.quick.boot.api.modules.system.service.UserService;
import com.quick.boot.jwtboot.helper.LoginHelper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import javax.annotation.Resource;
import java.math.BigDecimal;
import java.util.Date;
import java.util.List;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.quick.boot.api.modules.hall.domain.Order;
import com.quick.boot.api.modules.hall.mapper.OrderMapper;
import com.quick.boot.api.modules.hall.service.OrderService;
import org.springframework.transaction.annotation.Transactional;

@Service
public class OrderServiceImpl extends ServiceImpl<OrderMapper, Order> implements OrderService{

    @Autowired
    private UserService userService;
    @Autowired
    private OrderItemService orderItemService;



    @Override
    @Transactional
    public void insertOrder(Order order) {
        BigDecimal totalAmount = BigDecimal.ZERO;
        order.setCreateTime(new Date());
        User user = userService.getByUsername(LoginHelper.getUsername());
        order.setUserId(user.getId());
        order.setNickName(user.getName());
        order.setState("orderd");
        List<OrderItem> items = order.getItems();
        for (OrderItem item : items) {
            Integer num = item.getNum();
            BigDecimal unitPrice = item.getUnitPrice();
            BigDecimal totalPrice = unitPrice.multiply(BigDecimal.valueOf(num));
            item.setTotalPrice(totalPrice);
            totalAmount = totalAmount.add(totalPrice);
        }
        order.setTotalAmount(totalAmount);
        if (this.save(order)){
           items.forEach(orderItem -> orderItem.setOrderId(order.getId()));
           orderItemService.saveBatch(items);
        }
    }

    @Override
    public Order getOrder(Integer orderId) {
        Order order = getById(orderId);
        List<OrderItem> items = orderItemService.query().eq("order_id", orderId).list();
        order.setItems(items);
        return order;
    }

    @Override
    @Transactional
    public void deleteOrder(Integer id) {
        AbstractWrapper<OrderItem, String, QueryWrapper<OrderItem>> removeWrapper = orderItemService
                .query()
                .getWrapper();
        removeWrapper.eq("order_id",id);
        orderItemService.remove(removeWrapper);
        removeById(id);
    }
}
