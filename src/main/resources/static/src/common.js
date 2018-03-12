import "bootstrap"
import "jquery"
import "fastclick"
import "jquery-slimscroll"
import "admin-lte"

import Vue from "vue"
import 'lodash'

import MainSidebar from './components/MainSidebar.vue'
import MainHeader from './components/MainHeader.vue'
import MainFooter from './components/MainFooter.vue'
import ContentHeader from './components/ContentHeader.vue'
import ListBox from './components/ListBox.vue'
import FormDialog from './components/FormDialog.vue'

Vue.component("main-sidebar", MainSidebar)
Vue.component("main-header", MainHeader)
Vue.component("main-footer", MainFooter)
Vue.component("content-header", ContentHeader)
Vue.component("list-box", ListBox)
Vue.component("form-dialog", FormDialog)
