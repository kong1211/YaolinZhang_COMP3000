package com.quick.boot.api.vo;

import lombok.Data;

@Data
public class PageQuery {
    // 关键字
    private String search;
    // 页码
    private Integer pageNum;
    // 页大小
    private Integer pageSize;
}
