package com.quick.boot.api.modules.base.controller;

import com.quick.boot.api.modules.base.dto.UploadResult;
import com.quick.boot.api.dto.Restful;
import com.quick.boot.api.utils.UploadUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.ServletOutputStream;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@RestController
@CrossOrigin("*")
public class UploadController {

    @Autowired
    private UploadUtil uploadUtil;
    @Value("${upload.httpPath}")
    public String httpPath;

    @PostMapping("upload")
    public Restful<UploadResult> uploadFile(MultipartFile file) {
        if (file.isEmpty()) {
            return Restful.failed("pls上传文件！");
        } else {
            String filename = uploadUtil.upload(file);
            String name = file.getOriginalFilename();
            String url = httpPath + "?filename=" + filename;
            return Restful.ok(new UploadResult(name, url));
        }
    }

    @GetMapping("files/get")
    public void downloadFiles(String filename, HttpServletResponse response) {
        try {
            response.setHeader("Content-Disposition", "attachment;filename=" + filename);
            ServletOutputStream os = response.getOutputStream();
            uploadUtil.copyResource(filename, os);
            os.flush();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
