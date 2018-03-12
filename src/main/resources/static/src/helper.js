import Constant from './constant'
import moment from 'moment'

export default {
    getStatusList: function() {
        return [{
                value: Constant.Status.NOT_APPLY,
                text: this.getStatusName(Constant.Status.NOT_APPLY)
            }, {
                value: Constant.Status.APPLIED,
                text: this.getStatusName(Constant.Status.APPLIED)
            }, {
                value: Constant.Status.REVIEW,
                text: this.getStatusName(Constant.Status.REVIEW)
            }, {
                value: Constant.Status.APPROVED,
                text: this.getStatusName(Constant.Status.APPROVED)
            }, {
                value: Constant.Status.REJECTED,
                text: this.getStatusName(Constant.Status.REJECTED)
            }
        ]
    },
    getStatusName: function(status) {
        let text = "";
        switch(status) {
            case Constant.Status.NOT_APPLY:
                text = "未申请";
                break;
            case Constant.Status.APPLIED: 
                text = "已提交";
                break;
            case Constant.Status.REVIEW: 
                text = "审核期";
                break;
            case Constant.Status.APPROVED: 
                text = "审核通过";
                break;
            case Constant.Status.REJECTED:
                text = "驳回";
                break;
        }
        return text;
    },
    getRejectStatusList: function() {
        return [{
            value: Constant.RejectStatus.NOT_REJECTED,
            text: this.getRejectStatusName(Constant.RejectStatus.NOT_REJECTED)
        }, {
            value: Constant.RejectStatus.PART_REJECTED,
            text: this.getRejectStatusName(Constant.RejectStatus.PART_REJECTED)
        }, {
            value: Constant.RejectStatus.ALL_REJECTED,
            text: this.getRejectStatusName(Constant.RejectStatus.ALL_REJECTED)
        }, {
            value: Constant.RejectStatus.PART_REJECTED_RECHECK,
            text: this.getRejectStatusName(Constant.RejectStatus.PART_REJECTED_RECHECK)
        }, {
            value: Constant.RejectStatus.PART_REJECTED_NOT_RECHECK,
            text: this.getRejectStatusName(Constant.RejectStatus.PART_REJECTED_NOT_RECHECK)
        }, {
            value: Constant.RejectStatus.ALL_REJECTED_NOT_RECHECK,
            text: this.getRejectStatusName(Constant.RejectStatus.ALL_REJECTED_NOT_RECHECK)
        }, {
            value: Constant.RejectStatus.ALL_REJECTED_RECHECK,
            text: this.getRejectStatusName(Constant.RejectStatus.ALL_REJECTED_RECHECK)
        }];
    },
    getRejectStatusName: function(rejectStatus) {
        let text = "";
        switch (rejectStatus) {
            case Constant.RejectStatus.NOT_REJECTED:
                text = "未驳回";
                break;
            case Constant.RejectStatus.PART_REJECTED:
                text = "部分驳回";
                break;
            case Constant.RejectStatus.ALL_REJECTED:
                text = "全部驳回";
                break;
            case Constant.RejectStatus.PART_REJECTED_RECHECK:
                text = "部分驳回复审";
                break;
            case Constant.RejectStatus.PART_REJECTED_NOT_RECHECK:
                text = "部分驳回不复审";
                break;
            case Constant.RejectStatus.ALL_REJECTED_NOT_RECHECK:
                text = "全部驳回不复审";
                break;
            case Constant.RejectStatus.ALL_REJECTED_RECHECK:
                text = "全部驳回复审";
                break;
        }
        return text;
    },
    timeToDate: function(time) {
        let text = "";
        if (!_.isNil(time)) {
            text = moment(time).format("YYYY-MM-DD");
        }
        return text;
    }
}