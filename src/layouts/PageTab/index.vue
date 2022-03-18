<script setup lang="ts">
  import { tabList, current, changeById, removeById } from './logic';
</script>

<template>
  <div class="page-tab">
    <!-- tabbar -->
    <div class="page-tab-bar">
      <div class="page-tab-bar-tabs">
        <div
          v-for="tab in tabList"
          :key="tab.id"
          :class="[
            'page-tab-bar-tab',
            current === tab.id ? 'page-tab-bar-tab-active' : '',
          ]"
          @click="changeById(tab.id)"
        >
          <span class="tab-title">
            {{ tab.title }}
          </span>
          <ali-icon
            v-if="!tab.default"
            class="tab-close-icon"
            type="icon-a-0-guanbi"
            @click.stop="removeById(tab.id)"
          />
        </div>
      </div>
    </div>
    <!-- tab content -->
    <div class="page-tab-content">
      <div
        v-for="tab in tabList"
        :key="tab.id"
        v-show="current === tab.id"
        class="page-tab-content-panel"
      >
        <component :is="tab.component" v-bind="tab.props" />
      </div>
    </div>
  </div>
</template>

<style lang="less">
  .page-tab {
    display: flex;
    flex-direction: column;

    .page-tab-bar {
      .page-tab-bar-tabs {
        display: flex;
        width: 100%;

        .page-tab-bar-tab {
          display: flex;
          align-items: center;
          position: relative;
          height: 40px;
          max-width: 232px;
          flex: 1;
          padding: 0 15px 0 20px;
          border-radius: @border-radius-base @border-radius-base 0 0;
          cursor: pointer;

          &.page-tab-bar-tab-active {
            background: #fff;
          }

          .tab-title {
            flex: 1;
            .ellipsis();
          }

          .tab-close-icon {
            top: 50%;
            right: 15px;
            color: #999;
            // prettier-ignore
            padding: 1PX;
            border-radius: 50%;

            &:hover {
              background: #eee;
            }
          }
        }
      }
    }

    .page-tab-content {
      flex: 1;
      height: 0;
      overflow-y: auto;
    }
  }
</style>
