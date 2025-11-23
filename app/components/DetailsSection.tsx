export default function DetailsSection() {
  return (
    <div className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-2xl p-6 md:p-8 border border-rose-100">
      <div className="space-y-4">
        {/* Date */}
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 w-12 h-12 bg-rose-500 rounded-xl flex items-center justify-center shadow-md">
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          </div>
          <div className="flex-1">
            <p className="text-sm text-gray-500">Date</p>
            <p className="text-lg font-semibold text-gray-800">
              Wednesday, November 26, 2025
            </p>
          </div>
        </div>

        {/* Time */}
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 w-12 h-12 bg-pink-500 rounded-xl flex items-center justify-center shadow-md">
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <div className="flex-1">
            <p className="text-sm text-gray-500">Time</p>
            <p className="text-lg font-semibold text-gray-800">19:00 - 23:00</p>
          </div>
        </div>

        {/* Location */}
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center shadow-md">
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </div>
          <div className="flex-1">
            <p className="text-sm text-gray-500">Location</p>
            <p className="text-lg font-semibold text-gray-800 italic">
              To be announced
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
