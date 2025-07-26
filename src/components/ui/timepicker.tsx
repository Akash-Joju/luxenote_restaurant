'use client'

import * as React from "react"
import { cn } from "@/lib/utils"
import { Clock } from "lucide-react"

export interface TimePickerProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string
}

const times = [
  "5:00 PM", "5:30 PM", "6:00 PM", "6:30 PM", "7:00 PM", "7:30 PM",
  "8:00 PM", "8:30 PM", "9:00 PM", "9:30 PM", "10:00 PM"
]

const TimePicker = React.forwardRef<HTMLSelectElement, TimePickerProps>(
  ({ className, label, ...props }, ref) => {
    return (
      <div className="space-y-2">
        {label && (
          <label className="text-gray-700 flex items-center gap-2">
            <Clock size={18} /> {label}
          </label>
        )}
        <select
          ref={ref}
          className={cn(
            "border border-gray-300 rounded-lg px-4 py-2 w-full text-gray-900 bg-white focus:ring-2 focus:ring-blue-500",
            className
          )}
          {...props}
        >
          {times.map((time, idx) => (
            <option key={idx} value={time}>
              {time}
            </option>
          ))}
        </select>
      </div>
    )
  }
)

TimePicker.displayName = "TimePicker"

export { TimePicker }
