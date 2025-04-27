package com.quick.boot.api.modules.hall.service.impl;

import org.springframework.stereotype.Service;
import javax.annotation.Resource;
import java.util.List;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.quick.boot.api.modules.hall.domain.Item;
import com.quick.boot.api.modules.hall.mapper.ItemMapper;
import com.quick.boot.api.modules.hall.service.ItemService;
@Service
public class ItemServiceImpl extends ServiceImpl<ItemMapper, Item> implements ItemService{

}
