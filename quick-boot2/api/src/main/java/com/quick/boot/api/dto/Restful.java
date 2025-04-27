package com.quick.boot.api.dto;

import lombok.Data;

@Data
public class Restful<T> {
    private Integer code;
    private String msg;
    private T data;

    private Restful(Integer code, String msg, T data) {
        this.code = code;
        this.msg = msg;
        this.data = data;
    }

    public static <T> Restful<T> ok(T data) {
        return new Restful<>(0, "Handlesuccessful", data);
    }

    public static <T> Restful<T> ok() {
        return new Restful<>(0, "Handlesuccessful", null);
    }

    public static <T> Restful<T> failed(String msg) {
        return new Restful<>(-1, msg, null);
    }

    public static <T> Restful<T> failed() {
        return new Restful<>(-1, "Handle失败", null);
    }

    public static <T> Restful<T> failed(Integer code, String msg) {
        return new Restful<>(code, msg, null);
    }

}
