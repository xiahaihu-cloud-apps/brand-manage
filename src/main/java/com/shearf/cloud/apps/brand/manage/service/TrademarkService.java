package com.shearf.cloud.apps.brand.manage.service;

import com.shearf.cloud.apps.brand.manage.domain.model.Trademark;
import com.shearf.cloud.apps.commons.foundation.mybatis.IGenericService;

/**
 *
 * @author xiahaihu2009@gmail
 * @date 2018/2/7
 */
public interface TrademarkService extends IGenericService<Trademark, Integer> {

    /**
     * 保存
     *
     * @param username
     * @param trademark
     */
    void save(String username, Trademark trademark);

    /**
     * 保存
     *
     * @param trademark
     */
    void save(Trademark trademark);
}
