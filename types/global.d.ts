import { Component } from 'vue';

export {};

declare global {
  type BasicObject<T = any, K extends keyof any = string> = Record<K, T>;

  type CusComponent = Component | (() => Promise<Component>);

  type PageProps = {
    current: number;
    pageSize: number;
    total: number;
  };
}
