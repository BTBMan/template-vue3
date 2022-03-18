<script setup lang="ts">
  const collapsed = ref(false);
</script>

<template>
  <a-layout class="default">
    <a-layout-sider
      v-model:collapsed="collapsed"
      theme="light"
      collapsible
      :trigger="null"
    >
      <div class="sider-header">
        <a-button type="link" @click="collapsed = !collapsed">
          <MenuUnfoldOutlined v-if="collapsed" />
          <MenuFoldOutlined v-else />
        </a-button>
      </div>
      <Sidebar />
    </a-layout-sider>
    <a-layout>
      <a-layout-content>
        <PageTab />
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<style lang="less">
  .default {
    height: 100vh;

    .sider-header {
      text-align: center;
    }

    .ant-layout {
      margin-left: 6px;

      .ant-layout-content {
        .page-tab {
          height: 100%;
        }
      }
    }
  }
</style>
