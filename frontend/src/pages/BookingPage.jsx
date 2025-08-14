import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetContent,
  SheetHeader,
} from "@/components/ui/sheet";
import AppointmentPage from "./AppointmentPage";

const BookingPage = () => {
  const isLogin = true;
  const [open, setOpen] = useState(false); // phone number sheet
  const [otpOpen, setOtpOpen] = useState(false); // OTP sheet
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [whatsappOptIn, setWhatsappOptIn] = useState(false);

  useEffect(() => {
    if (!isLogin) {
      setOpen(true); // auto-open phone input sheet
    }
  }, [isLogin]);

  const handleContinue = () => {
    if (!phone || phone.length < 10) {
      alert("Please enter a valid phone number");
      return;
    }
    setOpen(false);
    setOtpOpen(true); 
  };

  const handleVerifyOtp = () => {
    if (!otp || otp.length < 4) {
      alert("Please enter a valid OTP");
      return;
    }
    console.log("OTP Verified:", otp);
    setOtpOpen(false);
    // Proceed to booking
  };

  return (
    <>
      {isLogin ? (
        <div><AppointmentPage /></div>
      ) : (
        <>
          {/* Phone Input Sheet */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetContent side="right" className="p-6 max-h-[100vh] overflow-auto">
              <button
                onClick={() => setOpen(false)}
                className="text-gray-600 mb-4 flex items-center gap-1"
              >
                ← Back
              </button>
              <SheetHeader>
                <h2 className="text-2xl font-bold mb-6">Sign In</h2>
              </SheetHeader>
              <Label className="block text-sm font-medium text-gray-700 mb-1">
                Phone Number
              </Label>
              <div className="flex items-center border border-gray-300 rounded-lg px-3 mb-2">
                <span className="text-gray-700 mr-2">+91</span>
                <Input
                  type="tel"
                  className="border-0 outline-none flex-1"
                  placeholder="Enter phone number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <p className="text-sm text-gray-500 mb-4">
                OTP will be sent to this number by SMS
              </p>
              <label className="flex items-start gap-2 mb-4">
                <input
                  type="checkbox"
                  checked={whatsappOptIn}
                  onChange={(e) => setWhatsappOptIn(e.target.checked)}
                />
                <span className="text-sm text-gray-700">
                  Share health tips, appointment details and offers with me on WhatsApp
                </span>
              </label>
              <p className="text-xs text-gray-500 mb-6">
                By clicking Continue, you agree to Apollo 24|7’s{" "}
                <a href="#" className="text-blue-600 underline">Privacy Policy</a> &{" "}
                <a href="#" className="text-blue-600 underline">Terms and Conditions</a>
              </p>
              <Button
                className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                onClick={handleContinue}
              >
                Continue
              </Button>
            </SheetContent>
          </Sheet>

          {/* OTP Sheet */}
          <Sheet open={otpOpen} onOpenChange={setOtpOpen}>
            <SheetContent side="right" className="p-6 max-h-[100vh] overflow-auto">
              <button
                onClick={() => {
                  setOtpOpen(false);
                  setOpen(true);
                }}
                className="text-gray-600 mb-4 flex items-center gap-1"
              >
                ← Back
              </button>
              <SheetHeader>
                <h2 className="text-2xl font-bold mb-6">Enter OTP</h2>
              </SheetHeader>
              <p className="mb-4 text-sm text-gray-600">
                Please enter the OTP sent to {phone}
              </p>
              <Input
                type="text"
                maxLength={6}
                placeholder="Enter OTP"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                className="mb-4"
              />
              <Button
                className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                onClick={handleVerifyOtp}
              >
                Verify
              </Button>
              <p
                onClick={() => console.log("Resend OTP")}
                className="text-blue-600 text-sm mt-4 cursor-pointer"
              >
                Resend OTP
              </p>
            </SheetContent>
          </Sheet>
        </>
      )}
    </>
  );
};

export default BookingPage;
