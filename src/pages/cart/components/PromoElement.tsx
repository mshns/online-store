import { IPromoElement } from "../../../types";

const PromoElement = ({
  promoCode,
  usagePromoCodes,
  setUsagePromoCodes,
}: IPromoElement) => {
  const promoItemHandler = () => {
    if (usagePromoCodes) {
      setUsagePromoCodes(usagePromoCodes.filter((item) => item !== promoCode));
    }
  };

  return (
    <div className="promo-list_item">
      <span>{promoCode} -10%</span>
      <button className="promo-item_button" onClick={promoItemHandler}>
        Drop
      </button>
    </div>
  );
};

export default PromoElement;
