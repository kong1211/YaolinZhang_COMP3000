package com.quick.boot.api.modules.base.dto;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class UploadResult {

    private String name;
    private String url;

}
