import axiosInstance from "../configurations/axios";

const productService = {
  // Ottieni tutti i prodotti
  getAllProducts: async () => {
    return axiosInstance.get("/products");
  },

  getProduct: async (productId) => {
    return axiosInstance.get(`/product/${productId}`);
  },

  // Aggiungi un nuovo prodotto
  addProduct: async (productData) => {
    return axiosInstance.post("/products", productData);
  },

  // Modifica un prodotto esistente
  updateProduct: async (productId, productData) => {
    return axiosInstance.put(`/products/${productId}`, productData);
  },

  // Elimina un prodotto
  deleteProduct: async (productId) => {
    return axiosInstance.delete(`/products/${productId}`);
  },
};

export default productService;
