import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const Refer = () => {
  const navigate = useNavigate();
  const userId = localStorage.getItem("rp_userId") || "UU518475254";

  // ✅ Corrected
  const referralLink = `https://redpay-official-eight-2026.vercel.app/?ref=${userId}`;

  const shareMessages = [
    { label: "🔗 Share (Quick & Casual)", variant: "red" as const },
    { label: "🔗 Share (Friendly Pitch)", variant: "dark" as const },
    { label: "🔗 Share (Short & Urgent)", variant: "dark" as const },
  ];

  const handleShare = async () => {
    const message = `Join RedPay and earn ₦5,000 instantly! Sign up using my referral link: ${referralLink}`;

    if (navigator.share) {
      try {
        await navigator.share({
          title: "RedPay Referral",
          text: message,
          url: referralLink,
        });
      } catch {
        // Share cancelled
      }
    } else {
      await navigator.clipboard.writeText(referralLink);
      toast.success("Referral link copied to clipboard!");
    }
  };

  // ...keep the rest of your file exactly as it is...
};

export default Refer;
