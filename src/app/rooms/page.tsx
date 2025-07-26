import RoomCards from '@/components/RoomCards'

export default function RoomsPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-20">
      <h2 className="text-4xl font-bold text-center text-gray-900 mb-10">
        LuxeBite <span className="text-indigo-600">Rooms & Suites</span>
      </h2>
      <RoomCards />
    </div>
  )
}
