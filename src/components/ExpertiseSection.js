import React from 'react';
import '../styles/ExpertiseSection.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';

import editingIcon from '../assets/editing-icon.gif';
import shootsIcon from '../assets/shoots-icon.gif';
import equipmentIcon from '../assets/equipment-icon.gif';
import droneIcon from '../assets/drone-icon.gif';
import eventIcon from '../assets/event-icon.gif';

const ExpertiseSection = () => {
  return (
    <section className="expertise-section">
      <h2>Explore Our Expertise</h2>
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        pagination={{ clickable: true }}
        navigation={true}
        loop={true}
        modules={[Pagination, Navigation]}  // Add modules prop to include the imported modules
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
      >
        <SwiperSlide>
          <div className="expertise-card">
            <LazyLoadImage src={equipmentIcon} alt="Extensive equipment" effect="blur" />
            <h3>Extensive equipment</h3>
            <p>Your creativity our inspiration. Whatever you want</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="expertise-card">
            <LazyLoadImage src={shootsIcon} alt="Long hour shoots" effect="blur" />
            <h3>Long hour shoots</h3>
            <p>Your creativity our inspiration. Whatever you want</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="expertise-card">
            <LazyLoadImage src={editingIcon} alt="Professional editing" effect="blur" />
            <h3>Professional editing</h3>
            <p>Your creativity our inspiration. Whatever you want</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="expertise-card">
            <LazyLoadImage src={droneIcon} alt="Drone Photography" effect="blur" />
            <h3>Drone Photography</h3>
            <p>Capture stunning aerial shots with our advanced drone services.</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="expertise-card">
            <LazyLoadImage src={eventIcon} alt="Event Management" effect="blur" />
            <h3>Event Management</h3>
            <p>We manage your events with professionalism and creativity.</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default ExpertiseSection;
