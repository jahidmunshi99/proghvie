export const getVarieties = (cropName) => {
  const varieties = {
    Wheat: ["BARI Gom 33", "BARI Gom 34", "Prodip"],
    Rice: ["BRRI dhan28", "BRRI dhan29"],
    Mustard: ["BARI Sarisha 14", "BARI Sarisha 17"],
  };

  return varieties[cropName] || [];
};
