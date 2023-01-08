import "./cartPage.scss";
import CartList from "./components/cartList";
import CartSumBlock from "./components/cartSum";
import CartHeader from "./components/cartHeader";
import { ICartItem } from "../../types";
import { useEffect, useState } from "react";
import useCart from "../../hooks/useCart";

const CartPage = (props: {
  setPaymentVisible: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
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

  const [visibilityValue, setVisibilityValue] = useState(
    Number(localStorage.getItem("cartVisibilityValue")) || 10
  );

  useEffect(() => {
    localStorage.setItem("cartVisibilityValue", visibilityValue.toString());
  }, [visibilityValue]);

  const [page, setPage] = useState(1);
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
  }, [visibilityItems]);

  const getPagesAmount = (items: ICartItem[], itemsAmount: number) => {
    return Math.ceil(items.length / itemsAmount);
  };

  const pagesAmount = getPagesAmount(cartList, visibilityValue);

  // const [, setSearchParams] = useSearchParams();
  // useEffect(() => {
  //   const params: {
  //     brand?: string;
  //     category?: string;
  //     search?: string;
  //     sortBy?: string;
  //   } = {};

  //   if (sort.brand.length) {
  //     params.brand = sort.brand.join("%");
  //   }
  //   if (sort.category.length) {
  //     params.category = sort.category.join("%");
  //   }
  //   if (sort.search) {
  //     params.search = sort.search;
  //   }
  //   if (sort.sortBy) {
  //     params.sortBy = sort.sortBy;
  //   }
  //   setSearchParams(params);
  // }, [setSearchParams, sort]);

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
      <CartSumBlock setPaymentVisible={props.setPaymentVisible} />
    </main>
  );
};

export default CartPage;
