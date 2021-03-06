import './plugins/bootstrap-notify/bootstrap-notify.min.js'
import 'animate.css'
import './plugins/bootstrap-notify/custom-bootstrap-notify.css'
import 'myclabs.jquery.confirm'
import 'lodash'


$.notifyDefaults({
    newest_on_top: true,
    placement: {
        align: "center",
        from: "top"
    },
    delay: 2000,
    offset: {
        y: 60
    },
    z_index: 9999
});

const Messager = {
    info: function(msg) {
        $.notifyClose();
        $.notify({
            icon: "glyphicon glyphicon-info-sign",
            message: msg
        }, {
            type: "info",
        });
    },
    success: function(msg, callback) {
        const setting = {
            type: "success",
        }
        if (callback != undefined && callback != null && $.isFunction(callback)) {
            setting.onClosed = callback,
            setting.delay = 1000
        } 
        msg = msg == undefined || msg == "" ? "操作成功" : msg;
        $.notifyClose();
        $.notify({
            icon: "glyphicon glyphicon-ok-sign",
            message: msg
        }, setting);
    },
    warn: function(msg) {
        $.notifyClose();
        $.notify({
            icon: 'glyphicon glyphicon-warning-sign',
            message: msg
        }, {
            type: "warning"
        });
    },
    error: function(msg, callback) {
        const setting = {
            type: "danger",
        }
        if (callback != undefined && callback != null && $.isFunction(callback)) {
            setting.delay = 0;
            setting.onClosed = callback
        }
        $.notifyClose();
        $.notify({
            icon: "glyphicon glyphicon-remove-sign",
            message: msg
        }, setting);
    },
    confirm: function(msg, confirm, cancel) {
        let option = {
            title: "确认",
            text: msg,
            confirm: confirm,
            confirmButton: "确认",
            cancelButton: "取消",
            dialogClass: "modal-dialog"
        };
        if (!_.isNil(cancel)) {
            option.cancel = cancel;
        }
        $.confirm(option);
    }
    
}

export default Messager