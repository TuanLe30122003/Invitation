import InvitationCard from "./components/InvitationCard";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50 flex items-center justify-center md:p-4">
      {/* Invitation Card */}
      <div className="relative w-full max-w-2xl">
        {/* Decorative border */}
        <div className="absolute inset-0 bg-gradient-to-r from-rose-200 via-pink-200 to-purple-200 rounded-3xl blur-xl opacity-50 -z-10"></div>

        <InvitationCard />

        {/* Decorative elements */}
        <div className="absolute -top-4 -right-4 w-24 h-24 bg-rose-200/30 rounded-full blur-2xl -z-10"></div>
        <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-200/30 rounded-full blur-2xl -z-10"></div>
      </div>
    </div>
  );
}
