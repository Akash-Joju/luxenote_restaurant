'use client'

import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCoverflow, Navigation, Pagination } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import Image from 'next/image'

export default function DishesPage() {
  const dishes = [
    {
      name: "Truffle Pasta",
      img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c",
    },
    {
      name: "Gourmet Burger",
      img: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1",
    },
    {
      name: "Seafood Delight",
      img: "https://i.pinimg.com/1200x/c8/95/98/c89598566c94bf5912d217de6efb40be.jpg",
    },
    {
      name: "Classic Steak",
      img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
    },
    {
      name: "Sweety Burger",
      img: "https://i.pinimg.com/1200x/b8/b2/2b/b8b22bb57bd8550ad59a1b63b9f81d44.jpg",
    },
  ]

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="w-full max-w-7xl mx-auto py-20 px-4 scroll-mt-24"
    >
      <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
        Burpies <span className="text-[#464dd3] stroke-white">Signature Dishes</span>
      </h2>

      <Swiper
        modules={[EffectCoverflow, Navigation, Pagination]}
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView="auto"
        coverflowEffect={{
          rotate: 30,
          stretch: 0,
          depth: 150,
          modifier: 1.5,
          slideShadows: true,
        }}
        pagination={{ clickable: true }}
        navigation={true}
        className="w-full max-w-[95%]"
      >
        {dishes.map((dish, index) => (
          <SwiperSlide
            key={index}
            className="rounded-3xl overflow-hidden shadow-2xl transition-all duration-500 bg-white"
            style={{ width: "300px" }}
          >
            <div className="relative w-full h-[300px]">
              <Image
                src={dish.img}
                alt={dish.name || `Dish ${index + 1}`}
                fill
                className="object-cover rounded-t-3xl"
                sizes="(max-width: 768px) 100vw, 300px"
              />
            </div>
            <div className="p-4 text-center">
              <h3 className="text-lg font-semibold text-gray-800">{dish.name}</h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </motion.section>
  )
}
