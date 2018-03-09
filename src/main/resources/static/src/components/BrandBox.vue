<template>
<div class="box box-primary brand-box margin">
    <div class="box-header with-border">
        <h4 class="box-title">{{ brand.name }}</h4>
        <div class="box-tools pull-right">
            <button type="button" class="btn btn-box-tool" @click="showDetail(brand.id)">
                <i class="fa fa-expand"></i>
            </button>
        </div>
    </div>
    <div class="box-body">
        <div class="row">
            <div class="col-xs-12">
                <a :href="brand.logo" :data-lightbox="brand.logo + brand.id" :data-title="brand.name">
                    <img class="img-responsive center-block" :src="brand.logo" v-show="showLogo">
                </a>
            </div>
        </div>
        <div class="row">
            <label class="control-label col-xs-3">代码:</label>
            <div class="col-xs-4">
                {{ brand.code }}
            </div>
            <label class="control-label col-xs-3">分类: </label>
            <div class="col-xs-2">
                {{ brand.categoryCode }}
            </div>
        </div>
        <div class="row">
            <label class="control-label col-xs-4">公司:</label>
            <div class="col-xs-8">
                {{ brand.company }}
            </div>
        </div>
        <div class="row">
            <label class="control-label col-xs-4">价格:</label>
            <div class="col-xs-8">
                {{ brand.price }} 元
            </div>
        </div>
        <div class="row">
            <label class="control-label col-xs-4">有效期:</label>
            <div class="col-xs-8">
                {{ brand.startDate }} - {{ brand.endDate }}
            </div>
        </div>
        <div class="row">
            <label class="control-label col-xs-4">状态:</label>
            <div class="col-xs-8">
                {{ statusName }}
            </div>
        </div>
    </div>
</div>
</template>

<script>
import Contant from '../constant'
import Helper from '../helper'
import Axios from '../axios'
import APIS from '../api'
import Messager from '../NotifyMessager'

import 'lightbox2/dist/css/lightbox.min.css'
import 'lightbox2'

export default {
    name: "BrandBox",
    data: function() {
        return {
        }
    },
    props: {
        brand: {
            type: Object,
            required: true
        }
    },
    computed: {
        statusName: function() {
            return Helper.getStatusName(this.brand.status)
        },
        showLogo: function() {
            return this.brand.logo != "";
        }
    },
    methods: {
        showDetail: function(id) {
            Axios.get(APIS.RESOURCE + "/" + id).then(function(response) {
                let result = response.data;
                console.info(result);
                if (result.code == Contant.ResponseCode.SUCCESS) {
                    this.$emit("showDetail", result.data);
                } else {
                    Messager.error("查询商标详情失败"); 
                }
            }).catch(function(err) {
                Messager.error("查询商标详情失败"); 
            });
        }
    }
}
</script>
<style>
.brand-box {width: 280px; float: left;}
</style>


