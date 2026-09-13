interface DemoSuccessProps {
  setSubmitted: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function DemoSuccess({ setSubmitted }: DemoSuccessProps) {
  return (
    <div className="py-16 text-center">
      <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-orange-50 text-2xl text-[#f97316]">
        ✓
      </div>

      <h3 className="mt-5 text-2xl font-bold text-[#18395b]">
        Demo Request Received
      </h3>

      <p className="mt-3 text-slate-600">
        Thank you. Our team will contact you shortly.
      </p>

      {/* Back Button */}
      <button
        type="button"
        onClick={() => {
          localStorage.removeItem("formData");
          setSubmitted(false);
        }}
        className="mt-7 rounded-xl border border-[#18395b] px-6 py-2.5 font-semibold text-[#18395b] transition hover:bg-[#18395b] hover:text-white"
      >
        ← Back
      </button>
    </div>
  );
}
