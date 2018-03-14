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
        brandList: [],
        searchForm: {
            keyword: ""
        },
        total: 0,
        currentPage: 1,
        pageSize: Constant.DEFAULT_PAGE_SIZE
    },
    methods: {
        getByPage(pageNum) {
            let _this = this;
            var listUrl = APIS.LIST;
            let offset = 0;
            if (pageNum > 0) {
                offset = this.pageSize * pageNum
            }
            let params = _.assign({}, this.searchForm, {
                limit: this.pageSize,
                offset: offset
            });
            axios.get(APIS.LIST, {
                params: params
            }).then(function(response) {
                _this.brandList = response.data.rows;
                _this.total = response.data.total;
                _this.currentPage = pageNum;
            }).catch(function(error) {

            })
        },
        showDetail: function(brand) {
            this.$refs.dialog.brand = Object.assign({}, brand);
            console.info(this.$refs.dialog.brand);
            this.$refs.dialog.show();
        },
        search: function() {
            this.getByPage(1);
        },
        nextPage: function() {
            this.getByPage(this.nextPageNum);
        }
    },
    computed: {
        nextPageNum: function() {
            return this.currentPage * this.pageSize >= this.total ? 
                1 : this.currentPage + 1;
        }
    },
    created: function() {
        this.getByPage(this.nextPageNum);
    }
});