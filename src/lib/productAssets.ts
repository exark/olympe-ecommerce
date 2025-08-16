import productTunic from "@/assets/product-tunic.jpg";
import productToga from "@/assets/product-toga.jpg";
import productSandals from "@/assets/product-sandals.jpg";

export type ImageKey = "tunic" | "toga" | "sandals";

const assetMap: Record<ImageKey, string> = {
  tunic: productTunic,
  toga: productToga,
  sandals: productSandals,
};

export const getProductImage = (key: ImageKey) => assetMap[key];
export default assetMap;
