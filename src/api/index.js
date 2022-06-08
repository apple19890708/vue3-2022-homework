import { aepAxios } from './aepBaseApi';

// 權限管理---------------------------------------------

export const Login = (data) => aepAxios({
  method: 'post',
  data,
  url: `${process.env.VUE_APP_API}/v2/admin/signin`,
}).then(({ data: resData }) => resData);

export const Logout = () => aepAxios({
  method: 'post',
  url: `${process.env.VUE_APP_API}/v2/logout`,
}).then(({ data }) => data);

// 檢查token
export const checkAdmin = () => aepAxios({
  method: 'post',
  url: `${process.env.VUE_APP_API}v2/api/user/check`,
}).then(({ data }) => data);

// 後台API---------------------------------------------

// Product
export const getProduct = (page) => aepAxios({
  method: 'get',
  url: `${process.env.VUE_APP_API}v2/api/${process.env.VUE_APP_PATH}/admin/products/?page=${page}`,
}).then(({ data }) => data);

// Coupons
export const getCoupons = () => aepAxios({
  method: 'get',
  url: `${process.env.VUE_APP_API}v2/api/${process.env.VUE_APP_PATH}/admin/coupons`,
}).then(({ data }) => data);

export const createCoupons = (data) => aepAxios({
  method: 'post',
  data,
  url: `${process.env.VUE_APP_API}v2/api/${process.env.VUE_APP_PATH}/admin/coupon`,
}).then(({ data: resData }) => resData);

export const updateCoupons = (data, id) => aepAxios({
  method: 'put',
  data,
  url: `${process.env.VUE_APP_API}v2/api/${process.env.VUE_APP_PATH}/admin/coupon/${id}`,
}).then(({ data: resData }) => resData);

export const deleteCoupons = (id) => aepAxios({
  method: 'delete',
  url: `${process.env.VUE_APP_API}v2/api/${process.env.VUE_APP_PATH}/admin/coupon/${id}`,
}).then(({ data }) => data);

// Coupons
export const getOrders = (page) => aepAxios({
  method: 'get',
  url: `${process.env.VUE_APP_API}v2/api/${process.env.VUE_APP_PATH}/admin/orders?page=${page}`,
}).then(({ data }) => data);

export const delOrders = (id) => aepAxios({
  method: 'delete',
  url: `${process.env.VUE_APP_API}v2/api/${process.env.VUE_APP_PATH}/admin/order/${id}`,
}).then(({ data }) => data);

export const updateOrders = (data, id) => aepAxios({
  method: 'put',
  data,
  url: `${process.env.VUE_APP_API}v2/api/${process.env.VUE_APP_PATH}/admin/order/${id}`,
}).then(({ data: resdata }) => resdata);

// 前台API---------------------------------------------

export const getCart = () => aepAxios({
  method: 'get',
  url: `${process.env.VUE_APP_API}v2/api/${process.env.VUE_APP_PATH}/cart`,
}).then(({ data }) => data);

export const addToCart = (data) => aepAxios({
  method: 'post',
  url: `${process.env.VUE_APP_API}v2/api/${process.env.VUE_APP_PATH}/cart`,
  data,
}).then(({ data: resData }) => resData);

export const deleteAllCarts = () => aepAxios({
  method: 'delete',
  url: `${process.env.VUE_APP_API}v2/api/${process.env.VUE_APP_PATH}/carts`,
}).then(({ data }) => data);

export const deleteCartItem = (id) => aepAxios({
  method: 'delete',
  url: `${process.env.VUE_APP_API}v2/api/${process.env.VUE_APP_PATH}/cart/${id}`,
}).then(({ data: resData }) => resData);

export const updateCartItem = (data, id) => aepAxios({
  method: 'put',
  url: `${process.env.VUE_APP_API}v2/api/${process.env.VUE_APP_PATH}/cart/${id}`,
  data,
}).then(({ data: resData }) => resData);

export const getOrderInfo = (id) => aepAxios({
  method: 'get',
  url: `${process.env.VUE_APP_API}v2/api/${process.env.VUE_APP_PATH}/order/${id}`,
}).then(({ data }) => data);

export const postPayment = (id) => aepAxios({
  method: 'post',
  url: `${process.env.VUE_APP_API}v2/api/${process.env.VUE_APP_PATH}/pay/${id}`,
}).then(({ data }) => data);

export const postCoupon = (data) => aepAxios({
  method: 'post',
  url: `${process.env.VUE_APP_API}v2/api/${process.env.VUE_APP_PATH}/coupon`,
  data
}).then(({ data: resData }) => resData);

export const getOrderList = (page) => aepAxios({
  method: 'get',
  url: `${process.env.VUE_APP_API}v2/api/${process.env.VUE_APP_PATH}/orders?page=${page}`,
}).then(({ data }) => data);

// 範例

// export const getAppointmentInfo = ({ id, token }) => aepAxios({ // 同時夾帶 params 跟 id
//   method: 'get',
//   url: `/api/enterprise-portal/appointments/${id}`,
//   params: {
//     token,
//   },
// }).then(({ data }) => data);

// export const postCheckAppointment = ({ id, payload }) => aepAxios({ // 同時夾帶 data 跟 id
//   method: 'post',
//   url: `/api/enterprise-portal/appointments/${id}/attend`,
//   data: payload,
// }).then(({ data }) => data);
