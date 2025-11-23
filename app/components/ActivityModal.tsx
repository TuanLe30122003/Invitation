"use client";

import { FaTimes } from "react-icons/fa";

interface ActivityModalProps {
  isOpen: boolean;
  onClose: () => void;
  activity: {
    id: number;
    title: string;
    description: string;
    details: string;
  } | null;
}

export default function ActivityModal({
  isOpen,
  onClose,
  activity,
}: ActivityModalProps) {
  if (!isOpen || !activity) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-in fade-in duration-200"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200" />

      {/* Modal */}
      <div
        className="relative bg-white rounded-2xl md:rounded-3xl shadow-2xl max-w-lg w-full max-h-[95vh] md:max-h-[90vh] overflow-y-auto z-10 animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Decorative top */}
        <div className="h-2 bg-gradient-to-r from-rose-400 via-pink-400 to-purple-400"></div>

        {/* Content */}
        <div className="p-4 md:p-8">
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-3 right-3 md:top-4 md:right-4 w-7 h-7 md:w-8 md:h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
          >
            <FaTimes className="w-3.5 h-3.5 md:w-4 md:h-4 text-gray-600" />
          </button>

          {/* Title */}
          <h2 className="text-xl md:text-3xl font-bold text-gray-800 mb-3 md:mb-4 pr-8 md:pr-10 leading-tight">
            {activity.title}
          </h2>

          {/* Description */}
          <p className="text-sm md:text-base text-gray-600 mb-4 md:mb-6 leading-relaxed">
            {activity.description}
          </p>

          {/* Details */}
          <div className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-xl p-4 md:p-6 border border-rose-100">
            <h3 className="text-base md:text-lg font-semibold text-gray-800 mb-2 md:mb-3">
              Details
            </h3>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed whitespace-pre-line">
              {activity.details}
            </p>
          </div>
        </div>

        {/* Decorative bottom */}
        <div className="h-2 bg-gradient-to-r from-rose-400 via-pink-400 to-purple-400"></div>
      </div>
    </div>
  );
}
