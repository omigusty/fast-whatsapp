import React, { useState } from "react";

export default function App() {
  const [nomorTelepon, setNomorTelepon] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      //  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
      const externalLink = `https://wa.me/+62${nomorTelepon}`;
      window.location.href = externalLink;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="dark:bg-slate-900 bg-gray-100 flex h-screen items-center">
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
                        class="pl-10 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                        required
                        autoComplete="off"
                      />
                      <div class="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-3 peer-disabled:opacity-50 peer-disabled:pointer-events-none">
                        <p className="text-sm ">+62</p>
                      </div>
                    </div>
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
