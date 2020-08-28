<template>
  <v-main id="content" class="flex-grow-1 fill-height flex-shrink-1 white">
    <v-expansion-panels flat active-class="elevation-3" v-ripple>
      <v-expansion-panel>
        <v-expansion-panel-header>Panel 1</v-expansion-panel-header>
        <v-expansion-panel-content>Some content</v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
    <component class="pt-12 fill-height" :is="'ContentChat'"></component>
  </v-main>
</template>
<script>
import ContentChat from "./ContentChat";
export default {
  components: {
    ContentChat
  }
};
</script>
<style lang="scss">
#content {
  .v-expansion-panels {
    position: absolute;
  }
}
</style>