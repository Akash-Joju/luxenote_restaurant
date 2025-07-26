'use client'

import { BedDouble, Star } from 'lucide-react'

export default function RoomCards() {
  const rooms = [
    {
      title: 'Deluxe Room',
      price: 'Rs.599/night',
      image:
        'https://i.pinimg.com/1200x/11/6a/11/116a11aa81c52f7743b877f56b31baab.jpg',
      description: 'Elegant room with modern decor, city view, and premium bedding.',
    },
    {
      title: 'Executive Suite',
      price: 'Rs.699/night',
      image:
        'https://i.pinimg.com/1200x/f5/41/80/f54180b372693311acc96abec911bbaf.jpg',
      description: 'Spacious suite with lounge access, luxury bath, and skyline view.',
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
      {rooms.map((room, i) => (
        <div
          key={i}
          className="bg-white/80 backdrop-blur-lg border border-gray-200 rounded-3xl shadow-xl overflow-hidden transition-transform hover:scale-[1.02]"
        >
          <img
            src={room.image}
            alt={room.title}
            className="w-full h-60 object-cover"
          />
          <div className="p-6 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                <BedDouble className="text-indigo-500" /> {room.title}
              </h3>
              <span className="text-indigo-600 font-semibold text-lg">{room.price}</span>
            </div>
            <p className="text-gray-600">{room.description}</p>
            <div className="flex items-center gap-1 text-yellow-400">
              {Array(5)
                .fill(0)
                .map((_, j) => (
                  <Star key={j} size={16} fill="currentColor" />
                ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
