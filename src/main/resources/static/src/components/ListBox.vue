<template>
<div class="box box-primary">
    <div class="box-body">
        <!-- <div :id="toolbar">
            <a class="btn btn-success">
                <i class="glyphicon glyphicon-plus"></i>添加
            </a>
            <a class="btn btn-primary" disabled>
                <i class="glyphicon glyphicon-edit"></i>编辑
            </a>
            <a class="btn btn-info" disabled>
                <i class="glyphicon glyphicon-ok-circle"></i>启用
            </a>
            <a class="btn btn-danger" disabled>
                <i class="glyphicon glyphicon-remove-circle"></i>禁用
            </a>
        </div> -->
        <slot></slot>
        <table :id="tableId"
            :data-toolbar="toolbar"
            data-toggle="table"
            data-classes="table table-no-bordered"
            data-show-toggle="true"
            data-show-columns="true"
            data-show-export="true"
            data-click-to-select="true"
            :data-url="dataUrl"
            data-side-pagination="server"
            data-pagination="true"
            data-id-field="id"
            data-unique-id="id"
            data-page-list="[10, 20, 50, 100]"
            data-advanced-search="true"
            data-id-table="advancedTable"
            data-query-fields="">
        </table>
    </div>
</div>
</template>
<script>
import 'bootstrap-table'
import 'bootstrap-table/dist/locale/bootstrap-table-zh-CN.min'

export default {
    name: "ListBox",
    data: function() {
        return {}
    },
    props: {
        toolbarId: {
            type: String,
            default: "toolbar"
        },
        dataUrl: {
            type: String,
        },
        tableId: {
            type: String,
            default: "table"
        },
        query: {
            type: Object,
            default: null
        }
    },
    computed: {
        toolbar: function() {
            return "#" + this.toolbarId;
        }
    },
    mounted: function() {
        let $table = $("#" + this.tableId);
        $table.bootstrapTable({
            query: this.query
        });
    },
    methods: {
        refresh: function() {
            let $table = $("#" + this.tableId);
            $table.bootstrapTable("refresh", {
                query: this.query,
                pageNumber: 1
            });
        }
    }
}
</script>

<style>

</style>
