export const filterProductByTitle = (nameToBeSearched, toBeSearchedArray) => {
    const filterProductToBeSearched = toBeSearchedArray.filter((backlogProduct) => {
      if (backlogProduct.title.toUpperCase().indexOf(nameToBeSearched.toUpperCase()) !== -1) {
        return backlogProduct;
      }
    });
    return filterProductToBeSearched;
  };

  export const filterProductByMaterial = (materialToBeSearched, toBeSearchedArray) => {
    return toBeSearchedArray.filter((backlogProduct) => {
      const found = backlogProduct.materials.includes(materialToBeSearched.toUpperCase());
      if (found) {
        return backlogProduct;
      }
    });
  };
  
