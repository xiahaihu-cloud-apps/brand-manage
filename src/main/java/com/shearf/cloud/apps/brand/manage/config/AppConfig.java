package com.shearf.cloud.apps.brand.manage.config;

import com.shearf.cloud.apps.brand.manage.component.UploadComponent;
import com.shearf.cloud.apps.brand.manage.domain.bean.ConfigValue;
import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.bind.RelaxedPropertyResolver;
import org.springframework.context.EnvironmentAware;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.env.Environment;
import org.springframework.core.env.PropertyResolver;
import org.springframework.stereotype.Repository;

/**
 *
 * @author xiahaihu2009@gmail
 * @date 2018/2/6
 */
@Configuration
@MapperScan(basePackages = "com.shearf.cloud.apps.brand.manage.dal.mapper", annotationClass = Repository.class)
public class AppConfig implements EnvironmentAware {

    private PropertyResolver propertyResolver;

    @Bean
    public ConfigValue configValue() {
        ConfigValue configValue = new ConfigValue();
        configValue.setImagePath(propertyResolver.getProperty("app.image.path"));
        configValue.setTmpPath(propertyResolver.getProperty("app.upload.tmp.path"));
        configValue.setTmpUrlPrefix(propertyResolver.getProperty("app.image.tmp.prefix"));
        configValue.setUrlPrefix(propertyResolver.getProperty("app.image.url.prefix"));
        return configValue;
    }

    @Bean
    public UploadComponent uploadComponent(ConfigValue configValue) {
        return new UploadComponent(configValue.getTmpUrlPrefix(), configValue.getUrlPrefix(),
                configValue.getTmpPath(), configValue.getImagePath());
    }

    @Override
    public void setEnvironment(Environment environment) {
        propertyResolver = new RelaxedPropertyResolver(environment);
    }
}
