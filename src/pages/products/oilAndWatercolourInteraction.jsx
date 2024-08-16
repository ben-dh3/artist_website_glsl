import { useEffect, useRef } from 'react';
import ShaderBackground from "../../components/ShaderBackground";

export default function WaxAndOilInteraction() {
    const initializedRef = useRef(false); // Ref to track initialization status

  useEffect(() => {
    const initializeProductButton = () => {
    // Assuming the product ID is '1723806120834'
    const productId = '9700820746580';
    const elementId = 'product-component-1723805615488';
    
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
    }

    initializeProductButton();
  }, []);
  
  return (
    <div>
      <ShaderBackground />
      <div id='product-component-1723805615488'></div>
    </div>
  );
}
