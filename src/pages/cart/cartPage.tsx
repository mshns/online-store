import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import useCart from "../../hooks/useCart";

import "./cartPage.scss";

import CartList from "./components/cartList";
import CartSumBlock from "./components/cartSum";
import CartHeader from "./components/cartHeader";
import EmptyCart from "./components/EmptyCart";

import getVisibleItems from "../../lib/helpers/getVisibleTtems";

import { ICartItem, IPaymentVisible } from "../../types";

const CartPage = ({ setPaymentVisible }: IPaymentVisible) => {
  const { cartList } = useCart();

  const setQueryParams = (key: string | number) => {
    const cartPaginationParams = localStorage.getItem("cartPaginationParams");
    if (cartPaginationParams) {
      const params = JSON.parse(cartPaginationParams);
      return Number(params[key]);
    }
    return key === "itemsDisplayCount" ? 10 : 1;
  };

  const [visibilityValue, setVisibilityValue] = useState(
    setQueryParams("itemsDisplayCount")
  );

  const [page, setPage] = useState(setQueryParams("page"));

  const [visibilityItems, setVisibilityItems] = useState(
    getVisibleItems(cartList, visibilityValue, page)
  );

  const getPagesAmount = (items: ICartItem[], itemsAmount: number) => {
    return Math.ceil(items.length / itemsAmount);
  };

  const pagesAmount = getPagesAmount(cartList, visibilityValue);

  const [, setSearchParams] = useSearchParams();

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartList));
    localStorage.setItem("cartVisibilityValue", visibilityValue.toString());

    const visiblItems = getVisibleItems(cartList, visibilityValue, page);
    setVisibilityItems(visiblItems);

    if (visibilityItems.length === 0 && cartList.length !== 0) {
      setPage(page - 1);
    }

    const params: {
      page: string;
      itemsDisplayCount: string;
    } = {
      page: page.toString(),
      itemsDisplayCount: visibilityValue.toString(),
    };

    const stringifyPaginationParams = JSON.stringify(params);
    localStorage.setItem("cartPaginationParams", stringifyPaginationParams);
    setSearchParams(params);

  }, [cartList, page, setSearchParams, visibilityItems.length, visibilityValue]);

  return cartList.length ? (
    <main className="cart">
      <section className="cart_products">
        <CartHeader
          visibilityValue={visibilityValue}
          handler={setVisibilityValue}
          setPage={setPage}
          page={page}
          pagesAmount={pagesAmount}
        />
        <CartList visibilityItems={visibilityItems} />
      </section>
      <CartSumBlock setPaymentVisible={setPaymentVisible} />
    </main>
  ) : (
    <EmptyCart />
  );
};

export default CartPage;
