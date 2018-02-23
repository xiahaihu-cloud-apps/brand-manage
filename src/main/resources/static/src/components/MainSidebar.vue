<template>
  <aside class="main-sidebar">
    <!-- sidebar: style can be found in sidebar.less -->
    <section class="sidebar">
      <!-- Sidebar user panel -->
      <!-- <div class="user-panel"> -->
        <!-- <div class="pull-left image"> -->
          <!-- <img src="dist/img/user2-160x160.jpg" class="img-circle" alt="User Image"> -->
        <!-- </div> -->
        <!-- <div class="pull-left info"> -->
          <!-- <p>Alexander Pierce</p>
          <a href="#"><i class="fa fa-circle text-success"></i> Online</a> -->
        <!-- </div> -->
      <!-- </div> -->
      <!-- sidebar menu: : style can be found in sidebar.less -->
      <ul class="sidebar-menu" data-widget="tree">
        <li class="header">主菜单</li>
        <li :class="{active : isDashboard}">
          <a href="/pages/main.html">
            <i class="fa fa-dashboard"></i><span>概览</span>
          </a>
        </li>
        <li :class="{active : isAll}">
          <a href="/pages/list.html">
            <i class="fa fa-table"></i><span>全部商标</span>
          </a>
        </li>
      </ul>
    </section>
    <!-- /.sidebar -->
  </aside>
</template>
<script>
export default {
    name: "MainSidebar",
    props: {
        current: {
            type: String,
            default: "dashboard"
        }
    },
    computed: {
        isDashboard: function() {
            return this.current == "dashboard";
        },
        isAll: function() {
            return this.current == "all";
        }
    }
}
</script>

