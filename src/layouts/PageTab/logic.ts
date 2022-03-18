import type { Component, ShallowRef } from 'vue';

export type TabComponent = new (...args: any[]) => any & Component;

type Tab<IsShallowRefComponent extends boolean = true> = {
  id: number;
  key: string;
  title: string;
  default?: boolean;
  component: IsShallowRefComponent extends true
    ? ShallowRef<TabComponent>
    : TabComponent;
  props?: any;
};

type DynamicTabProps<T extends Omit<Tab<false>, 'id' | 'default'>> =
  HasRequired<InstanceType<T['component']>['$props']> extends true
    ? T & {
        props: InstanceType<T['component']>['$props'];
      }
    : T;

let tabIndex = -1;

export const current = ref(1);

export const tabList = ref<Tab[]>([]);

/**
 * 设置默认的tab
 * @param  {DynamicTabProps<T>} tabInfo
 */
export function setDefault<T extends Omit<Tab<false>, 'id' | 'default'>>(
  tabInfo: DynamicTabProps<T>,
) {
  tabList.value[0] = {
    ...tabInfo,
    id: ++tabIndex,
    default: true,
    component: shallowRef(tabInfo.component) as unknown as TabComponent, // don't know what the fuck
  };

  changeById(tabIndex);
}

/**
 * 添加一个标签
 * @param  {DynamicTabProps<T>} tabInfo
 * @param  {boolean=true} selectExistKey
 */
export function addTab<T extends Omit<Tab<false>, 'id' | 'default'>>(
  tabInfo: DynamicTabProps<T>,
  selectExistKey: boolean = true,
) {
  const { key } = tabInfo;

  if (selectExistKey && changeByKey(key)) {
    return;
  }

  tabList.value.push({
    ...tabInfo,
    id: ++tabIndex,
    component: shallowRef(tabInfo.component) as unknown as TabComponent, // don't know what the fuck
  });

  changeById(tabIndex);
}

/**
 * 根据id切换tab
 * @param  {number} id
 */
export function changeById(id: number) {
  current.value = id;
}

/**
 * 根据key切换tab
 * @param  {string} key
 * @return  boolean
 */
export function changeByKey(key: string): boolean {
  const tabInfo = lodashFind(tabList.value, ['key', key]);

  if (tabInfo) {
    changeById(tabInfo.id);

    return true;
  }

  return false;
}

/**
 * 根据id移除tab
 * @param  {number} id
 */
export function removeById(id: number) {
  const index = findIndex(tabList.value, ['id', id]);

  if (index !== -1) {
    tabList.value.splice(index, 1);
  }

  const prevTab = tabList.value[index - 1];

  if (current.value === id) {
    changeById(prevTab.id);
  }
}
