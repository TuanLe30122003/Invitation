export default function InvitationFooter() {
  return (
    <div className="border-t border-rose-100 pt-6 flex flex-col items-center gap-4">
      <div className="text-center">
        <p className="text-sm text-gray-500">
          Please confirm your attendance (with me ^^)
        </p>
        <p className="text-sm font-medium text-gray-700">before Nov 25, 2025</p>
      </div>
      <div className="text-center pt-2 border-t border-rose-100/50 w-full">
        <p className="text-xs text-gray-400">
          Created by{" "}
          <span className="font-medium text-gray-500">QuangTuan</span>
        </p>
        <p className="text-xs text-gray-400">
          <a
            href="mailto:TuanLe30122003@gmail.com"
            className="text-gray-500 hover:text-rose-500 transition-colors"
          >
            TuanLe30122003@gmail.com
          </a>
        </p>
      </div>
    </div>
  );
}
