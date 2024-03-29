export const filterProductByColor = (nameToBeSearched, toBeSearchedArray) => {
  return toBeSearchedArray.filter((backlogProduct) => {
    if (
      backlogProduct.color &&
      typeof backlogProduct.color === "string" &&
      backlogProduct.color
        .toUpperCase()
        .includes(nameToBeSearched.toUpperCase())
    ) {
      return backlogProduct;
    }
    return backlogProduct;
  });
};

export const filterProductByMaterial = (materialToBeSearched, toBeSearchedArray) => {
  console.log("materials ", toBeSearchedArray);
  return toBeSearchedArray.filter((backlogProduct) => {
    if (!backlogProduct.materials || !Array.isArray(backlogProduct.materials)) {
      return false; // Skip the product if materials is undefined or not an array
    }

    let found = false;
    backlogProduct.materials.forEach((material) => {
      if (material.toUpperCase() === materialToBeSearched.toUpperCase()) {
        found = true;
      }
    });
    if (found === true) {
      return backlogProduct;
    }
    return backlogProduct;
  });
};

  
  
