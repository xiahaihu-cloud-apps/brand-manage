package com.shearf.cloud.apps.brand.manage.web.controller;

import com.shearf.cloud.apps.brand.manage.domain.model.Trademark;
import com.shearf.cloud.apps.brand.manage.service.TrademarkService;
import com.shearf.cloud.apps.commons.foundation.response.Response;
import org.apache.commons.lang3.StringUtils;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;

/**
 * @author xiahaihu2009@gmail.com
 */
@RequestMapping("mark")
@RestController
public class TrademarkController {

    private static String tmpPathWord = "tmp";
    @Resource
    private TrademarkService trademarkService;

    @PostMapping
    public Response add(@RequestBody Trademark trademark) {
        trademarkService.save(trademark);
        return Response.success();
    }

    @RequestMapping("/{id}")
    public Response<Trademark> info(@PathVariable("id") int id) {
        Trademark trademark = trademarkService.get(id);
        return Response.success(trademark);
    }

    @PutMapping("/{id}")
    public Response update(@PathVariable("id") int id, @RequestBody Trademark trademark) {
        return Response.success();
    }

}
