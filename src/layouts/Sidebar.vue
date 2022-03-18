<script setup lang="ts">
  import type { MenuItemProps } from 'ant-design-vue';
  import type { TabComponent } from '@/layouts/PageTab/logic';
  import { addTab } from '@/layouts/PageTab/logic';
  import Test from '@/views/modules/Test.vue';

  type MenuItem = {
    key: string;
    item: MenuItemProps & {
      tabComponent: TabComponent;
    };
  };

  const menuSelect = (menuItem: MenuItem) => {
    const { key, item } = menuItem;
    const { title, tabComponent } = item;

    if (tabComponent) {
      addTab({
        key,
        title: title as unknown as string,
        component: tabComponent,
      });
    }
  };
</script>

<template>
  <a-menu class="sidebar" mode="inline" @select="(menuSelect as MenuItem)">
    <a-menu-item key="defaultTest" title="默认测试页面" :tabComponent="Test">
      <user-outlined />
      <span class="nav-text">默认测试页面</span>
    </a-menu-item>
    <a-menu-item key="test1" title="测试页面1" :tabComponent="Test">
      <user-outlined />
      <span class="nav-text">测试页面1</span>
    </a-menu-item>
    <a-sub-menu key="testSub">
      <template #title>
        <user-outlined />
        <span class="nav-text">子菜单</span>
      </template>
      <a-menu-item key="test2" title="测出页面2" :tabComponent="Test">
        <user-outlined />
        <span class="nav-text">测出页面2</span>
      </a-menu-item>
    </a-sub-menu>
  </a-menu>
</template>

<style lang="less">
  .sidebar {
    &.ant-menu {
      border-right: 0;

      &.ant-menu-inline-collapsed {
        .ant-menu-item,
        .ant-menu-submenu .ant-menu-submenu-title {
          height: auto;
          line-height: normal;
          padding: 0;

          .ant-menu-title-content {
            display: block;
            text-align: center;

            .nav-text {
              display: block;
              opacity: 1;
              margin: 0;
            }
          }
        }
      }
    }
  }
</style>
