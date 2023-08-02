// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper'

import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
// Import Swiper styles
import 'swiper/swiper.css'
// import 'swiper/modules/navigation/navigation.min.css'
// import 'swiper/modules/pagination/pagination.min.css'
import Image from 'next/image'

const carouselImages = [
  {
    caption: 'Photo Source: Lorem Ipsum',
    src: 'https://i.ibb.co/R70vBrQ/men.png',
  },
  {
    caption: 'Lorem Ipsum',
    src: 'https://i.ibb.co/GCCdy8t/womens.png',
  },
  {
    src: 'https://i.ibb.co/0jqHpnp/sneakers.png',
  },
  {
    caption: 'Photo Source: Lorem Ipsum',
    src: 'https://i.ibb.co/px2tCc3/jackets.png',
  },
  {
    caption: '',
    src: 'https://i.ibb.co/cvpntL1/hats.png',
  },
]

export default () => (
  <div
    style={{
      marginTop: '15rem',
      border: '1px solid red',
    }}
  >
    <Swiper
      // install Swiper modules
      modules={[Navigation, A11y]}
      spaceBetween={16}
      slidesPerView={2.5}
      navigation
      effect="fade"
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      {carouselImages.map((image) => (
        <SwiperSlide>
          <div
            style={{
              position: 'relative',
              height: '340px',
              width: '403px',
              overflow: 'hidden',
            }}
          >
            <Image
              src={image.src}
              layout="fill"
              objectPosition="center"
              objectFit="cover"
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
)
