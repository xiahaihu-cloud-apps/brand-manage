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
        return {
            table: null
        }
    },
    props: {
        toolbarId: {
            type: String,
            default: "toolbar"
        },
        dataUrl: {
            type: String,
            required: true
        },
        tableId: {
            type: String,
            default: "table"
        },
        query: {
            type: Object,
            default: null
        },
        columns: {
            type: Array,
            required: true
        }
    },
    computed: {
        toolbar: function() {
            return "#" + this.toolbarId;
        }
    },
    mounted: function() {
        let $table = $("#" + this.tableId);
        let _this = this;
        this.table = $table;

        $table.bootstrapTable({
            query: this.query,
            columns: this.columns
        });
        $table.on('check.bs.table uncheck.bs.table check-all.bs.table uncheck-all.bs.table', function() {
            let rows = _this.getSelections();
            _this.$emit("selected", rows);
        });
        $table.on('load-success.bs.table', function() {
            _this.$emit("selected", []);
        })
    },
    methods: {
        refresh: function() {
            let $table = $("#" + this.tableId);
            $table.bootstrapTable("refresh", {
                query: {},
                pageNumber: 1
            });
        },
        getSelections: function() { 
            return this.table.bootstrapTable("getSelections");
        },
        filterData: function(query) {
            this.table.bootstrapTable("refresh", {
                query: query,
                pageNumber: 1
            })
        }
    }
}
</script>

<style>

</style>
