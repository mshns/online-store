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
  const { cartList } = useCart();
  const [visibilityValue, setVisibilityValue] = useState(10);
  const [page, setPage] = useState(1);

  const getVisibleItems = (
    items: ICartItem[],
    amountOfVisibleItems: number
  ) => {
    return items.filter(
      (_, index) =>
        index >= amountOfVisibleItems * (page - 1) &&
        index < amountOfVisibleItems * page
    );
  };

  const changePage = (pageNumber: number, pagesAmount: number) => {
    if (pageNumber > pagesAmount) {
      return pagesAmount;
    } else {
      return pageNumber;
    }
  };

  const getPagesAmount = (items: ICartItem[], itemsAmount: number) => {
    return Math.ceil(items.length / itemsAmount);
  };
  let visibleCartItems = getVisibleItems(cartList, visibilityValue);
  const [cartVisibleItems, setVisibleItems] =
    useState<ICartItem[]>(visibleCartItems);

  const pagesAmount = getPagesAmount(cartList, visibilityValue);
  useEffect(() => {
    setVisibleItems(visibleCartItems);
    setPage(changePage(page, pagesAmount));
  }, [cartList, visibilityValue, visibleCartItems, page, pagesAmount]);

  return (
    <main className="cart">
      <section className="cart_products">
        <CartHeader
          handler={setVisibilityValue}
          setPage={setPage}
          page={page}
          pagesAmount={pagesAmount}
        />
        <CartList items={cartVisibleItems} />
      </section>
      <CartSumBlock
        setPaymentVisible={props.setPaymentVisible}
      />
    </main>
  );
};

export default CartPage;
