import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import productService from "../../services/products";

const Offer = () => {
  const [product, setProduct] = useState([]);

  const { productId } = useParams();

  const fetchProducts = async () => {
    try {
      const response = await productService.getProduct(productId);
      setProduct(response.data);
    } catch (error) {
      console.error("Errore nel recupero del prodotto:", error);
    }
  };

  const navigate = useNavigate();

  const handleImmagineClick = (productId) => {
    navigate(`/product/${productId}`);
  };

  useEffect(() => {
    fetchProducts();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="background">
      <div className="offers">
        <div className="offers-left">
          <h1>Preordina Ora!</h1>
          <button>Preordina</button>
        </div>
        <div className="offers-right">
          <img
            src={product.imageUrl}
            alt={product.title}
            onClick={() => handleImmagineClick(product._id)}
          />
        </div>
      </div>
    </div>
  );
};

export default Offer;
