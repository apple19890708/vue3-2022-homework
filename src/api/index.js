import { aepAxios } from './aepBaseApi';

// 後台API
export const getProduct = (page) => aepAxios({
  method: 'get',
  url: `${process.env.VUE_APP_API}v2/api/${process.env.VUE_APP_PATH}/admin/products/?page=${page}`,
}).then(({ data }) => data);

// 前台API
