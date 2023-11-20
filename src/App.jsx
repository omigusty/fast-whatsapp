import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function App() {
  const [nomorTelepon, setNomorTelepon] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      // const externalLink = `https://api.whatsapp.com/send/?phone=+62${nomorTelepon}&text&type=phone_number&app_absent=0`;
      const externalLink = `https://wa.me/+62${nomorTelepon}`;
      window.location.href = externalLink;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="dark:bg-slate-900 bg-gray-100 flex h-screen items-center py-16">
      <main class="w-full max-w-md mx-auto p-6">
        <div class="mt-7 bg-white border border-gray-200 rounded-xl shadow-sm dark:bg-gray-800 dark:border-gray-700">
          <div class="p-4 sm:p-7">
            <div class="text-center">
              <h1 class="block text-2xl font-bold text-gray-800 dark:text-white">
                Fast WhatsApp
              </h1>
              <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">
                Chat kontak WhatsApp dengan cepat tanpa simpan nomor terlebih
                dahulu
              </p>
            </div>

            <div class="mt-5">
              <form onSubmit={handleSubmit}>
                <div class="grid gap-y-4">
                  <div>
                    <label
                      for="nomorTlpn"
                      class="block text-sm mb-2 dark:text-white"
                    >
                      Nomor Telepon
                    </label>
                    <div class="relative">
                      <input
                        type="number"
                        id="nomorTlpn"
                        onChange={(e) => setNomorTelepon(e.target.value)}
                        name="nomorTlpn"
                        class="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                        required
                        autoComplete="off"
                      />
                      <div class="hidden absolute inset-y-0 end-0 flex items-center pointer-events-none pe-3">
                        <svg
                          class="h-5 w-5 text-red-500"
                          width="16"
                          height="16"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                          aria-hidden="true"
                        >
                          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                        </svg>
                      </div>
                    </div>
                    <p
                      class="hidden text-xs text-red-600 mt-2"
                      id="email-error"
                    >
                      Please include a valid email address so we can get back to
                      you
                    </p>
                  </div>

                  <button
                    type="submit"
                    class="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                  >
                    Kirim Pesan
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
