import '../common'
import 'lightbox2/dist/css/lightbox.min.css'
import 'lightbox2'

import axios from "../axios"
import Vue from "vue"
import APIS from "../api"
import 'bootstrap-datepicker'
import 'blueimp-file-upload'

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
            status: "",
            rejectStatus: "",
            startTime: "",
            endTime: "",
            credentials: "",
            tmpCredentials: ""
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
            status: "",
            rejectStatus: "",
            startDate: "",
            endDate: "",
            credentials: "",
            tmpCredentials: ""
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
        credentialsImg: function() {
            return this.formData.tmpCredentials != "" ? this.formData.tmpCredentials : 
                this.formData.credentials;
        },
        showLogo: function() {
            return this.logoImg != "";
        },
        showCredentials: function() {
            return this.credentialsImg != "";
        }
    },
    mounted: function() {
        let _this = this;
        $("#fileupload").fileupload({
            url: APIS.UPLOAD,
            dataType: "json",
            fileName: "file",
            done: function(e, data) {
                _this.formData.tmpLogo = data.result.tmp;
            }
        })
    }
});
