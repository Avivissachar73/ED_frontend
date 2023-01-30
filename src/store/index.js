import Vue from 'vue'
import Vuex from 'vuex'

import { commonStore } from '@/modules/common/store'
import { authStore } from '@/modules/auth/store'
import { accountStore } from '@/modules/account/store'
import { settingsStore } from '@/modules/settings/store'
import { dashboardStore } from '../modules/dashboard/store'
import { edStore } from '@/modules/ED/store'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    commonStore,
    ...authStore,
    ...accountStore,
    ...settingsStore,
    ...dashboardStore,
    ...edStore
  }
})
