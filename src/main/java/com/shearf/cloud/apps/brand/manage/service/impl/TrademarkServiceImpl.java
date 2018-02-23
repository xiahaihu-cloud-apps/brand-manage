package com.shearf.cloud.apps.brand.manage.service.impl;

import com.shearf.cloud.apps.brand.manage.dal.mapper.TrademarkMapper;
import com.shearf.cloud.apps.brand.manage.domain.model.Trademark;
import com.shearf.cloud.apps.brand.manage.service.TrademarkService;
import com.shearf.cloud.apps.commons.foundation.mybatis.AbstractGenericService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.Date;

/**
 *
 * @author xiahaihu2009@gmail
 * @date 2018/2/7
 */
@Service
public class TrademarkServiceImpl extends AbstractGenericService<Trademark, Integer, TrademarkMapper> implements TrademarkService {

    @Resource
    private TrademarkMapper trademarkMapper;

    @Override
    protected TrademarkMapper getMapper() {
        return trademarkMapper;
    }

    @Override
    public void save(String username, Trademark trademark) {
        if (trademark.getId() != null && trademark.getId() > 0) {
            trademark.setUpdateUser(username);
            trademark.setUpdateTime(new Date());
            updateSelective(trademark);
        } else {
            trademark.setCreateUser(username);
            trademark.setCreateTime(new Date());
            insertSelective(trademark);
        }
    }
}
