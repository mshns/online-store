
import { ICartItem } from "../../../types";
import CartItem from "./cartItem";

const CartList = ({ visibilityItems }: { visibilityItems: ICartItem[] }) => {

    return (
      <div className="cart_list">
        {visibilityItems.map((item, index) => (
          <CartItem item={item} key={index} />
        ))}
      </div>
    );
};

export default CartList;
