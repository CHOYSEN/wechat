<template>
  <v-app>
    <v-container class="app-container pa-0 fill-height flex-nowrap">
      <Panel></Panel>
      <Content></Content>
    </v-container>
    <v-snackbar
      :top="true"
      :color="$store.state.snackbarColor"
      :timeout="$store.state.snackbarTimeout"
      v-model="$store.state.isSnackbarShow"
    >{{ $store.state.snackbarText }}</v-snackbar>
  </v-app>
</template>

<script>
import Panel from "./components/Panel/Panel";
import Content from "./components/Content/Content";
export default {
  components: {
    Panel,
    Content
  }
};
</script>
<style>
html {
  overflow: hidden !important;
  background: url(./assets/bg.jpg) no-repeat !important;
}

::-webkit-scrollbar {
  width: 6px;
}

::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background-color: #aaa;
}

#app {
  height: 100vh;
  background: none !important;
}

.app-container {
  max-width: 1000px;
}

/* custom class */
.overflow-y {
  overflow-y: auto;
}

.disselect {
  user-select: none;
}
</style>