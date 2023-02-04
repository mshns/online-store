const isCorrectPromo = (promoCode: string, promoList: string[]) => {
  return promoList.some((promo) => promo === promoCode);
};
export default isCorrectPromo;
