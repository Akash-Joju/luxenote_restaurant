"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

export default function HomePage() {
  return (
    <main className="scroll-smooth">
      {/* ✅ HERO SECTION */}
      <section className="relative h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img
            src="https://i.pinimg.com/originals/8a/27/09/8a2709aff18c1e20219e89f6d9da01f2.gif"
            alt="Hero Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-5xl md:text-6xl font-bold text-white drop-shadow-xl text-center"
        >
          Welcome to{" "}
          <span className="text-[#fef133] drop-shadow-[0_0_5px_white]">
            BURPIES
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="text-lg md:text-xl font-medium text-white mt-2 text-center"
        >
          WHERE EVERY BITE IS A PARTY!!!
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, delay: 0.6 }}
          className="mt-10 flex flex-wrap gap-6 justify-center"
        >
          <a href="#book-table">
            <Button className="animate-pulseSlow bg-yellow-500 hover:bg-black-300 text-white font-semibold px-6 py-3 rounded-xl shadow-md hover:shadow-xl transition-all duration-300">
              Book a Table
            </Button>
          </a>

          

          <a href="#about">
            <Button className="animate-pulseSlow bg-yellow-500 hover:bg-black text-white font-semibold px-6 py-3 rounded-xl shadow-md hover:shadow-xl transition-all duration-300">
              About Us
            </Button>
          </a>
        </motion.div>
      </section>

      {/* ✅ DISHES SECTION */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="w-full max-w-7xl mx-auto py-20 px-4 scroll-mt-24"
      >
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
          Burpies <span className="text-blue-900">Signature Dishes</span>
        </h2>

        <Swiper
          modules={[EffectCoverflow, Navigation, Pagination]}
          effect="coverflow"
          grabCursor
          centeredSlides
          loop
          slidesPerView="auto"
          coverflowEffect={{
            rotate: 30,
            stretch: 0,
            depth: 150,
            modifier: 1.5,
            slideShadows: true,
          }}
          pagination={{ clickable: true }}
          navigation
          className="w-full max-w-[95%]"
        >
          {[
            {
              name: "Truffle Pasta",
              img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c",
            },
            {
              name: "Gourmet Burger",
              img: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1",
            },
            {
              name: "Sweety Burger",
              img: "https://i.pinimg.com/1200x/b8/b2/2b/b8b22bb57bd8550ad59a1b63b9f81d44.jpg",
            },
            {
              name: "Classic Steak",
              img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
            },
            {
              name: "Seafood Delight",
              img: "https://i.pinimg.com/1200x/c8/95/98/c89598566c94bf5912d217de6efb40be.jpg",
            },
          ].map((dish, index) => (
            <SwiperSlide
              key={index}
              className="rounded-3xl overflow-hidden shadow-2xl transition-all duration-500"
              style={{ width: "300px" }}
            >
              <img
                src={dish.img}
                alt={dish.name}
                className="w-full h-[300px] object-cover rounded-t-3xl"
              />
              <div className="p-4 bg-white text-center">
                <h3 className="text-lg font-semibold text-gray-800">
                  {dish.name}
                </h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.section>

      {/* ✅ BOOKING SECTION */}
      <motion.section
        id="book-table"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        viewport={{ once: true }}
        className="w-full max-w-6xl mx-auto bg-white rounded-xl p-6 shadow-md flex flex-col md:flex-row items-center gap-8 my-24 scroll-mt-24"
      >
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.9 }}
          className="w-full md:w-1/2"
        >
          <img
            src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092"
            alt="Dining Table"
            className="rounded-xl shadow-lg w-full h-auto object-cover"
          />
        </motion.div>

        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="w-full md:w-1/2 text-center md:text-left"
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-3">
            Book a Table
          </h3>
          <p className="text-md text-gray-700 mb-6">
            Reserve your seat today and enjoy a premium dining experience like no other.
          </p>
          <Link href="/booking">
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="animate-pulseSlow bg-yellow-500 hover:bg-black text-white font-semibold px-6 py-3 rounded-xl shadow-md transition-all duration-300"
            >
              Book Now
            </motion.button>
          </Link>
        </motion.div>
      </motion.section>

      

      {/* ✅ FACILITIES SECTION */}
      <motion.section
        id="facilities"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        viewport={{ once: true }}
        className="w-full max-w-6xl mx-auto bg-white rounded-xl p-6 shadow-md flex flex-col gap-10 my-24 scroll-mt-24"
      >
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="text-center"
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-3">
            Our Premium Facilities
          </h3>
          <p className="text-md text-gray-700 max-w-2xl mx-auto">
            Designed to fullfill your taste of dishes. Explore the exceptional amenities we offer.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center">
          {[
            {
              icon: "🛎️",
              title: "24/7 Concierge",
              desc: "Assistance anytime, for anything you need.",
            },
            {
              icon: "🍽️",
              title: "Fine Dining",
              desc: "Gourmet meals from world-class chefs.",
            },
            
           
           
            {
              icon: "🚗",
              title: "Valet Parking",
              desc: "Complimentary secure parking for your vehicle.",
            },
          ].map((facility, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-gray-100 rounded-xl p-6 shadow hover:shadow-lg transition-all"
            >
              <div className="text-4xl mb-3">{facility.icon}</div>
              <h4 className="text-xl font-semibold text-gray-800 mb-2">
                {facility.title}
              </h4>
              <p className="text-sm text-gray-600">{facility.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* ✅ ABOUT SECTION */}
      <motion.section
        id="about"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        viewport={{ once: true }}
        className="w-full max-w-5xl mx-auto bg-white rounded-xl p-8 shadow-md my-24 scroll-mt-24 text-center"
      >
        <motion.h3
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-3xl font-bold text-gray-900 mb-4"
        >
          About Burpies
        </motion.h3>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.9 }}
          className="text-md text-gray-700 max-w-3xl mx-auto"
        >
          Burpies is a premium destination blending fine dining . Our commitment to excellence ensures every guest receives a world-class experience — whether you're enjoying the dishes. Founded on elegance and comfort, Burpies redefines modern hospitality.
        </motion.p>
      </motion.section>
    </main>
  );
}
