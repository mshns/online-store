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
    <div>
      <span>{promoCode}</span>
      <button
        onClick={() => {
          if (usagePromoCodes) {
            setUsagePromoCodes(
              usagePromoCodes.filter((item) => item !== promoCode)
            );
          }
        }}
      >
        Delete
      </button>
    </div>
  );
};
export default PromoElement;
