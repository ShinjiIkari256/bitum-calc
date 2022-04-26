<template>
  <nav class="">
    <ul ref="navItems" class="nav">
        <!-- :ref="navItem.key" -->
      <li
        v-for="navItem in navItems"
        :key="navItem.key"
        class="nav-item"
        :class="{
          active: navItem.key === activeItem.key,
        }"
        @click.prevent="select(navItem)"
      >
        <span>{{ navItem.name }}</span>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: {
    navItems: {
      type: Array,
      required: true,
    },
    activeItem: {
      type: Object,
      default: () => {},
    },
  },

  methods: {
    select(navItem) {
      this.$emit("select", navItem);
    },
  },
};
</script>

<style scoped>
.nav {
  position: relative;
  overflow: hidden;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  vertical-align: middle;

  height: 100%;
  max-width: 100%;
  margin: 0;
  padding: 0;
}

.nav .nav-item {
  position: relative;
  overflow: hidden;

  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex: 1 1 auto;

  list-style: none;
  cursor: pointer;
  text-transform: uppercase;

  width: 100%;

  font-size: 1.1em;
  font-weight: 300;
  line-height: 1em;
  padding: .2rem 0;
  border-bottom: 1px solid #c9c9c9;
  color: #c9c9c9;
}

.nav .nav-item:hover:not(.active),
.nav .nav-item:focus:not(.active) {
  color: #2c3e50;
  border-bottom: 1px solid #2c3e50;
}

.nav .active {
  color: #2c3e50;
  border-bottom: 2px solid #2c3e50;
  font-weight: 500;
}
</style>

