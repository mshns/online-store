import { IProductItem } from "../../types";
import { mathOperator } from "../../types";
import { itemKey } from "../../types";

const getMinMax = (
  operator: mathOperator,
  itemKey: itemKey,
  itemsList: IProductItem[]
): number => {
  return Math[operator](...itemsList.map((item) => item[itemKey]));
};

export default getMinMax;
