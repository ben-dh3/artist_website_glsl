import Carousel from './Carousel';

const Gallery = () => {
  const images = [
    { src: '/product images/Oil and Watercolour Interaction.webp', alt: 'Oil and Watercolour Interaction', link: '/product1' },
    { src: '/product images/Wax and Oil Interaction.webp', alt: 'Wax and Oil Interaction', link: '/product2' },
    { src: '/product images/Wax and Watercolour Interaction.webp', alt: 'Wax and Watercolour Interaction', link: '/product3' },  
  ];

  return (
    <div className="">
      <Carousel images={images} />
    </div>
  );
};

export default Gallery;