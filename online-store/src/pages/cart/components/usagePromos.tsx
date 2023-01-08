import PromoElement from "./PromoElement";

const UsagePromos = ({
  usagePromoCodes,
  setUsagePromoCodes,
}: {
  usagePromoCodes: string[] | null;
  setUsagePromoCodes: React.Dispatch<React.SetStateAction<string[] | null>>;
}) => {
  if (usagePromoCodes) {
    return (
      <>
        {usagePromoCodes.map((promoCode, index) => (
          <PromoElement
            key={index}
            promoCode={promoCode}
            usagePromoCodes={usagePromoCodes}
            setUsagePromoCodes={setUsagePromoCodes}
          />
        ))}
      </>
    );
  } else {
    return <div></div>;
  }
};

export default UsagePromos;
