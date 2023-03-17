import { TESTIMONIALS } from "../app/shared/TESTIMONIALS";
import TestimonialItem from "./TestimonialItem";
import { useState } from "react";
import { Carousel, CarouselItem, CarouselControl, CarouselIndicators } from 'reactstrap';
import './componentcss/testimonialcarousel.css';

const TestimonialCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    const index = activeIndex === TESTIMONIALS.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(index);
  };

  const prevSlide = () => {
    const index = activeIndex === 0 ? TESTIMONIALS.length - 1 : activeIndex - 1;
    setActiveIndex(index);
  };

  const slides = TESTIMONIALS.map((testimonial) => {
    return (
      <CarouselItem key={testimonial.id}>
        <TestimonialItem testimonial={testimonial} />
      </CarouselItem>
    );
  });

  return (
      <div className="carousel">
        <Carousel activeIndex={activeIndex} next={nextSlide} previous={prevSlide}>
          <CarouselIndicators items={TESTIMONIALS} activeIndex={activeIndex} onClickHandler={setActiveIndex} />
          {slides}
          <CarouselControl direction="prev" directionText="Previous" onClickHandler={prevSlide} />
          <CarouselControl direction="next" directionText="Next" onClickHandler={nextSlide} />
        </Carousel>
      </div>
  );
};

export default TestimonialCarousel;
