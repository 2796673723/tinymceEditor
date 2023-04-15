<template>
  <Editor v-model="content" :init="init"></Editor>
</template>

<script>
import Editor from "@tinymce/tinymce-vue";
import { init } from "./init.js";

export default {
  name: "DetailEditor",
  components: { Editor },
  data() {
    return {
      content: "",
      init,
    };
  },
  methods: {
    setContent(content) {
      this.content = content;
    },
    getContent() {
      return this.content;
    },
  },
};
</script>

<style>
.tox-notification {
  display: none !important;
}
</style>
