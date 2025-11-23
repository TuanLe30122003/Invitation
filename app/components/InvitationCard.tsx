import InvitationHeader from "./InvitationHeader";
import InvitationText from "./InvitationText";
import DetailsSection from "./DetailsSection";
import DateActivities from "./DateActivities";
import CountdownTimer from "./CountdownTimer";
import InvitationMessage from "./InvitationMessage";
import InvitationFooter from "./InvitationFooter";

export default function InvitationCard() {
  return (
    <div className="relative bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl border border-rose-100/50 overflow-hidden">
      {/* Decorative top pattern */}
      <div className="h-2 bg-gradient-to-r from-rose-400 via-pink-400 to-purple-400"></div>

      <div className="p-8 md:p-12">
        {/* Header Section */}
        <InvitationHeader />

        {/* Main Content */}
        <div className="space-y-6 mb-8">
          <InvitationText />
          <DetailsSection />
          <DateActivities />
          <CountdownTimer />
          <InvitationMessage />
        </div>

        {/* Footer */}
        <InvitationFooter />
      </div>

      {/* Decorative bottom pattern */}
      <div className="h-2 bg-gradient-to-r from-rose-400 via-pink-400 to-purple-400"></div>
    </div>
  );
}
