import React, { useEffect, useState } from 'react'
import { Carousel, CarouselControl, CarouselIndicators, CarouselItem } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import drone1 from '../../Assets/Images/1.png'
import drone2 from '../../Assets/Images/2.png';
import drone3 from '../../Assets/Images/3.png';
import drone4 from '../../Assets/Images/Main pic.png'

const items = [
  {
    src: drone1,
    altText: 'Image 1',
  },
  {
    src: drone2,
    altText: 'Image 2',
  },
  {
    src: drone3,
    altText: 'Image 3',
  },
  {
    src: drone4,
    altText: 'Image 4',
  },
  // {
  //   src: 'https://squadrone.bold-themes.com/main-demo/wp-content/uploads/sites/2/2017/12/inner_product_05.png',
  //   altText: 'Image 5',
  // },
  // {
  //   src: 'https://squadrone.bold-themes.com/main-demo/wp-content/uploads/sites/2/2017/12/inner_product_06.png',
  //   altText: 'Image 6',
  // },
  // {
  //   src: 'https://squadrone.bold-themes.com/main-demo/wp-content/uploads/sites/2/2017/12/inner_product_07.png',
  //   altText: 'Image 7',
  // },
  // {
  //   src: 'https://squadrone.bold-themes.com/main-demo/wp-content/uploads/sites/2/2017/12/inner_product_05.png',
  //   altText: 'Image 8',
  // },
  // {
  //   src: 'https://squadrone.bold-themes.com/main-demo/wp-content/uploads/sites/2/2017/12/inner_product_09.png',
  //   altText: 'Image 9',
  // }
];

const ImageCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === Math.ceil(items.length / 4) - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const prev = () => {
    if (animating) return;
    const prevIndex = activeIndex === 0 ? Math.ceil(items.length / 4) - 1 : activeIndex - 1;
    setActiveIndex(prevIndex);
  };

  const slides = [];
  for (let i = 0; i < items.length; i += 4) {
    const chunk = items.slice(i, i + 4);
    slides.push(
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={i}
      >
        <div className="d-flex justify-content-around">
          {chunk.map((item) => (
            <img src={item.src} alt={item.altText} key={item.altText} style={{ width: '23%' }} />
          ))}
        </div>
      </CarouselItem>
    );
  }

  useEffect(() => {
    const interval = setInterval(() => {
      next();
    }, 3000);

    return () => clearInterval(interval);
  }, [next]);

  return (
    <div>
        <div>
      <Carousel
        activeIndex={activeIndex}
        next={next}
        previous={prev}
      >
        {/* <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={(newIndex) => {
          if (animating) return;
          setActiveIndex(newIndex);
        }} /> */}
        {slides}
        {/* <CarouselControl direction='prev' directionText='Prev' onClickHandler={prev} /> */}
        {/* <CarouselControl direction='next' directionText='Next' onClickHandler={next} /> */}
      </Carousel>
    </div>
    </div>
  );
};

export default ImageCarousel;
