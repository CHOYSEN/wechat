<template>
  <div id="content-chat" class="d-flex flex-column">
    <div class="chat-box flex-grow-1 overflow-y" id="record">
      <v-list two-line subheader rounded class="pa-0">
        <v-list-item
          class="mb-3"
          v-for="(item,index) in record"
          :key="index"
          :class="{ 'flex-row-reverse' : item.isMyself}"
        >
          <v-list-item-avatar class="ma-0 elevation-1 align-self-start">
            <img src="../../assets/headpic.jpg" />
          </v-list-item-avatar>
          <v-list-item-content
            class="flex-column pa-1"
            :class="{'align-start align-content-start pl-3' : !item.isMyself,'align-end align-content-end pr-3':item.isMyself}"
          >
            <v-list-item-subtitle v-if="!item.isMyself" v-html="oppositeName"></v-list-item-subtitle>
            <v-list-item-title
              class="elevation-2 py-3 px-4 break-word d-flex align-center body-2"
              :class="{'other-say' : !item.isMyself,'myself-say green lighten-1 white--text':item.isMyself}"
              v-html="item.content"
            ></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </div>

    <div class="scope grey lighten-3 pt-1 pb-4 px-4 d-flex flex-column">
      <div class="toolbar mb-1">
        <v-menu eager :close-on-content-click="false" offset-y top v-model="isMenuShow">
          <template v-slot:activator="{ on }">
            <v-btn fab small depressed color="transparent" v-on="on">
              <i></i>
            </v-btn>
          </template>
          <div class="expression-wrapper pa-2 d-flex flex-wrap white overflow-y">
            <a
              class="ma-1 disselect"
              v-for="index in 105"
              :key="index"
              :style="{'background-position' : getExpressionPosition(index)}"
              :class="{ 'align-self-start' : index === 105 }"
              @click="addExpression(index)"
            ></a>
          </div>
        </v-menu>
      </div>
      <pre
        id="editArea"
        class="overflow-y body-2 pl-2 mb-2 flex-grow-1 break-word"
        contenteditable
        @keydown.exact.enter.prevent="send"
      ></pre>
      <div>
        <v-btn class="px-10 float-right" color="success" @click="send">发送</v-btn>
        <span
          class="float-right caption disselect fill-height d-flex align-center mr-5"
        >Shift+Enter换行</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data: () => ({
    isMenuShow: false,
    expressionTab: null,
    oppositeName: "A",
    oppositeAvatar: "~/assets/headpic.jpg",
    record: [
      { content: "我", isMyself: true },
      { content: "你", isMyself: false }
    ]
  }),
  mounted() {
    this.a();
  },
  methods: {
    getExpressionPosition(index) {
      let x = ((index - 1) % 15) * 29 * -1;
      let y = Math.floor((index - 1) / 15) * 29 * -1;
      return `${x}px ${y}px`;
    },
    addExpression(index) {
      this.isMenuShow = false;
      let x = ((index - 1) % 15) * 24 * -1;
      let y = Math.floor((index - 1) / 15) * 24 * -1;

      let html = `<img src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" style="background-position:${x}px ${y}px" />`;

      // document.execCommand是向有焦点的contenteditable为真的元素发送指令
      // 搞了很久，要把表情图片加入.disselect类，让表情图片无法被选中
      let isInserted = document.execCommand("insertHTML", false, html);
      // 如果插入失败，说明当前焦点不在输入框内
      if (!isInserted) {
        let editArea = document.querySelector("#editArea");
        editArea.innerHTML += html;
        editArea.focus();
        this.setCursorToEnd();
      }
    },
    send(event) {
      let editArea = document.querySelector("#editArea");
      if (!editArea.innerHTML.replace(/\n/g, "")) {
        this.$store.commit("showSnackbar", {
          text: "请输入内容",
          error: true
        });
        return;
      }
      this.record.push({
        content: editArea.innerHTML,
        isMyself: true
      });

      editArea.focus();
      editArea.innerHTML = "";

      this.$nextTick(
        () =>
          (document.querySelector("#record").scrollTop =
            Number.MAX_SAFE_INTEGER)
      );
    },
    setCursorToEnd() {
      // 光标置尾
      let range = document.createRange();
      range.selectNodeContents(editArea);
      range.collapse(false);
      let selection = window.getSelection();
      selection.removeAllRanges();
      selection.addRange(range);
    }
  }
};
</script>
<style lang="scss">
.expression-wrapper {
  max-width: 497px;
  max-height: 80vh;
  a {
    width: 29px;
    height: 29px;
    background: url(../../assets/expression_qq.png);
  }
}

#content-chat {
  .chat-box {
    .v-list-item__content {
      vertical-align: middle;
      img {
        width: 20px;
        height: 20px;
        background: url(../../assets/expression_qq_s.png);
      }
      .other-say {
        border-radius: 0 14px 14px;
      }

      .myself-say {
        border-radius: 14px 0 14px 14px;
      }
    }
  }

  .scope {
    height: 180px;

    .toolbar {
      i {
        width: 30px;
        height: 30px;
        background: url(../../assets/wechat_icon.png);
        background-position: -404px -398px;
      }
    }

    pre {
      outline: none;
      overflow-x: hidden;

      img {
        width: 20px;
        height: 20px;
        vertical-align: middle;
        background: url(../../assets/expression_qq_s.png);
      }
    }
  }
}

.break-word {
  white-space: pre-wrap;
  word-break: break-word;
}
</style>