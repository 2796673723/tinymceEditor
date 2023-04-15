<template>
  <div id="app">
    <button @click="outputContent">Output</button>
    <DetailEditor ref="editor"></DetailEditor>
  </div>
</template>

<script>
import DetailEditor from "@/components/tinymceES/DetailEditor.vue";
import { content } from "@/init.js";

export default {
  components: { DetailEditor },
  mounted() {
    // this.$refs.editor.setContent(content);
  },
  methods: {
    outputContent() {
      console.log(this.$refs.editor.getContent());
    },
  },
};
</script>


