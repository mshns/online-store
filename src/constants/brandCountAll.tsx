import storeItems from "../StoreProducts/StoreProducts";

const brandCountAll = (brand: string) => storeItems.filter((item) => item.brand === brand).length;

export default brandCountAll;