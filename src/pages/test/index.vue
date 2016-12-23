<template>
    <section class="storehouse dialog" :class="{ 'hide': isHideDialog }">
        <div class="dialog-close" @click="hideDialog()"></div>
    </section>
</template>

<script>
//import { hideDialog } from '../../vuex/actions'
import {hideDialog} from 'kevio/store'
export default {
  vuex: {
    state: {
      isHideDialog: state => state.isHideDialog
    },
    actions: {
      hideDialog
    }
  }
}
</script>
