import { getCurrentInstance, reactive, shallowRef, watchEffect } from 'vue';
import type { Ref } from 'vue';

interface AttrOptions {
  excludeListeners?: boolean;
  excludeAttrs?: string[];
  excludeDefaultAttrs?: boolean;
}

const DEFAULT_EXCLUDE_ATTRS = ['class', 'style'];
const LISTENER_REGEXP = /^on[A-Z]/;

export function entries(obj: BasicObject) {
  return Object.keys(obj).map((key: string) => [key, obj[key]]);
}

export function useAttrs(opts: AttrOptions = {}): Ref<BasicObject> {
  const instance = getCurrentInstance();
  const attrs = shallowRef({});

  if (instance) {
    const {
      excludeListeners = false,
      excludeAttrs = [],
      excludeDefaultAttrs = true,
    } = opts;

    const allExcludeAttrs = excludeAttrs.concat(
      excludeDefaultAttrs ? DEFAULT_EXCLUDE_ATTRS : [],
    );

    instance.attrs = reactive(instance.attrs);

    watchEffect(() => {
      const res = entries(instance.attrs).reduce((init, [key, val]) => {
        if (
          !allExcludeAttrs.includes(key) &&
          !(excludeListeners && LISTENER_REGEXP.test(key))
        ) {
          init[key] = val;
        }

        return init;
      }, {} as BasicObject);

      attrs.value = res;
    });
  }

  return attrs;
}
