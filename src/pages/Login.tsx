import React, { useState } from "react";

interface LoginProps {
  onLoginSuccess: (userData: any) => void;
  onGoToRegister: () => void;
}

const Login: React.FC<LoginProps> = ({ onLoginSuccess, onGoToRegister }) => {
  const [formData, setFormData] = useState({ phone: "", password: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setError("");

    try {
      const response = await fetch(
        "https://base360.onrender.com/api/v1/users/login",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        },
      );

      const result = await response.json();

      if (response.ok) {
        onLoginSuccess(result.data);
      } else {
        setStatus("error");
        setError(result.message || "Identity link rejected.");
      }
    } catch (err) {
      setStatus("error");
      setError("Communication hub offline.");
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 relative overflow-hidden flex items-center justify-center p-6 selection:bg-indigo-500/30">
      {/* --- MESH AURORAS (Global Tailwind Config) --- */}
      <div className="absolute top-[-20%] left-[-10%] w-[80%] h-[80%] bg-indigo-900/20 rounded-full blur-[120px] animate-aurora pointer-events-none"></div>
      <div className="absolute bottom-[-20%] right-[-10%] w-[80%] h-[80%] bg-fuchsia-900/10 rounded-full blur-[120px] animate-aurora [animation-delay:4s] pointer-events-none"></div>

      {/* --- FLOATING 3D ASSETS --- */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none opacity-40">
        <div className="absolute top-[15%] left-[12%] animate-float-3d text-indigo-400">
          <svg
            className="w-24 h-24 filter drop-shadow-2xl"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="0.5"
              d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
            />
          </svg>
        </div>
        <div className="absolute bottom-[20%] right-[10%] animate-float-3d-slow text-purple-400">
          <svg
            className="w-32 h-32 filter drop-shadow-2xl"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="0.5"
              d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
            />
          </svg>
        </div>
        <div className="absolute top-[60%] left-[5%] animate-float-3d-fast text-blue-400 opacity-30">
          <svg
            className="w-16 h-16"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="0.5"
              d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
            />
          </svg>
        </div>
      </div>

      {/* --- MAIN INTERFACE --- */}
      <div className="max-w-md w-full relative z-10 group">
        {/* Animated Card Outer Glow */}
        <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-blue-500 rounded-[3rem] blur opacity-10 group-hover:opacity-25 transition duration-1000"></div>

        <div className="bg-slate-900/60 backdrop-blur-[60px] rounded-[3rem] border border-white/10 p-10 md:p-12 shadow-[0_40px_100px_-15px_rgba(0,0,0,0.8)] relative overflow-hidden">
          {/* Subtle light overlay */}
          <div className="absolute inset-0 bg-gradient-to-tr from-white/5 via-transparent to-transparent pointer-events-none"></div>

          <div className="text-center mb-10 animate-slide-up stagger-1">
            <div className="relative inline-block mb-8">
              <div className="absolute -inset-6 bg-indigo-500/20 rounded-full blur-2xl animate-pulse"></div>
              <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-[1.8rem] flex items-center justify-center mx-auto shadow-2xl shadow-indigo-500/20 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <span className="text-white text-4xl font-black">N</span>
              </div>
            </div>
            <h2 className="text-3xl font-black text-white tracking-tighter uppercase leading-none">
              Nexus Admin
            </h2>
            <p className="text-slate-500 text-[10px] font-black tracking-[0.3em] uppercase mt-3">
              Auth Protocol Beta 2.0
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="space-y-6 animate-slide-up stagger-2"
          >
            <div className="space-y-2 group/input">
              <label className="text-[10px] font-black text-indigo-400 uppercase tracking-widest ml-2">
                Terminal ID
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-5 flex items-center text-slate-500 group-focus-within/input:text-indigo-400 transition-colors">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                    />
                  </svg>
                </span>
                <input
                  type="tel"
                  required
                  className="w-full pl-14 pr-6 py-5 rounded-[1.5rem] bg-white/[0.03] border border-white/5 focus:bg-white/[0.08] focus:border-indigo-500/50 focus:ring-4 focus:ring-indigo-500/10 transition-all outline-none text-white placeholder:text-slate-700"
                  placeholder="017XXXXXXXX"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                />
              </div>
            </div>

            <div className="space-y-2 group/input">
              <label className="text-[10px] font-black text-indigo-400 uppercase tracking-widest ml-2">
                Access Key
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-5 flex items-center text-slate-500 group-focus-within/input:text-indigo-400 transition-colors">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                </span>
                <input
                  type="password"
                  required
                  className="w-full pl-14 pr-6 py-5 rounded-[1.5rem] bg-white/[0.03] border border-white/5 focus:bg-white/[0.08] focus:border-indigo-500/50 focus:ring-4 focus:ring-indigo-500/10 transition-all outline-none text-white placeholder:text-slate-700"
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                />
              </div>
            </div>

            {error && (
              <div className="flex items-center gap-3 p-4 bg-rose-500/10 border border-rose-500/20 rounded-2xl text-rose-400 text-xs font-bold animate-shake stagger-3">
                <svg
                  className="w-5 h-5 shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={status === "loading"}
              className="group/btn relative w-full py-5 bg-indigo-600 hover:bg-indigo-500 text-white font-black rounded-2xl transition-all shadow-[0_20px_40px_-10px_rgba(79,70,229,0.4)] active:scale-[0.98] disabled:opacity-50 overflow-hidden animate-slide-up stagger-4"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000"></div>
              {status === "loading" ? (
                <span className="flex items-center justify-center gap-3">
                  <svg
                    className="animate-spin h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  VALIDATING...
                </span>
              ) : (
                <span className="tracking-widest">ENTER INTERFACE</span>
              )}
            </button>
          </form>

          <div className="mt-12 text-center pt-8 border-t border-white/5 animate-slide-up stagger-5">
            <p className="text-slate-500 font-bold text-[10px] tracking-widest uppercase">
              First Deployment?{" "}
              <button
                onClick={onGoToRegister}
                className="text-white hover:text-indigo-400 transition-colors ml-1 underline decoration-indigo-500 decoration-2 underline-offset-8"
              >
                REQUEST NODE
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
