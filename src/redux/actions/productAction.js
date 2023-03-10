import { productActions } from "../reducers/productReducer";

function getProducts(searchQuery) {
  return async (dispatch, getState) => {
    // dispatch = 기존의 dispatch
    // getState = 현재 state의 정보
    let response = await fetch(
      `https://my-json-server.typicode.com/munjehun/hnm-clone-coding/products?q=${searchQuery}`
    );
    let data = await response.json();
    // dispatch({ type: "GET_PRODUCT_SUCCESS", payload: { data } });
    dispatch(productActions.getAllproducts({ data }));
  };
}

function getProductDetail(id) {
  return async (dispatch, getState) => {
    let product = await fetch(
      `https://my-json-server.typicode.com/munjehun/hnm-clone-coding/products/${id}`
    );
    let data = await product.json();
    // dispatch({ type: "GET_PRODUCTDETAIL_SUCCESS", payload: { data } });
    dispatch(productActions.getProductDetail({ data }));
  };
}

export const productAction = { getProducts, getProductDetail };
//productAction라는 객체에 함수를 담아서 반환 = 미들웨어 함수가 여러개가 될 거라서
