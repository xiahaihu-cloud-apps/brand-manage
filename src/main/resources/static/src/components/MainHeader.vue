<template>
  <header class="main-header">
    <nav class="navbar navbar-static-top">
        <div class="container">
            <div class="navbar-header">
                <a href="/pages/main.html" class="navbar-brand"><b>商标</b>管理系统</a>
                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse">
                    <i class="fa fa-bars"></i>
                </button>
            </div>
            <div class="collapse navbar-collapse pull-left" id="navbar-collapse">
                <ul class="nav navbar-nav">
                    <li :class="{active: isDashboard}">
                        <a href="/pages/main.html">
                            <i class="fa fa-dashboard"></i>
                            <span>概览</span>
                        </a>
                    </li>
                    <li :class="{active: isAll}">
                        <a href="/pages/list.html">
                            <i class="fa fa-table"></i>
                            <span>全部商标</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
  </header>
</template>
<script>
export default {
    name: "ContentHeader",
    data: function()  {
        return {
        }
    },
    props: {
        current: {
            type: String,
            String: "dashboard"
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

