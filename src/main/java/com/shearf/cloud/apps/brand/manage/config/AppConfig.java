package com.shearf.cloud.apps.brand.manage.config;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.stereotype.Repository;

/**
 *
 * @author xiahaihu2009@gmail
 * @date 2018/2/6
 */
@Configuration
@MapperScan(basePackages = "com.shearf.cloud.apps.brand.manage.dal.mapper", annotationClass = Repository.class)
public class AppConfig {
}
