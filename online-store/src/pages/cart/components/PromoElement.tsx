const PromoElement = ({
  promoCode,
  usagePromoCodes,
  setUsagePromoCodes,
}: {
  promoCode: string;
  usagePromoCodes: string[] | null;
  setUsagePromoCodes: React.Dispatch<React.SetStateAction<string[] | null>>;
}) => {
  return (
    <div className="promo-list_item">
      <span>{promoCode} -10%</span>
      <button className="promo-item_button"
        onClick={() => {
          if (usagePromoCodes) {
            setUsagePromoCodes(
              usagePromoCodes.filter((item) => item !== promoCode)
            );
          }
        }}
      >
        Drop
      </button>
    </div>
  );
};

export default PromoElement;
