<template>
  <div id="panel-chat">
    <template v-if="loading">
      <v-skeleton-loader
        type="list-item-avatar-two-line"
        v-for="item in 10"
        :key="item"
        class="d-none d-sm-block"
      ></v-skeleton-loader>
    </template>

    <v-list v-else two-line subheader class="pb-0">
      <v-list-item-group mandatory>
        <v-list-item v-for="(item, index) in items" :key="index">
          <v-list-item-avatar class="mr-sm-3">
            <img src="../../assets/headpic.jpg" />
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title v-text="item.name"></v-list-item-title>
            <v-list-item-subtitle v-text="item.content"></v-list-item-subtitle>
          </v-list-item-content>
          <span class="caption pl-2 grey--text">17:00</span>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </div>
</template>
<script>
export default {
  data: () => ({
    loading: true,
    items: [
      {
        avatar: "~/assets/headpic.jpg",
        name: "AAAAAAAAAAAAAA",
        content: "saysaysaysaysaysaysaysaysaysay"
      },
      {
        avatar: "../../assets/headpic.jpg",
        name: "AAAAAAAAAAAAAA",
        content: "saysaysaysaysaysaysaysaysaysay"
      },
      {
        avatar: "../../assets/headpic.jpg",
        name: "AAAAAAAAAAAAAA",
        content: "saysaysaysaysaysaysaysaysaysay"
      },
      {
        avatar: "../../assets/headpic.jpg",
        name: "AAAAAAAAAAAAAA",
        content: "saysaysaysaysaysaysaysaysaysay"
      },
      {
        avatar: "../../assets/headpic.jpg",
        name: "AAAAAAAAAAAAAA",
        content: "saysaysaysaysaysaysaysaysaysay"
      },
      {
        avatar: "../../assets/headpic.jpg",
        name: "AAAAAAAAAAAAAA",
        content: "saysaysaysaysaysaysaysaysaysay"
      },
      {
        avatar: "../../assets/headpic.jpg",
        name: "AAAAAAAAAAAAAA",
        content: "saysaysaysaysaysaysaysaysaysay"
      },
      {
        avatar: "../../assets/headpic.jpg",
        name: "AAAAAAAAAAAAAA",
        content: "saysaysaysaysaysaysaysaysaysay"
      },
      {
        avatar: "../../assets/headpic.jpg",
        name: "AAAAAAAAAAAAAA",
        content: "saysaysaysaysaysaysaysaysaysay"
      },
      {
        avatar: "../../assets/headpic.jpg",
        name: "AAAAAAAAAAAAAA",
        content: "saysaysaysaysaysaysaysaysaysay"
      },
      {
        avatar: "../../assets/headpic.jpg",
        name: "AAAAAAAAAAAAAA",
        content: "saysaysaysaysaysaysaysaysaysay"
      },
      {
        avatar: "../../assets/headpic.jpg",
        name: "AAAAAAAAAAAAAA",
        content: "saysaysaysaysaysaysaysaysaysay"
      },
      {
        avatar: "../../assets/headpic.jpg",
        name: "AAAAAAAAAAAAAA",
        content: "saysaysaysaysaysaysaysaysaysay"
      },
      {
        avatar: "../../assets/headpic.jpg",
        name: "AAAAAAAAAAAAAA",
        content: "saysaysaysaysaysaysaysaysaysay"
      },
      {
        avatar: "../../assets/headpic.jpg",
        name: "AAAAAAAAAAAAAA",
        content: "saysaysaysaysaysaysaysaysaysay"
      },
      {
        avatar: "../../assets/headpic.jpg",
        name: "AAAAAAAAAAAAAA",
        content: "saysaysaysaysaysaysaysaysaysay"
      }
    ]
  }),
  mounted() {
    setTimeout(() => (this.loading = false), 3000);
  }
};
</script>
<style lang="scss">
#panel-chat {
  .v-skeleton-loader__list-item-avatar-two-line {
    background: none !important;
  }
}
</style>