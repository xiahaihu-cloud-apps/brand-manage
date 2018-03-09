<template>
<div class="modal fade" tabindex="-1" role="dialog" v-show="false">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <h4 class="modal-title">商标详情</h4>
      </div>
      <div class="modal-body">
          {{ brand.name }}
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-primary" data-dismiss="modal">关闭</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
    data: function() {
        return {
            dialogId: "BrandDialog",
            dialog: $('#BrandDialog'),
            brand: {
                name: ""
            }
        }
    },
    methods: {
        show: function() {
            this.dialog.modal("show");
        }
    }
}
</script>

<style>

</style>
