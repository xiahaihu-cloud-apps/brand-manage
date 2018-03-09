import '../common'

import axios from "../axios"
import Vue from "vue"
import APIS from '../api'
import Constant from '../constant'

import BrandBox from '../components/BrandBox.vue'
import BrandDialog from '../components/BrandDialog.vue'

Vue.component('brand-box', BrandBox)
Vue.component('brand-dialog', BrandDialog)

const app = new Vue({
    el: "#app",
    data: {
        brandList: []
    },
    methods: {
        getByPage(pageNum) {
            let _this = this;
            pageNum = pageNum == undefined || pageNum == null || pageNum == 0 ?
                1 : pageNum;
            var listUrl = APIS.LIST;
            axios.get(APIS.LIST, {
                params: {
                    pageNum: pageNum,
                    pageSize: Constant.DEFAULT_PAGE_SIZE
                }
            }).then(function(response) {
                _this.brandList = response.data.rows;
            }).catch(function(error) {

            })
        },
        showDialog: function(brand) {
            this.$refs.dialog.show();
        }
    },
    created: function() {
        this.getByPage(1);
    }
});