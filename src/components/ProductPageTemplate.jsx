/* eslint-disable react/prop-types */
import { useEffect, useRef } from 'react';
import ShaderBackground from "./ShaderBackground";

export default function ProductPageTemplate({ productId, productComponentId }) {
  const initializedRef = useRef(false); // Ref to track initialization status

  useEffect(() => {
    const initializeProductButton = () => {

      if (window.ShopifyBuyUI) {
        // Check if already initialized
        if (!initializedRef.current) {
          window.initShopifyProduct(productId, productComponentId);
          initializedRef.current = true; // Set the ref to true after initializing
        }
      } else {
        // Retry after a delay if ShopifyBuyUI is not yet available
        setTimeout(initializeProductButton, 500);
      }
    };

    initializeProductButton();
  }, []);

  return (
    <div>
      <ShaderBackground />
      <div id={productComponentId}></div>
    </div>
  );
}