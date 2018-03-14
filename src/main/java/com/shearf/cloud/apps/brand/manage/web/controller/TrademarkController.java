package com.shearf.cloud.apps.brand.manage.web.controller;

import com.github.pagehelper.Page;
import com.github.pagehelper.PageHelper;
import com.shearf.cloud.apps.brand.manage.domain.model.Trademark;
import com.shearf.cloud.apps.brand.manage.domain.param.TrademarkQueryParam;
import com.shearf.cloud.apps.brand.manage.service.TrademarkService;
import com.shearf.cloud.apps.commons.foundation.response.Pagination;
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

    @Resource
    private TrademarkService trademarkService;

    @PostMapping
    public Response add(@RequestBody Trademark trademark) {
        trademark.setId(null);
        trademarkService.save(trademark);
        return Response.success();
    }

    @GetMapping("")
    @ResponseBody
    public Pagination<Trademark> list(TrademarkQueryParam param) {

        Page<Trademark> page = PageHelper.startPage(param.getPageNumber(), param.getPageSize());
        trademarkService.queryByParam(param);
        return Pagination.build(page.getTotal(), page.getResult());
    }

    @GetMapping("/{id}")
    public Response<Trademark> info(@PathVariable("id") int id) {
        Trademark trademark = trademarkService.get(id);
        return Response.success(trademark);
    }

    @PutMapping("/{id}")
    public Response update(@PathVariable("id") int id, @RequestBody Trademark trademark) {
        trademark.setId(id);
        trademarkService.save(trademark);
        return Response.success();
    }

    @DeleteMapping("")
    @ResponseBody
    public Response delete(String ids) {
        if (StringUtils.isNoneBlank(ids)) {
            for (String id : StringUtils.split(ids, ",")) {
                trademarkService.delete(Integer.valueOf(id));
            }
        }
        return Response.success();
    }

}
