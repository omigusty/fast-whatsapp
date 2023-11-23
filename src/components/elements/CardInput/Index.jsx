import React from "react";
import Header from "./Header";
import Form from "./Form";

export default function CardInput() {
  return (
    <div className="bg-white px-6 py-12 border border-gray-100 sm:rounded-xl sm:px-12">
      <Header
        heading="Fast WhatsApp"
        subHeading="Chat kontak WhatsApp dengan cepat tanpa simpan nomor terlebih dahulu"
      />
      <Form />
    </div>
  );
}
