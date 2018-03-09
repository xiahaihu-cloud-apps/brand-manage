package com.shearf.cloud.apps.brand.manage.domain.param;

import com.shearf.cloud.apps.commons.foundation.base.PaginationParam;
import lombok.Data;
import lombok.EqualsAndHashCode;

/**
 *
 * @author xiahaihu2009@gmail
 * @date 2018/2/7
 */
@EqualsAndHashCode(callSuper = true)
@Data
public class TrademarkQueryParam extends PaginationParam {

    private static final long serialVersionUID = -4185554823069203791L;

    /**
     * 关键字搜索名称与所属公司
     */
    private String keyword;

    /**
     * 申请状态
     */
    private Integer status;

    /**
     * 驳回状态
     */
    private Integer rejectStatus;
}
