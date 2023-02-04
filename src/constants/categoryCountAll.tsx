import storeItems from "../StoreProducts/StoreProducts";

const categoryCountAll = (category: string) => storeItems.filter((item) => item.category === category).length;

export default categoryCountAll;