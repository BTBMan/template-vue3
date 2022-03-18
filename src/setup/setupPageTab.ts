import { setDefault } from '@/layouts/PageTab/logic';
import Test from '@/views/modules/Test.vue';

export const setupPageTab = () => {
  setDefault({
    key: 'equipmentBoard',
    title: '默认测试页面',
    component: Test,
  });
};
