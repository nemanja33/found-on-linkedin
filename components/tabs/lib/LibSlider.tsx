"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
// @ts-ignore
import 'swiper/css';
import { forwardRef, HTMLAttributes, useRef } from 'react';
import { SafeHtml } from '@/components/safeHTML/SafeHTML';
import clsx from 'clsx';

interface LibSliderProps extends HTMLAttributes<HTMLDivElement> {
  slidesPerView: number;
  slides: string[];
}

const NavButton = ({
  direction,
  onClick,
}: {
  direction: 'prev' | 'next';
  onClick?: () => void;
}) => (
  <button
    onClick={onClick}
    className={clsx(
      "inline-flex items-center justify-center",
      "w-10 h-10 shrink-0",
      "font-bold",
      "border-black border-2 bg-white",
      "transition-all duration-150 ease-in-out select-none outline-none cursor-pointer",
      "hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[4px_4px_0px_0px_#000]",
      "active:translate-x-0 active:translate-y-0 active:shadow-none",
      "focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-orange-600",
    )}
    aria-label={direction === 'prev' ? 'Previous slide' : 'Next slide'}
  >
    {direction === 'prev' ? (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 3L5 8L10 13" stroke="black" strokeWidth="2" strokeLinecap="square"/>
      </svg>
    ) : (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 3L11 8L6 13" stroke="black" strokeWidth="2" strokeLinecap="square"/>
      </svg>
    )}
  </button>
);

const LibSlider = forwardRef<HTMLDivElement, LibSliderProps>(
  ({ slidesPerView, slides, className, ...props }, ref) => {
    const swiperRef = useRef<any>(null);

    return (
      <div ref={ref} className={clsx("", className)} {...props}>
        <Swiper
          modules={[Navigation]}
          spaceBetween={50}
          slidesPerView={slidesPerView}
          onSwiper={(swiper) => { swiperRef.current = swiper; }}
        >
          {slides.map((slide, idx) => (
            <SwiperSlide key={idx} className='border border-2'>
              <SafeHtml html={slide} />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="flex items-center gap-2 mt-4">
          <NavButton direction="prev" onClick={() => swiperRef.current?.slidePrev()} />
          <NavButton direction="next" onClick={() => swiperRef.current?.slideNext()} />
        </div>
      </div>
    );
  }
);

LibSlider.displayName = 'LibSlider';

export { LibSlider };