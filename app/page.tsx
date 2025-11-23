export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50 flex items-center justify-center p-4">
      {/* Invitation Card */}
      <div className="relative w-full max-w-2xl">
        {/* Decorative border */}
        <div className="absolute inset-0 bg-gradient-to-r from-rose-200 via-pink-200 to-purple-200 rounded-3xl blur-xl opacity-50 -z-10"></div>

        {/* Main Card */}
        <div className="relative bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl border border-rose-100/50 overflow-hidden">
          {/* Decorative top pattern */}
          <div className="h-2 bg-gradient-to-r from-rose-400 via-pink-400 to-purple-400"></div>

          <div className="p-8 md:p-12">
            {/* Header Section */}
            <div className="text-center mb-8">
              <div className="inline-block mb-4">
                <div className="w-20 h-20 mx-auto bg-gradient-to-br from-rose-400 to-pink-500 rounded-full flex items-center justify-center shadow-lg">
                  <svg
                    className="w-10 h-10 text-white"
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
              </div>
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-rose-600 via-pink-600 to-purple-600 bg-clip-text text-transparent mb-3">
                Lời Mời
              </h1>
              <div className="w-24 h-1 bg-gradient-to-r from-rose-400 via-pink-400 to-purple-400 mx-auto rounded-full"></div>
            </div>

            {/* Main Content */}
            <div className="space-y-6 mb-8">
              <div className="text-center">
                <p className="text-lg md:text-xl text-gray-700 mb-2 font-medium">
                  Trân trọng kính mời bạn
                </p>
                <p className="text-base text-gray-600">
                  đến tham dự cuộc hẹn đặc biệt
                </p>
              </div>

              {/* Details Section */}
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
                      <p className="text-sm text-gray-500 mb-1">Ngày</p>
                      <p className="text-lg font-semibold text-gray-800">
                        Thứ Bảy, 15 Tháng 3, 2025
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
                      <p className="text-sm text-gray-500 mb-1">Giờ</p>
                      <p className="text-lg font-semibold text-gray-800">
                        14:00 - 17:00
                      </p>
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
                      <p className="text-sm text-gray-500 mb-1">Địa điểm</p>
                      <p className="text-lg font-semibold text-gray-800">
                        Café Central
                      </p>
                      <p className="text-sm text-gray-600">
                        123 Đường ABC, Quận XYZ, TP.HCM
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Message */}
              <div className="text-center py-4">
                <p className="text-gray-600 italic">
                  "Rất mong được gặp bạn tại buổi hẹn này!"
                </p>
              </div>
            </div>

            {/* Footer */}
            <div className="border-t border-rose-100 pt-6">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-center sm:text-left">
                  <p className="text-sm text-gray-500">
                    Vui lòng xác nhận tham dự
                  </p>
                  <p className="text-sm font-medium text-gray-700">
                    trước ngày 10/03/2025
                  </p>
                </div>
                <div className="flex gap-3">
                  <button className="px-6 py-2.5 bg-gradient-to-r from-rose-500 to-pink-500 text-white rounded-full font-medium shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200">
                    Xác nhận
                  </button>
                  <button className="px-6 py-2.5 bg-white border-2 border-rose-300 text-rose-600 rounded-full font-medium hover:bg-rose-50 transition-all duration-200">
                    Hủy
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Decorative bottom pattern */}
          <div className="h-2 bg-gradient-to-r from-rose-400 via-pink-400 to-purple-400"></div>
        </div>

        {/* Decorative elements */}
        <div className="absolute -top-4 -right-4 w-24 h-24 bg-rose-200/30 rounded-full blur-2xl -z-10"></div>
        <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-200/30 rounded-full blur-2xl -z-10"></div>
      </div>
    </div>
  );
}
