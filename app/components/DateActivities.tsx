"use client";

import { useState } from "react";
import { FaFilm, FaUtensils, FaEye } from "react-icons/fa";
import ActivityModal from "./ActivityModal";

export default function DateActivities() {
  const [selectedActivity, setSelectedActivity] = useState<number | null>(null);

  const activities = [
    {
      id: 1,
      title: "Dinner (not actually dinner but whatever)",
      description:
        "We'll eat, but the food is flexible and of course not my fault :))",
      icon: <FaUtensils />,
      color: "from-rose-500 to-pink-500",
      details: `We eat, that's all`,
    },
    {
      id: 2,
      title: "Cinema",
      description: "We'll watch a very interesting movie, guess so",
      icon: <FaFilm />,
      color: "from-pink-500 to-purple-500",
      details: `Movie night details:

• Address: 4th Floor, Indochina Plaza, 241 Xuan Thuy Street, Cau Giay District, Hanoi
• Time: 19:50
• Movie: Now You See Me: Now You Don't`,
    },
  ];

  const handleOpenModal = (activityId: number) => {
    setSelectedActivity(activityId);
  };

  const handleCloseModal = () => {
    setSelectedActivity(null);
  };

  const currentActivity =
    activities.find((a) => a.id === selectedActivity) || null;

  return (
    <>
      <div className="bg-gradient-to-br from-purple-50 to-rose-50 rounded-2xl p-5 md:p-8 border border-purple-100">
        <div className="mb-6 md:mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
            Date Activities
          </h2>
          <p className="text-sm md:text-base text-gray-600">
            What we'll be doing together
          </p>
        </div>
        <div className="space-y-5 md:space-y-6">
          {activities.map((activity, index) => (
            <div
              key={activity.id}
              className="flex items-center gap-4 md:gap-5 p-5 md:p-6 bg-white/60 rounded-xl border border-purple-100/50 hover:shadow-lg transition-all min-h-[100px]"
            >
              <div
                className={`flex-shrink-0 w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br ${activity.color} rounded-xl flex items-center justify-center shadow-md`}
              >
                <div className="text-white text-xl md:text-2xl">
                  {activity.icon}
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-sm md:text-lg font-semibold text-gray-800 mb-2 md:mb-3 leading-tight">
                  {activity.title}
                </h3>
                <p className="text-xs md:text-base text-gray-600 leading-relaxed">
                  {activity.description}
                </p>
              </div>
              <button
                onClick={() => handleOpenModal(activity.id)}
                className="flex-shrink-0 w-11 h-11 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-gradient-to-br from-purple-400 to-pink-400 hover:from-purple-500 hover:to-pink-500 text-white shadow-md hover:shadow-lg transition-all transform hover:scale-110 active:scale-95"
                aria-label="View details"
              >
                <FaEye className="w-5 h-5 md:w-6 md:h-6" />
              </button>
            </div>
          ))}
        </div>
      </div>

      <ActivityModal
        isOpen={selectedActivity !== null}
        onClose={handleCloseModal}
        activity={currentActivity}
      />
    </>
  );
}
