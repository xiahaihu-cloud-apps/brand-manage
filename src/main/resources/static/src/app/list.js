import '../common'
import 'lightbox2/dist/css/lightbox.min.css'
import 'lightbox2'

import axios from "../axios"
import Vue from "vue"
import APIS from "../api"
import 'bootstrap-datepicker/dist/css/bootstrap-datepicker3.min.css'
import 'bootstrap-datepicker'
import 'bootstrap-datepicker/dist/locales/bootstrap-datepicker.zh-CN.min.js'
import 'blueimp-file-upload'

import Constant from '../constant'
import Messager from '../NotifyMessager'
import Helper from '../helper'

const app = new Vue({
    el: "#app",
    data: {
        dataUrl: APIS.LIST,
        formData: {
            id: "",
            name: "",
            code: "",
            logo: "",
            applyDate: "",
            company: "",
            price: "",
            categoryCode: "",
            status: Constant.Status.NOT_APPLY,
            rejectStatus: Constant.RejectStatus.NOT_REJECTED,
            startDate: "",
            endDate: "",
            credentialsFront: "",
            credentialsBack: "",
            remark: ""
        },
        searchForm: {
            keyword: "",
            status: "",
            rejectStatus: ""
        },
        statusList: Helper.getStatusList(),
        rejectStatusList: Helper.getRejectStatusList(),
        url: APIS.LIST,
        validateRules: {
            name: {
                required: true
            },
            applyDate: {
                date: true,
                required: true
            },
            company: {
                required: true
            },
            startDate: {
                date: true
            },
            endDate: {
                date: true
            }
        },
        canEdit: false,
        canDelete: false,
        tableColumns: [
            {
                field: "state",
                checkbox: true
            },
            {
                field: "id",
                title: "ID"
            },
            {
                field: "name",
                title: "名称"
            },
            {
                field: "logo",
                title: "商标样式",
                formatter: function(value, row) {
                    return '<a href="' + value + '" data-lightbox="imgLogo'+ row.id +'" data-title="'+ row.logo +'"><img src="' + value + '" width="100" height="100" ></a>';
                }
            },
            {
                field: "status",
                title: "审核状态",
                formatter: function(value) {
                    return Helper.getStatusName(value);
                }
            },
            {
                field: "rejectStatus",
                title: "驳回状态",
                formatter: function(value) {
                    return Helper.getRejectStatusName(value);
                }
            },
            {
                field: "price",
                title: "价格"
            },
            {
                field: "startDate",
                title: "有效期",
                formatter: function(value, row) {
                    return Helper.timeToDate(row.startDate) + " - " + 
                        Helper.timeToDate(row.endDate);
                }
            }
        ]
    },
    methods: {
        add: function() {
            this.openDialog();
        },
        edit: function() {
            if (this.canEdit) {
                let row = this.$refs.list.getSelections()[0];
                Object.assign(this.formData, row);
                this.formData.applyDate = Helper.timeToDate(this.formData.applyDate);
                this.formData.startDate = Helper.timeToDate(this.formData.startDate);
                this.formData.endDate = Helper.timeToDate(this.formData.endDate);
                this.openDialog();
            }
        },
        deleteItem: function() {

        },
        selected: function(rows) {
            this.canEdit = rows.length == 1;
            this.canDelete = rows.length > 0;
        },
        reset: function() {
            _.assign(this.searchForm, {
                keyword: "",
                status: "",
                rejectStatus: "" 
            })
        },
        search: function() {
            let query = {};
            _.forIn(this.searchForm, function(value, key) {
                if (!_.isNil(value) && value !== "") {
                    _.set(query, key, value);
                }
            })
            this.$refs.list.filterData(query);
        },
        save: function() {
            let _this = this;
            if (this.formData.id > 0) {
                axios.put(APIS.RESOURCE + "/" + this.formData.id, JSON.stringify(this.formData))
                    .then(function(response) {
                        var result = response.data;
                        if (result.code == Constant.ResponseCode.SUCCESS) {
                            Messager.success("更新商标成功");
                            _this.closeDialog();
                            _this.$refs.list.refresh();
                        } else {
                            Messager.error("更新商标失败");
                        }
                    }).catch(function(err) {
                        Messager.error("操作失败");
                    });
            } else {
                axios.post(APIS.SAVE, JSON.stringify(this.formData))
                .then(function(response){
                    var result = response.data;
                    if (result.code == Constant.ResponseCode.SUCCESS) {
                        Messager.success("添加商标成功");
                        _this.closeDialog();
                        _this.$refs.refresh();
                    } else {
                        Messager.error("添加商标失败");
                    }
                }).catch(function(error){
                    Messager.error("操作失败");
                })
            }
        },
        closeDialog: function() {
            this.$refs.formDialog.close();
        },
        openDialog: function() {
            this.$refs.formDialog.open();
        },
        deleteLogoImg: function() {
            this.formData.logo = "";
        },
        deleteCredentialsBack: function() {
            this.formData.credentialsBack = "";
            this.formData.tmpCredentialsBack = "";
        },
        deleteCredentialsFront: function() {
            this.formData.credentialsFront = "";
            this.formData.tmpCredentialsFront = "";
        }
    },
    computed: {
        formDialogTitle: function() {
            return this.formData.id != "" ? "编辑商标" : "新增商标"
        },
        showLogo: function() {
            return this.formData.logo != "";
        },
        showCredentialsFront: function() {
            return this.formData.credentialsFront != "";
        },
        showCredentialsBack: function() {
            return this.formData.credentialsBack != "";
        }
    },
    mounted: function() {
        let _this = this;
        $("#fileupload, #saveCredentialsBack, #saveCredentialsFront").fileupload({
            url: APIS.UPLOAD,
            dataType: "json",
            fileName: "file",
            done: function(e, data) {
                var targetId = e.target.id;
                if (targetId == "fileupload") {
                    _this.formData.logo = data.result.tmp;
                }
                if (targetId == "saveCredentialsBack") {
                    _this.formData.credentialsBack = data.result.tmp;
                }
                if (targetId == "saveCredentialsFront") {
                    _this.formData.credentialsFront = data.result.tmp;
                }
            }
        });

        $('#saveApplyDate, #saveStartDate, #saveEndDate').datepicker({
            language: 'zh-CN'
        }).on("changeDate", function(e) {
            var target = e.target.id;
            var date = $(this).val();
            if (date != "") {
                if (target == "saveApplyDate") {
                    _this.formData.applyDate = date;
                }
                if (target == "saveStartDate") {
                    _this.formData.startDate = date;
                }
                if (target == "saveEndDate") {
                    _this.formData.endDate = date;
                }
            }
        });
    }
});
