package com.shearf.cloud.apps.brand.manage.web.controller;

import com.shearf.cloud.apps.brand.manage.component.UploadComponent;
import com.shearf.cloud.apps.brand.manage.domain.bean.ConfigValue;
import com.shearf.cloud.apps.brand.manage.domain.bean.UploadFile;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;

import javax.annotation.Resource;

/**
 * @author xiahaihu
 */
@Controller
public class FileController {

    private static final Logger LOGGER = LoggerFactory.getLogger(FileController.class);

    @Resource
    private UploadComponent uploadComponent;

    @RequestMapping("upload")
    @ResponseBody
    public UploadFile upload(@RequestParam("file") MultipartFile file) {
        return uploadComponent.saveUploadTmp(file);
    }

}
