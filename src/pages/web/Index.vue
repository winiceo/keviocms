<template>
  <div  >
      <router-link :to="{ name: 'web', params: { tag: 1 }}">web</router-link>
      <router-link :to="{ name: 'dashboard', params: { tag: 1 }}">web</router-link>

  </div>
</template>

<script>
 
export default {
    data(){
        return {}
    }
}
</script>
