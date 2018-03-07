<template>
<div class="modal fade" :id="formDialogId" role="dialog" aria-labelledby="gridSystemModalLabel">
    <div class="modal-dialog" :class="customDialogClass" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                <h4 class="modal-title" id="gridSystemModalLabel">{{ title }}</h4>
            </div>
            <div class="modal-body">
                <div class="container-fluid">
                    <form :id="formId">
                        <slot></slot>
                    </form>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">关闭</button>
                <button type="button" class="btn btn-primary" @click="save">保存</button>
            </div>
        </div>
    </div>
</div>
</template>
<script>
import 'jquery-validation'
import 'jquery-validation/dist/localization/messages_zh'

export default {
    name: "FormDialog",
    data: function() {
        return {};
    },
    mounted: function() {
        let _this = this;
        let $form = $('#' + this.formId);
        $form.validate({
            errorClass: "has-error",
            rules: this.validateRules,
            onkeyup: false,
            messages: {}
        });
        let $dialog = $('#' + this.formDialogId);
        $dialog.on('hidden.bs.modal', function() {
            $form.data("validator").resetForm();
            $form.find(".has-error").removeClass("has-error");
            Object.assign(_this.formData, _this.defaultFormData);
        });
    },
    created: function() {
        this.defaultFormData = Object.assign({}, this.formData);
    },
    props: {
        formDialogId: {
            type: String,
            default: "formDialog"
        },
        customDialogClass: {
            type: String,
            default: "modal-default"
        },
        formId: {
            type: String,
            default: "form"
        },
        validateRules: {
            type: Object
        },
        submitForm: {
            type: Function
        },
        formData: {
            type: Object,
            default: function() {
                return {}
            }
        },
        title: {
            type: String
        }
    },
    methods: {
        save: function() {
            let $form = $("#" + this.formId);
            if ($form.valid()) {
                this.$emit("save");
            }
        },
        close: function() {
            Object.assign(this.formData, this.defaultFormData);
            let $dialog = $('#' + this.formDialogId);
            $dialog.modal("hide");
        },
        open: function() {
            let $dialog = $('#' + this.formDialogId);
            $dialog.modal({backdrop: 'static', keyboard: false}, 'show');
        }
    }
}
</script>
<style>
  label.has-error {color: #dd4b39}
</style>
