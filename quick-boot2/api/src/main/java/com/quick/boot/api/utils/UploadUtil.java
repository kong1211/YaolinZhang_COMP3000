package com.quick.boot.api.utils;


import org.apache.tomcat.util.http.fileupload.IOUtils;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.OutputStream;
import java.util.UUID;

@Component
public class UploadUtil {

    @Value("${upload.savePath}")
    private String basePath;

    private void checkFile() {
        File file = new File(basePath);
        if (!file.exists()) {
            System.out.println(file.mkdirs() ? "创建上传文件夹successful" : "创建上传文件夹失败");
        }
        basePath = file.getAbsolutePath() + "/";
    }

    public String upload(MultipartFile file) {
        checkFile();
        String ofn = file.getOriginalFilename();
        assert ofn != null;
        String type = ofn.substring(ofn.lastIndexOf("."));
        String uuid = UUID.randomUUID().toString();

        String filename = uuid + type;

        String filepath = basePath + filename;

        try (FileOutputStream fos = new FileOutputStream(filepath)) {
            IOUtils.copy(file.getInputStream(), fos);
            fos.flush();
        } catch (IOException e) {
            e.printStackTrace();
        }

        return filename;
    }

    public void copyResource(String filename, OutputStream os) {
        checkFile();
        File file = new File(basePath + filename);
        if (file.exists()) {
            try (FileInputStream fis = new FileInputStream(file)) {
                IOUtils.copy(fis, os);
                os.flush();
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
    }
}
