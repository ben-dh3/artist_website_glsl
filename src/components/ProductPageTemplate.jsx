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
    <div className="overflow-y-scroll w-screen h-screen flex flex-row-reverse">
      <ShaderBackground />
      <div className="flex bg-white p-4 h-full w-full">
      <Link to="/" className="absolute top-2 left-2">
          <FontAwesomeIcon icon={faTimes} size="lg" />
      </Link>
      <div className='m-10 w-full h-full xl:self-center'>
        <div id={productComponentId} className=""></div>   
      </div>
      </div>
    </div>
  );
}