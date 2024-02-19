<!-- 看板组件 -->
<template>
  <div class="board-block">
    <div class="board-block__header">
      <div class="board-block__title">{{ title }}</div>
      <div class="board-block__more" @click="handleMoreClick"></div>
    </div>
    <div class="board-block__content">
      <div class="board-block__item" v-for="item in items" :key="item.id">
        <div class="board-block__item-title">{{ item.title }}</div>
        <div class="board-block__item-desc">{{ item.desc }}</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'BoardBlock',
  props: {
    title: {
      type: String,
      default: ''
    },
    items: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    handleMoreClick() {
      this.$emit('more')
    }
  }
}
</script>
<style scoped>
.board-block {
  background: rgba(0, 0, 0, 0.5);
  border-radius: 15px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  max-width: 800px;
  width: 100%;
}
</style>