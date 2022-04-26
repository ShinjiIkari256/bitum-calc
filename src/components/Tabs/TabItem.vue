<template>
    <div v-show="isActive" class="tab-item">
      <slot />
    </div>
</template>

<script>
export default {
  name: "TabItem",

  props: {
    name: {
      type: String,
      default: "Tab Item",
    },
  },

  data: () => ({
    activeKey: "",
    key: Date.now(),
  }),

  mounted() {
    this.$parent.register(this);
  },

  beforeDestroy() {
    this.$parent.unRegister(this);
  },

  computed: {
    isActive() {
      return this.activeKey === this.key;
    },
  },
};
</script>

<style scoped>
.tab-item {
  top: 0;
  left: 0;
  width: 100%;
  height: inherit;
  background: white;
}
</style>
