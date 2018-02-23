package com.shearf.cloud.apps.brand.manage.component;

import com.shearf.cloud.apps.brand.manage.domain.bean.UploadFile;
import org.apache.commons.io.FileUtils;
import org.apache.commons.io.FilenameUtils;
import org.apache.commons.lang3.StringUtils;
import org.joda.time.DateTime;
import org.joda.time.format.DateTimeFormat;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;

public class UploadComponent {

    private static final Logger LOGGER = LoggerFactory.getLogger(UploadComponent.class);

    private String tmpUrlPrefix;

    private String urlPrefix;

    private String tmpPathPrefix;

    private String storePathPrefix;

    public UploadComponent(String tmpUrlPrefix, String urlPrefix, String tmpPathPrefix, String storePathPrefix) {
        this.tmpUrlPrefix = tmpUrlPrefix;
        this.urlPrefix = urlPrefix;
        this.tmpPathPrefix = tmpPathPrefix;
        this.storePathPrefix = storePathPrefix;
    }

    public UploadFile saveUploadTmp(MultipartFile file) {
        final String ext = FilenameUtils.getExtension(file.getOriginalFilename());
        String today = DateTimeFormat.forPattern("yyyyMMdd").print(new DateTime());
        String tmpFilePath = today + "/" + new DateTime().getMillis() + "." + ext;
        File tmpFile = new File(tmpPathPrefix + "/" + tmpFilePath);
        synchronized (this) {
            try {
                FileUtils.forceMkdirParent(tmpFile);
            } catch (IOException e) {
                LOGGER.error("创建临时文件目录失败, tmpFile:{}", tmpFile.getAbsolutePath());
            }
        }
        try {
            file.transferTo(tmpFile);
        } catch (IOException e) {
            LOGGER.error("创建临时文件失败, tmpFile:{}", tmpFile.getAbsolutePath());
        }

        UploadFile uploadFile = new UploadFile();
        uploadFile.setTmp(tmpUrlPrefix + "/" + tmpFilePath);
        uploadFile.setUrl(urlPrefix + "/" + tmpFilePath);
        uploadFile.setSize((int)file.getSize());
        uploadFile.setName(file.getOriginalFilename());
        return uploadFile;
    }

    public String createUrl(String tmpUrl) {
        String tmpPath = tmpUrl;
        if (StringUtils.startsWith(tmpUrl, this.tmpUrlPrefix)) {
            tmpPath = StringUtils.removeStart(tmpUrl, this.tmpPathPrefix);
        }
        String realPath = storePathPrefix + "/" + tmpPath;
        File realFile = new File(realPath);
        File tmp = new File(tmpPathPrefix + "/" + tmpPath);
        try {
            FileUtils.forceMkdirParent(realFile);
        } catch (IOException e) {
            LOGGER.error("创建存储正式文件路径失败, file:{}", realFile.getAbsolutePath());
        }
        try {
            FileUtils.moveFile(tmp, realFile);
        } catch (IOException e) {
            LOGGER.error("转移临时文件到正式文件失败, src:{}, dest:{}", tmp.getAbsolutePath(), realFile.getAbsoluteFile());
        }
        return urlPrefix + "/" + tmpPath;
    }
}
