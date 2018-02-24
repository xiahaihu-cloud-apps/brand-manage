package com.shearf.cloud.apps.brand.manage.domain.model;

import com.shearf.cloud.apps.commons.foundation.base.BaseModel;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.Getter;

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

    private Date startDate;

    private Date endDate;

    private String remark;

    private String credentialsFront;

    private String credentialsBack;

    private String createUser;

    private String updateUser;

    @AllArgsConstructor
    public enum Status {

        /**
         * 未开始申请
         */
        NOT_APPLY(0),

        /**
         * 已提交(已申请)
         */
        APPLIED(1),

        /**
         * 审核期
         */
        REVIEW(2),

        /**
         * 审核通过
         */
        APPROVED(3),

        /**
         * 申请驳回
         */
        REJECTED(4),
        ;

        @Getter
        private int value;
    }

    @AllArgsConstructor
    public enum RejectStatus {

        /**
         * 未驳回
         */
        NOT_REJECTED(0),

        /**
         * 部分驳回
         */
        PART_REJECTED(1),

        /**
         * 全部驳回
         */
        ALL_REJECTED(2),

        /**
         * 部分驳回复审
         */
        PART_REJECTED_RECHECK(3),

        /**
         * 部分驳回不复审
         */
        PART_REJECTED_NOT_RECHECK(4),

        /**
         * 全部驳回复审
         */
        ALL_REJECTED_RECHECK(5),

        /**
         * 全部驳回不复审
         */
        ALL_REJECTED_NOT_RECHECK(6),

        ;
        @Getter
        private int value;
    }
}
