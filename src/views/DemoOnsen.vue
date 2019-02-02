<template>
  <v-ons-page>
    <v-ons-toolbar>
      <div class="center">onsenui demo</div>
    </v-ons-toolbar>


    <p style="text-align: center">
      <v-ons-button @click="$ons.notification.alert('测试-弹出框消息!!')">
        Click me!
      </v-ons-button>
    </p>

  </v-ons-page>
</template>

<script>
/**
 * 功能:demo onsenui.
 *
 * @author sanxiapay-gonglong-20190130
 *
 */
export default {
  name: "DemoOnsen",
  data: function () {
    return {
      id: "22"
    }
  }
}
</script>

<style lang="less">
</style>
