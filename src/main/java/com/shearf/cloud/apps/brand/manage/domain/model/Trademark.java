package com.shearf.cloud.apps.brand.manage.domain.model;

import com.shearf.cloud.apps.commons.foundation.base.BaseModel;
import lombok.Data;
import lombok.EqualsAndHashCode;

import java.math.BigDecimal;
import java.util.Date;

/**
 *
 * @author xiahaihu2009@gmail
 * @date 2018/2/6
 */
@EqualsAndHashCode(callSuper = true)
@Data
public class Trademark extends BaseModel {

    private Integer id;

    private String name;

    private String logo;

    private String code;

    private Date applyDate;

    private String company;

    private BigDecimal price;

    private String categoryCode;

    private Integer status;

    private Integer rejectStatus;

    private Date startTime;

    private Date endTime;

    private String credentials;

    private String createUser;

    private String updateUser;
}
