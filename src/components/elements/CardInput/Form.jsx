import React, { useState } from "react";
import Button from "../Button/Index";
// import parsePhoneNumber from "libphonenumber-js";

export default function Form() {
  const [inputNumber, setInputNumber] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      //  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
      const externalLink = `https://wa.me/+62${inputNumber}`;
      window.location.href = externalLink;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form className="space-y-3" onSubmit={handleSubmit}>
      <div>
        <label
          htmlFor="nomor-telepon"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          Nomor Telepon
        </label>
        <div className="relative mt-2 rounded-full">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <span className="text-gray-500 sm:text-sm">+62</span>
          </div>
          <input
            type="tel"
            min={0}
            onChange={(e) => {
              setInputNumber(e.target.value);
            }}
            id="nomor-telepon"
            className="block w-full rounded-full border-0 py-1.5 pl-10 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-950 sm:text-sm sm:leading-6"
            autoComplete="off"
            required
          />
        </div>
      </div>
      <div>
        <Button type="submit" text="Kirim Pesan" />
      </div>
    </form>
  );
}
