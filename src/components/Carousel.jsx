/* eslint-disable react/prop-types */
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="title-colour relative w-full h-full overflow-hidden">
      <div
        className="flex transition-transform ease-in-out duration-500"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
            <Link className="cursor-pointer flex justify-center self-center w-full flex-shrink-0" key={index} to={image.link}>
                <img
                src={image.src}
                alt={image.alt || `Slide ${index + 1}`}
                className="h-96 w-auto object-cover"
                />
            </Link>
        ))}
      </div>
      <button
        onClick={prevSlide}
        className="text-2xl absolute top-1/2 left-4 transform -translate-y-1/2"
      >
        <FontAwesomeIcon icon={faArrowLeft} />
      </button>
      <button
        onClick={nextSlide}
        className="text-2xl absolute top-1/2 right-4 transform -translate-y-1/2"
      >
        <FontAwesomeIcon icon={faArrowRight} />
      </button>
    </div>
  );
};

export default Carousel;
