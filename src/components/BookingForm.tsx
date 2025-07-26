'use client'

import { useState } from 'react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { TimePicker } from "@/components/ui/timepicker"
import { Toaster, toast } from "sonner"

import { CalendarDays, Clock, User, Users } from 'lucide-react'
import { motion } from 'framer-motion'

type BookingFormData = {
  name: string
  date: string
  time: string
  guests: string
}

export default function BookingForm() {
  const [form, setForm] = useState<BookingFormData>({
    name: '',
    date: '',
    time: '',
    guests: '1',
  })

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    toast.success(`🎉 Booking confirmed for ${form.name} on ${form.date} at ${form.time}`)
    setForm({ name: '', date: '', time: '', guests: '1' })
  }

  return (
    <>
      <Toaster position="top-center" richColors />
      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-white/70 backdrop-blur-lg p-8 rounded-2xl shadow-2xl w-full max-w-xl mx-auto space-y-6"
      >
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">
          Reserve Your Table
        </h2>

        {/* Name */}
        <div className="space-y-2">
          <Label htmlFor="name" className="text-gray-700 flex items-center gap-2">
            <User size={18} /> Full Name
          </Label>
          <Input
            id="name"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Enter your full name"
            required
            className="text-gray-900"
          />
        </div>

        {/* Date */}
        <div className="space-y-2">
          <Label htmlFor="date" className="text-gray-700 flex items-center gap-2">
            <CalendarDays size={18} /> Date
          </Label>
          <Input
            id="date"
            name="date"
            type="date"
            value={form.date}
            onChange={handleChange}
            required
            className="text-gray-900"
          />
        </div>

        {/* Time */}
        <div className="space-y-2">
          <Label htmlFor="time" className="text-gray-700 flex items-center gap-2">
            <Clock size={18} /> Time
          </Label>
          <TimePicker
            id="time"
            name="time"
            value={form.time}
            onChange={(value: string) =>
              setForm((prev) => ({ ...prev, time: value }))
            }
            required
          />
        </div>

        {/* Guests */}
        <div className="space-y-2">
          <Label htmlFor="guests" className="text-gray-700 flex items-center gap-2">
            <Users size={18} /> Number of Guests
          </Label>
          <select
            id="guests"
            name="guests"
            value={form.guests}
            onChange={handleChange}
            className="border border-gray-300 rounded-lg px-4 py-2 w-full text-gray-900 focus:ring-2 focus:ring-blue-500"
          >
            {[...Array(10)].map((_, i) => (
              <option key={i} value={(i + 1).toString()}>
                {i + 1} Guest{i > 0 && 's'}
              </option>
            ))}
          </select>
        </div>

        {/* Submit Button */}
        <div className="text-center pt-2">
          <Button
            type="submit"
            className="w-full text-lg bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg"
          >
            Book Now
          </Button>
        </div>
      </motion.form>
    </>
  )
}
