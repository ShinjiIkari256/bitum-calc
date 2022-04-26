<template>
  <div class="tabs">
      <TabNav
        :navItems="navItems"
        :activeItem="activeItem"
        @select="activeTabItem"
      />
    <div class="tabs-content">
      <slot />
    </div>
  </div>
</template>

<script>
import TabNav from "./TabNav";

export default {
  name: "Tabs",

  components: { TabNav, },

  props: {
    value: [Number, String],
  },

  data: () => ({
    slideSide: "",
    navItems: [],
    tabItems: [],
    activeItem: {
      key: "",
      name: "",
    },
    tabItemIndexes: {
      last: 0,
      current: 0,
      previous: 0,
    },
  }),

  computed: {
    transition() {
      return { side: this.slideSide, };
    },
  },

  watch: {
    activeItem(newTabItem, oldTabItem) {
      this.tabItemIndexes.previous = this.findTabIndex(oldTabItem);
      this.tabItemIndexes.current = this.findTabIndex(newTabItem);

      if (!newTabItem?.key) return;

      this.tabItems[this.tabItemIndexes.current].activeKey = newTabItem.key;

      if (~this.tabItemIndexes.previous) {
        this.setTabItemTransitionSide();
        this.tabItems[this.tabItemIndexes.previous].activeKey = newTabItem.key;
      }
    },

    value: {
      immediate: true,
      handler(value = 0) {
        this.$nextTick(() => {
          const navItem = this.navItems?.[value];
          navItem && this.activeTabItem(navItem);
        });
      },
    },
  },

  methods: {
    register(tabItemInstance) {
      if (!this.isTabItemComponent(tabItemInstance)) return;
      this.tabItems.push(tabItemInstance);
      this.setNavItem(tabItemInstance);
    },

    unRegister(tabItemInstance) {
      if (!this.isTabItemComponent(tabItemInstance)) return;
      this.tabItems.splice(this.findTabIndex(tabItemInstance), 1);
      this.navItems.splice(tabItemInstance.ownNavItemIndex, 1);
      this.tabItemIndexes.last = this.navItems.length - 1;
    },

    isTabItemComponent({ $options }) {
      return $options?.name === "TabItem";
    },

    setNavItem({ key, name }) {
      this.navItems.push({
        key,
        name,
      });
      this.tabItemIndexes.last = this.navItems.length;
    },

    activeTabItem(tabItem) {
        this.activeItem = tabItem;
        this.$emit("input", this.findTabIndex(tabItem));
    },

    setTabItemTransitionSide() {
      const { current, previous } = this.tabItemIndexes;
      this.slideSide = current > previous ? "right" : "left";
    },

    switchTabItem(to) {
      if (!this.noTouch) {
        const { current, last } = this.tabItemIndexes;

        const switchTab = (count) => {
          const tabItem = this.navItems?.[current + count];
          tabItem && this.activeTabItem(tabItem);
        };

        to === "next" && current < last && switchTab(1);
        to === "prev" && current > 0 && switchTab(-1);
      }
    },

    findTabIndex(tab) {
      return this.tabItems.findIndex((el) => el.key === tab?.key);
    },
  },
};
</script>
<style scoped>
.tabs {
  display: flex;
  flex-direction: column;
  background: white;
  border-radius: 0.23rem;
  height: 100%;
  width: 100%;
}

.tabs-content {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
