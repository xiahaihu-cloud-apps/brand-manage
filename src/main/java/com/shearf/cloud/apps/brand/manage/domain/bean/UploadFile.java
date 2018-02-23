package com.shearf.cloud.apps.brand.manage.domain.bean;

import lombok.Data;

import java.io.Serializable;

/**
 * @author xiahaihu
 */
@Data
public class UploadFile implements Serializable {

    private static final long serialVersionUID = -2701925563549892921L;

    private String tmp;

    private String url;

    private String name;

    private Integer size;
}
