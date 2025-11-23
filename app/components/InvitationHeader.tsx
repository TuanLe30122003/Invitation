export default function InvitationHeader() {
  return (
    <div className="text-center mb-8">
      <div className="inline-block mb-4">
        <div className="w-20 h-20 mx-auto bg-gradient-to-br from-rose-400 to-pink-500 rounded-full flex items-center justify-center shadow-lg">
          <svg
            className="w-10 h-10 text-white"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        </div>
      </div>
      <h1
        className="text-5xl md:text-7xl font-normal bg-gradient-to-r from-rose-600 via-pink-600 to-purple-600 bg-clip-text text-transparent mb-3"
        style={{ fontFamily: "var(--font-great-vibes)" }}
      >
        Invitation
      </h1>
      <div className="w-24 h-1 bg-gradient-to-r from-rose-400 via-pink-400 to-purple-400 mx-auto rounded-full"></div>
    </div>
  );
}
