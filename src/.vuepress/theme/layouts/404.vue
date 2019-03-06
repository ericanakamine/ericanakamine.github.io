<template>
  <div class="theme-container">
    <div class="content">
      <h1>404</h1>
      <blockquote>{{ getMsg() }}</blockquote>
      <router-link to="/">Me leve pro início.</router-link>
    </div>
  </div>
</template>

<script>
const msgs = [
  `Não tem nada aqui.`,
  `Como nós chegamos aqui?`,
  `Isso é um Quatro-Zero-Quatro.`,
  `Parece que a gente foi em algum link quebrado.`
];

export default {
  methods: {
    getMsg() {
      return msgs[Math.floor(Math.random() * msgs.length)];
    }
  }
};
</script>

<style src="../styles/theme.styl" lang="stylus"></style>
