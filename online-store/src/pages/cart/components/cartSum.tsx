import { useEffect, useState } from "react";
import useCart from "../../../hooks/useCart";
import { ICartItem } from "../../../types";

const CartSumBlock = ({
  setPaymentVisible,
}: {
  setPaymentVisible: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const { cartList } = useCart();
  const getTotalSum = (itemsList: ICartItem[]) =>
    itemsList.reduce((acc, curr) => acc + curr.item.price * curr.amount, 0);
  const getTotalItems = (itemsList: ICartItem[]) =>
    itemsList.reduce((acc, curr) => acc + curr.amount, 0);

  const [totalSum, changeTotalSum] = useState(getTotalSum(cartList));
  const [totalItems, changeTotalItems] = useState(getTotalItems(cartList));

  const getPromoSum = (sum: number, percent: number) =>
    Math.floor(sum - (sum * percent) / 100);

  const [isPromo, setPromo] = useState(false);

  const promoCodes: string[] = ["mshns", "erkhan"];

  const isCorrectPromo = (promoCode: string, promoList: string[]) => {
    return promoList.some((promo) => promo === promoCode);
  };

  const [usagePromoCodes, setUsagePromoCodes] = useState<string[] | null>(null);
  const [currentPromo, setCurrentPromo] = useState("");

  const isUsedPromo = (promoValue: string) => {
    if (usagePromoCodes) {
      return usagePromoCodes.some((promo) => promo === promoValue);
    }
    return false;
  };

  const percentSum: number = usagePromoCodes ? usagePromoCodes.length * 10 : 0;

  const [promoSum, setPromoSum] = useState(getPromoSum(totalSum, percentSum));

  useEffect(() => {
    changeTotalSum(getTotalSum(cartList));
    changeTotalItems(getTotalItems(cartList));
  }, [cartList]);

  useEffect(() => {
    setPromoSum(getPromoSum(totalSum, percentSum));
  }, [usagePromoCodes]);

  const isCartEmpty = !cartList.length;

  return (
    <section className="cart_sum">
      <h2 className="cart_subtitle">Summary</h2>
      <div className="cart-sum_field">
        <span className="field_title">Products</span>
        <span className="products-count">{totalItems}</span>
      </div>
      <div className="cart-sum_field main_cart-sum">
        <span className="field_title">Total price</span>
        <span className="total-price">${totalSum}</span>
      </div>
      <div
        className={`cart-sum_field promo_cart-sum ${
          usagePromoCodes ? "" : "hidden"
        }`}
      >
        <span className="field_title">Total price (added promo)</span>
        <span className="total-price">${promoSum}</span>
      </div>
      <form className="cart-sum_field">
        <label htmlFor="promo-code">Promo code</label>
        <input
          className="cart-sum_input"
          type="text"
          placeholder="Enter code"
          id="promo-code"
          onChange={(evt) => {
            const promoValue = evt.target.value;
            if (
              isCorrectPromo(promoValue, promoCodes) &&
              !isUsedPromo(promoValue)
            ) {
              setPromo(true);
              setCurrentPromo(promoValue);
            } else {
              setPromo(false);
              setCurrentPromo("");
            }
          }}
        />
        <input
          className={`cart-sum_submit ${isPromo ? "" : "not-active"}`}
          type="submit"
          value="Add"
          onClick={(evt) => {
            evt.preventDefault();
            if (isPromo) {
              setUsagePromoCodes(() => {
                if (usagePromoCodes) {
                  return [...usagePromoCodes, currentPromo];
                } else {
                  return [currentPromo];
                }
              });
              setPromo(false);
            }
          }}
        />
      </form>
      <div className={`${usagePromoCodes ? "" : "hidden"}`}>
        <span className="field_title">Usage promos:</span>
        <span className="total-price">
          {usagePromoCodes ? usagePromoCodes.map((promo) => promo) : ""}
        </span>
      </div>
      <div>
        <span className="field_title">Promo: mshns, erkhan</span>
      </div>
      <button
        className={`cart-sum_button ${isCartEmpty ? "not-active" : ""}`}
        onClick={() => {
          if (!isCartEmpty) {
            setPaymentVisible(true);
          }
        }}
      >
        Buy now
      </button>
    </section>
  );
};

export default CartSumBlock;
