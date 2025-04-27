import store from '@/store'
import Vue from 'vue'

function checkAnyRoles(...roles) {
  const vuexRoles = store.getters.roles || []
  for (let i = 0; i < roles.length; i++) {
    const role = roles[i]
    if (vuexRoles.find((item) => item === role)) {
      return true
    }
  }
  return false
}

function checkAnyPermissions(...permissions) {
  const vuexPermissions = store.getters.permissions || []
  for (let i = 0; i < permissions.length; i++) {
    const permission = permissions[i]
    if (vuexPermissions.find((item) => item === permission)) {
      return true
    }
  }
  return false
}

export function startAuth() {
  Vue.mixin({
    methods: {
      checkAnyRoles,
      checkAnyPermissions
    }
  })

  Vue.directive('has-roles', {
    bind(el, { value }, vnode) {
      if (!checkAnyRoles(...value)) {
        el.style.display = 'none'
      } else {
        el.style.display = 'block'
      }
    }
  })

  Vue.directive('has-permissions', {
    bind(el, { value }, vnode) {
      if (!checkAnyPermissions(...value)) {
        el.style.display = 'none'
      } else {
        el.style.display = 'block'
      }
    }
  })
}
