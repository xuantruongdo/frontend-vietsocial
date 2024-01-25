import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import "./Story.scss";

const Story = () => {
  return (
    <div className="story">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={10}
        slidesPerView={5}
        navigation
      >
        <SwiperSlide>
          <div className="single_story">
            <img
              src="https://image.vtc.vn/resize/th/upload/2020/12/28/ronaldo-06545791.jpeg"
              alt=""
            />
            <div className="story-avatar">
              <img
                src="https://image.vtc.vn/resize/th/upload/2020/12/28/ronaldo-06545791.jpeg"
                alt=""
              />
            </div>
            <div className="story-content">
              <h4>Erica Jones </h4>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="single_story">
            <img
              src="https://image.vtc.vn/resize/th/upload/2020/12/28/ronaldo-06545791.jpeg"
              alt=""
            />
            <div className="story-avatar">
              <img
                src="https://image.vtc.vn/resize/th/upload/2020/12/28/ronaldo-06545791.jpeg"
                alt=""
              />
            </div>
            <div className="story-content">
              <h4>Erica Jones </h4>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="single_story">
            <img
              src="https://image.vtc.vn/resize/th/upload/2020/12/28/ronaldo-06545791.jpeg"
              alt=""
            />
            <div className="story-avatar">
              <img
                src="https://image.vtc.vn/resize/th/upload/2020/12/28/ronaldo-06545791.jpeg"
                alt=""
              />
            </div>
            <div className="story-content">
              <h4>Erica Jones </h4>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="single_story">
            <img
              src="https://image.vtc.vn/resize/th/upload/2020/12/28/ronaldo-06545791.jpeg"
              alt=""
            />
            <div className="story-avatar">
              <img
                src="https://image.vtc.vn/resize/th/upload/2020/12/28/ronaldo-06545791.jpeg"
                alt=""
              />
            </div>
            <div className="story-content">
              <h4>Erica Jones </h4>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="single_story">
            <img
              src="https://image.vtc.vn/resize/th/upload/2020/12/28/ronaldo-06545791.jpeg"
              alt=""
            />
            <div className="story-avatar">
              <img
                src="https://image.vtc.vn/resize/th/upload/2020/12/28/ronaldo-06545791.jpeg"
                alt=""
              />
            </div>
            <div className="story-content">
              <h4>Erica Jones </h4>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="single_story">
            <img
              src="https://image.vtc.vn/resize/th/upload/2020/12/28/ronaldo-06545791.jpeg"
              alt=""
            />
            <div className="story-avatar">
              <img
                src="https://image.vtc.vn/resize/th/upload/2020/12/28/ronaldo-06545791.jpeg"
                alt=""
              />
            </div>
            <div className="story-content">
              <h4>Erica Jones </h4>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="single_story">
            <img
              src="https://image.vtc.vn/resize/th/upload/2020/12/28/ronaldo-06545791.jpeg"
              alt=""
            />
            <div className="story-avatar">
              <img
                src="https://image.vtc.vn/resize/th/upload/2020/12/28/ronaldo-06545791.jpeg"
                alt=""
              />
            </div>
            <div className="story-content">
              <h4>Erica Jones </h4>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="single_story">
            <img
              src="https://image.vtc.vn/resize/th/upload/2020/12/28/ronaldo-06545791.jpeg"
              alt=""
            />
            <div className="story-avatar">
              <img
                src="https://image.vtc.vn/resize/th/upload/2020/12/28/ronaldo-06545791.jpeg"
                alt=""
              />
            </div>
            <div className="story-content">
              <h4>Erica Jones </h4>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="single_story">
            <img
              src="https://image.vtc.vn/resize/th/upload/2020/12/28/ronaldo-06545791.jpeg"
              alt=""
            />
            <div className="story-avatar">
              <img
                src="https://image.vtc.vn/resize/th/upload/2020/12/28/ronaldo-06545791.jpeg"
                alt=""
              />
            </div>
            <div className="story-content">
              <h4>Erica Jones </h4>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Story;
