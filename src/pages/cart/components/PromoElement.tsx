const PromoElement = ({
  promoCode,
  usagePromoCodes,
  setUsagePromoCodes,
}: {
  promoCode: string;
  usagePromoCodes: string[] | null;
  setUsagePromoCodes: React.Dispatch<React.SetStateAction<string[] | null>>;
}) => {
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
