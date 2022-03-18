import type { NavigationGuardWithThis } from 'vue-router';

const beforeEnter:
  | NavigationGuardWithThis<undefined>
  | NavigationGuardWithThis<undefined>[] = async (to, _from, next) => {
  const { query } = to;
  const token: any = query.token || sessionStorage.getItem('token') || '';

  if (token) {
    return next();
  }

  sessionStorage.clear();

  const totalQuery = {
    ...query,
    fromPath: to.path,
  };

  return next({
    path: `/login`,
    query: totalQuery,
  });
};

export default beforeEnter;
