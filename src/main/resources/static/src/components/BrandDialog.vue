<template>
<div class="modal fade" tabindex="-1" :id="dialogId" role="dialog" v-show="false">
  <div class="modal-dialog modal-lg" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <h4 class="modal-title">商标详情</h4>
      </div>
      <div class="modal-body">
          <dl class="dl-horizontal">
              <dt>名称:</dt>
              <dd>{{ brand.name }}</dd>
              <dt>商标样式:</dt>
              <dd v-show="showLogo">
                  <a :href="brand.logo" data-lightbox="logo" :data-title="brand.logo">
                      <img class="img-responsive" :src="brand.logo" height="400" width="400">
                  </a>
              </dd>
              <dt>商标代码:</dt>
              <dd>{{ brand.code }}</dd>
              <dt>商标分类代码:</dt>
              <dd>{{ brand.categoryCode }}</dd>
              <dt>公司:</dt>
              <dd>{{ brand.company }}</dd>
              <dt>申请日期:</dt>
              <dd>{{ brand.applyDate }}</dd>
              <dt>申请状态:</dt>
              <dd>{{ statusName }}</dd>
              <dt>驳回状态</dt>
              <dd>{{ rejectStatusName }}</dd>
              <dt>价格:</dt>
              <dd>{{ brand.price }} 元</dd>
              <dt>有效期:</dt>
              <dd>{{ brand.startDate }} - {{ brand.endDate }}</dd>
              <dt>证件照正面:</dt>
              <dd v-show="showCredentialsFront">
                  <a :href="brand.credentialsFront" data-lightbox="credentialsFront" :data-title="brand.credentialsFront">
                      <img :src="brand.credentialsFront" class="img-responsive">
                  </a>
              </dd>
              <dt>证件照背面:</dt>
              <dd v-show="showCredentialsBack">
                  <a :href="brand.credentialsBack" data-lightbox="credentialsBack" :data-title="brand.credentialsBack">
                      <img :src="brand.credentialsBack" class="img-responsive">
                  </a>
              </dd>
          </dl>
          <br>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-primary" data-dismiss="modal">关闭</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import Helper from '../helper'

import 'lightbox2/dist/css/lightbox.min.css'
import 'lightbox2'

export default {
    data: function() {
        return {
            dialogId: "BrandDialog",
            dialog: null,
            brand: {
            }
        }
    },
    methods: {
        show: function() {
            this.dialog.modal("show");
        }
    },
    computed: {
        showLogo: function() {
            let logo = this.brand.logo;
            return logo != undefined && logo != null && logo != "";
        },
        statusName: function() {
            return Helper.getStatusName(this.brand.status);
        },
        rejectStatusName: function() {
            return Helper.getRejectStatusName(this.brand.rejectStatus);
        },
        showCredentialsBack: function() {
            let credentialsBack = this.brand.credentialsBack;
            return credentialsBack != undefined && credentialsBack != null &&
                credentialsBack != "";
        },
        showCredentialsFront: function() {
            let credentialsFront = this.brand.credentialsFront;
            return credentialsFront != undefined && credentialsFront != null &&
                credentialsFront != "";
        }
    },
    mounted: function() {
        this.dialog = $('#' + this.dialogId);
    }
}
</script>

<style>

</style>
