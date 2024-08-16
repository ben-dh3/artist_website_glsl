import { useEffect, useRef } from 'react';
import ShaderBackground from "../../components/ShaderBackground";

export default function WaxAndOilInteraction() {
  const initializedRef = useRef(false); // Ref to track initialization status

  useEffect(() => {
    const initializeProductButton = () => {
      const productId = '9700831330644';
      const elementId = 'product-component-1723806120834';

      if (window.ShopifyBuyUI) {
        // Check if already initialized
        if (!initializedRef.current) {
          window.initShopifyProduct(productId, elementId);
          initializedRef.current = true; // Set the ref to true after initializing
        }
      } else {
        // Retry after a delay if ShopifyBuyUI is not yet available
        setTimeout(initializeProductButton, 500); // Retry after 500ms
      }
    };

    initializeProductButton();

    // Cleanup function to clear content on component unmount
    return () => {
      const element = document.getElementById('product-component-1723806120834');
      if (element) {
        element.innerHTML = ''; // Clear any existing content
      }
    };
  }, []); // Empty dependency array ensures this effect runs once on mount

  return (
    <div>
      <ShaderBackground />
      <div id='product-component-1723806120834'></div>
    </div>
  );
}

