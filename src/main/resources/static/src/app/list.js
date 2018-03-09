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
        statusList: Helper.getStatusList(),
        rejectStatusList: Helper.getRejectStatusList(),
        validateRules: {
            name: {
                required: true
            },
            applyDate: {
                date: true
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
        canDelete: false
    },
    methods: {
        add: function() {
            this.openDialog();
        },
        edit: function() {

        },
        deleteItem: function() {

        },
        save: function() {
            axios.post(APIS.SAVE, JSON.stringify(this.formData))
                .then(function(response){
                    var result = response.data;
                    if (result.code == Constant.ResponseCode.SUCCESS) {

                    } else {

                    }
                })
                .catch(function(error){
                    console.info(error);
                })
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
            if (target == "saveApplyDate") {
                _this.formData.applyDate = date;
            }
            if (target == "saveStartDate") {
                _this.formData.startDate = date;
            }
            if (target == "saveEndDate") {
                _this.formData.endDate = date;
            }
        });
    }
});
