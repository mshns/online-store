import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import useCart from "../../hooks/useCart";

import "./cartPage.scss";

import CartList from "./components/cartList";
import CartSumBlock from "./components/cartSum";
import CartHeader from "./components/cartHeader";
import EmptyCart from "./components/EmptyCart";

import { ICartItem, IPaymentVisible } from "../../types";

const CartPage = ({ setPaymentVisible }: IPaymentVisible) => {
  const getVisibleItems = (
    items: ICartItem[],
    amountOfVisibleItems: number,
    pageNumber: number
  ) => {
    return items.filter(
      (_, index) =>
        index >= amountOfVisibleItems * (pageNumber - 1) &&
        index < amountOfVisibleItems * pageNumber
    );
  };

  const { cartList } = useCart();

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartList));
  }, [cartList]);

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

  useEffect(() => {
    localStorage.setItem("cartVisibilityValue", visibilityValue.toString());
  }, [visibilityValue]);

  const [page, setPage] = useState(setQueryParams("page"));
  const [visibilityItems, setVisibilityItems] = useState(
    getVisibleItems(cartList, visibilityValue, page)
  );

  useEffect(() => {
    const visiblItems = getVisibleItems(cartList, visibilityValue, page);
    setVisibilityItems(visiblItems);
  }, [page, cartList, visibilityValue]);

  useEffect(() => {
    if (visibilityItems.length === 0 && cartList.length !== 0) {
      setPage(page - 1);
    }
  }, [cartList.length, page, visibilityItems]);

  const getPagesAmount = (items: ICartItem[], itemsAmount: number) => {
    return Math.ceil(items.length / itemsAmount);
  };

  const pagesAmount = getPagesAmount(cartList, visibilityValue);

  const [, setSearchParams] = useSearchParams();

  useEffect(() => {
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
  }, [page, setSearchParams, visibilityValue]);

  if (cartList.length) {
    return (
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
    );
  } else {
    return <EmptyCart />;
  }
};

export default CartPage;
