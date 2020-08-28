<template>
  <v-navigation-drawer
    dark
    permanent
    stateless
    mini-variant-width="64"
    :mini-variant="$vuetify.breakpoint.xs"
    id="panel"
    class="flex-shrink-0"
  >
    <div class="d-flex flex-column fill-height">
      <v-row no-gutters class="flex-grow-0 pa-3 pa-sm-4">
        <v-col cols="3">
          <v-avatar size="40" class="elevation-3">
            <img src="../../assets/headpic.jpg" />
          </v-avatar>
        </v-col>
        <v-col cols="9" class="d-none d-sm-flex align-center justify-center white--text">undefined</v-col>
      </v-row>

      <v-row no-gutters class="tab flex-grow-0 py-sm-2">
        <v-col v-for="item in 3" :key="item" class="d-flex justify-center mb-1 mb-sm-0">
          <v-btn fab depressed color="transparent" @click="tabActived = item">
            <i :class="{ actived : tabActived === item }"></i>
          </v-btn>
        </v-col>
      </v-row>

      <keep-alive>
        <component class="wrapper overflow-y" :is="'PanelChat'"></component>
      </keep-alive>
    </div>
  </v-navigation-drawer>
</template>
<script>
import PanelChat from "./PanelChat";
export default {
  components: {
    PanelChat
  },
  data: () => ({
    tabActived: 1
  })
};
</script>
<style lang="scss">
#panel {
  .tab {
    .col {
      button {
        &:hover {
          background: rgb(70, 70, 70) !important;
        }
        &::before {
          content: none !important;
        }
      }
      i {
        width: 35px;
        height: 35px;
        background: url(../../assets/wechat_icon.png);
      }
      &:nth-child(1) i {
        background-position: -150px -96px;
        &.actived {
          background-position: -185px -96px;
        }
      }
      &:nth-child(2) i {
        background-position: -376px -322px;
        &.actived {
          background-position: -304px -281px;
        }
      }
      &:nth-child(3) i {
        background-position: -220px -96px;
        &.actived {
          background-position: -304px -246px;
        }
      }
    }
  }
}
</style>