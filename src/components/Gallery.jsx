import Carousel from './Carousel';

const Gallery = () => {
  const images = [
    { src: '/artwork/Mia Oil.webp', alt: 'Mia Oil Painting' },
    { src: '/artwork/Mia Oil.webp', alt: 'Mia Oil Painting' },
    { src: '/artwork/Mia Oil.webp', alt: 'Mia Oil Painting' },
    { src: '/artwork/Mia Oil.webp', alt: 'Mia Oil Painting' },
    { src: '/artwork/Mia Oil.webp', alt: 'Mia Oil Painting' },
  ];

  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel images={images} />
    </div>
  );
};

export default Gallery;