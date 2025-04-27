package com.quick.boot.api.modules.hall.controller;

import com.baomidou.mybatisplus.extension.api.R;
import com.baomidou.mybatisplus.extension.conditions.query.QueryChainWrapper;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.quick.boot.api.dto.Restful;
import com.quick.boot.api.modules.hall.domain.Order;
import com.quick.boot.api.modules.hall.domain.OrderItem;
import com.quick.boot.api.modules.hall.service.OrderService;
import com.quick.boot.api.modules.system.domain.User;
import com.quick.boot.api.modules.system.service.UserService;
import com.quick.boot.api.vo.PageQuery;
import com.quick.boot.jwtboot.helper.LoginHelper;
import org.apache.shiro.SecurityUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.math.BigDecimal;
import java.util.Date;
import java.util.List;

@RestController
@RequestMapping("hall/order")
public class OrderController {
    @Autowired
    private OrderService orderService;
    @Autowired
    private UserService userService;

    @GetMapping("list")
    public Restful<?> getOrders(PageQuery query){
        QueryChainWrapper<Order> queryChainWrapper = orderService
                .query()
                .like("nick_name", query.getSearch());
        if (SecurityUtils.getSubject().hasRole("customer")){
            User user = userService.getByUsername(LoginHelper.getUsername());
            queryChainWrapper.eq("user_id",user.getId());
        }

        Page<Order> orderPage = queryChainWrapper
                .page(new Page<>(query.getPageNum(), query.getPageSize()));
        return Restful.ok(orderPage);
    }

    @PostMapping("insert")
    public Restful<Void> insertOrder(@RequestBody Order order){
        orderService.insertOrder(order);
        return Restful.ok();
    }

    @GetMapping("get/{id}")
    public Restful<Order> getOrder(@PathVariable Integer id){
        return Restful.ok(orderService.getOrder(id));
    }

    @PutMapping("update")
    public Restful<Void> updateOrder(@RequestBody Order order){
        orderService.updateById(order);
        return Restful.ok();
    }

    @GetMapping("del/{id}")
    public Restful<Void> delOrder(@PathVariable Integer id){
        orderService.deleteOrder(id);
        return Restful.ok();
    }


}
