import PromoElement from "./PromoElement";

import { IUsagePromos } from "../../../types";

const UsagePromos = ({ usagePromoCodes, setUsagePromoCodes }: IUsagePromos) => {
  return usagePromoCodes ? (
    <div>
      {usagePromoCodes.map((promoCode, index) => (
        <PromoElement
          key={index}
          promoCode={promoCode}
          usagePromoCodes={usagePromoCodes}
          setUsagePromoCodes={setUsagePromoCodes}
        />
      ))}
    </div>
  ) : (
    <div></div>
  );
};

export default UsagePromos;
