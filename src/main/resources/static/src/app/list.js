import '../common'
import 'lightbox2/dist/css/lightbox.min.css'
import 'lightbox2'

import axios from "../axios"
import Vue from "vue"
import APIS from "../api"
import 'bootstrap-datepicker'
import 'blueimp-file-upload'

import '../constant'
import Constant from '../constant';

const app = new Vue({
    el: "#app",
    data: {
        dataUrl: APIS.LIST,
        formData: {
            id: "",
            name: "",
            code: "",
            logo: "",
            tmpLogo: "",
            applyDate: "",
            company: "",
            price: "",
            categoryCode: "",
            status: Constant.Status.NOT_APPLY,
            rejectStatus: Constant.RejectStatus.NOT_REJECTED,
            startTime: "",
            endTime: "",
            credentialsFront: "",
            tmpCredentialsFront: "",
            credentialsBack: "",
            tmpCredentialsBack: ""
        },
        defaultFormData: {
            id: "",
            name: "",
            code: "",
            logo: "",
            tmpLogo: "",
            applyDate: "",
            company: "",
            price: "",
            categoryCode: "",
            status: Constant.Status.NOT_APPLY,
            rejectStatus: Constant.RejectStatus.NOT_REJECTED,
            startDate: "",
            endDate: "",
            credentialsFront: "",
            tmpCredentialsFront: "",
            credentialsBack: "",
            tmpCredentialsBack: ""
        },
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

        },
        closeDialog: function() {
            this.$refs.formDialog.close();
        },
        openDialog: function() {
            this.$refs.formDialog.open();
        },
        deleteLogoImg: function() {
            
        }
    },
    computed: {
        formDialogTitle: function() {
            return this.formData.id != "" ? "编辑商标" : "新增商标"
        },
        logoImg: function() {
            return this.formData.tmpLogo != "" ? this.formData.tmpLogo :
                this.formData.logo;
        },
        credentialsImgFront: function() {
            return this.formData.tmpCredentialsFront != "" ? this.formData.tmpCredentialsFront : 
                this.formData.credentialsFront;
        },
        credentialsImgBack: function() {
            return this.formData.tmpCredentialsBack != "" ? this.formData.tmpCredentialsBack : 
                this.formData.credentialsBack;
        },
        showLogo: function() {
            return this.logoImg != "";
        },
        showCredentialsFront: function() {
            return this.credentialsImgFront != "";
        },
        showCredentialsBack: function() {
            return this.credentialsImgBack != "";
        }
    },
    mounted: function() {
        let _this = this;
        $("#fileupload, #saveCredentialsBack, #saveCredentialsFront").fileupload({
            url: APIS.UPLOAD,
            dataType: "json",
            fileName: "file",
            done: function(e, data) {
                console.info(e.target.id);
                var targetId = e.target.id;
                if (targetId == "fileupload") {
                    _this.formData.tmpLogo = data.result.tmp;
                }
                if (targetId == "saveCredentialsBack") {
                    _this.formData.tmpCredentialsBack = data.result.tmp;
                }
                if (targetId == "saveCredentialsFront") {
                    _this.formData.tmpCredentialsFront = data.result.tmp;
                }
            }
        });
    }
});
