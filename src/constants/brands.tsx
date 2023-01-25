import storeItems from "../StoreProducts/StoreProducts";

const brands: string[] = [];
storeItems.forEach((item) => {
  if (brands.indexOf(item.brand) === -1) {
    brands.push(item.brand);
  }
});

export default brands;
