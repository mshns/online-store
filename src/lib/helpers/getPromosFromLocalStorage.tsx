const getPromosFromLocalStorage = () => {
  if (localStorage.getItem("promos")) {
    const stringyPromos: string = localStorage.getItem("promos") || "";
    return stringyPromos.split(",");
  }
  return [];
};

export default getPromosFromLocalStorage;
