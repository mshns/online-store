const getPromoSum = (sum: number, percent: number) =>
    Math.floor(sum - (sum * percent) / 100);

export default getPromoSum;
