package com.shearf.cloud.apps.brand.manage.service.impl;

import com.shearf.cloud.apps.brand.manage.component.UploadComponent;
import com.shearf.cloud.apps.brand.manage.dal.mapper.TrademarkMapper;
import com.shearf.cloud.apps.brand.manage.domain.bean.ConfigValue;
import com.shearf.cloud.apps.brand.manage.domain.model.Trademark;
import com.shearf.cloud.apps.brand.manage.service.TrademarkService;
import com.shearf.cloud.apps.commons.foundation.mybatis.AbstractGenericService;
import org.apache.commons.lang3.StringUtils;
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

    @Resource
    private ConfigValue configValue;

    @Resource
    private UploadComponent uploadComponent;

    @Override
    protected TrademarkMapper getMapper() {
        return trademarkMapper;
    }

    @Override
    public void save(String username, Trademark trademark) {
        if (StringUtils.startsWith(trademark.getLogo(), configValue.getTmpUrlPrefix())) {
            trademark.setLogo(uploadComponent.createUrl(trademark.getLogo()));
        }
        if (StringUtils.contains(trademark.getCredentialsFront(), configValue.getTmpUrlPrefix())) {
            trademark.setCredentialsFront(uploadComponent.createUrl(trademark.getCredentialsFront()));
        }

        if (StringUtils.contains(trademark.getCredentialsBack(), configValue.getTmpUrlPrefix())) {
            trademark.setCredentialsBack(uploadComponent.createUrl(trademark.getCredentialsBack()));
        }

        if (trademark.getId() != null && trademark.getId() > 0) {
            trademark.setUpdateUser(username);
            trademark.setUpdateTime(new Date());
            updateSelective(trademark);
        } else {
            trademark.setCreateUser(username);
            trademark.setCreateTime(new Date());
            trademark.setUpdateUser(username);
            trademark.setUpdateTime(trademark.getCreateTime());
            insertSelective(trademark);
        }
    }

    @Override
    public void save(Trademark trademark) {
        save("", trademark);
    }
}
