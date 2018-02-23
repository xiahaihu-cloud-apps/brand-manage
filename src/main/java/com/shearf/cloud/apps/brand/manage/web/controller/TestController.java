package com.shearf.cloud.apps.brand.manage.web.controller;

import org.apache.commons.io.FileUtils;
import org.springframework.core.io.ClassPathResource;
import org.springframework.stereotype.Controller;
import org.springframework.util.ResourceUtils;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletRequest;
import java.io.File;
import java.io.IOException;

/**
 * @author xiahaihu
 */
@Controller
public class TestController {

    @RequestMapping("test")
    @ResponseBody
    public String test(HttpServletRequest request) {
//        String path = new ClassPathResource("static/images").getPath();
//        String tmpPath = request.getServletContext().getRealPath("/public/tmp");
        String tmpPath = new ClassPathResource("classpath:/static/tmp").getPath();
        File tmpFile = new File(tmpPath);
        if (!tmpFile.exists()) {
            if (!tmpFile.mkdirs()) {
                return "fail to make dir";
            }
            try {
                FileUtils.touch(new File(tmpPath + "/1.txt"));
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
        return "OK";
    }
}
