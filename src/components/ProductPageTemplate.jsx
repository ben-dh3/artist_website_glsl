/* eslint-disable react/prop-types */
import { useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
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
    <div className="w-screen h-screen flex justify-center ">
    <ShaderBackground />
        <div className="flex overflow-scroll xl:overflow-hidden absolute bg-white p-4 sm:w-1/2 h-full">
        <Link to="/" className="absolute top-2 right-2">
            <FontAwesomeIcon icon={faTimes} size="lg" />
        </Link>
        <div id={productComponentId} className="m-10 w-full xl:self-center"></div>   
        </div>
    </div>
  );
}