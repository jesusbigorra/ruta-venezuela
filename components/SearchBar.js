"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SearchBar() {
  const [value, setValue] = useState("");
  const router = useRouter();

  function handleSubmit(e) {
    e.preventDefault();
    if (value.trim()) {
      router.push(`/explora?q=${encodeURIComponent(value.trim())}`);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="-mt-6 mx-4 flex items-center gap-2 rounded-2xl bg-white px-4 py-3 text-sm text-muted shadow-lg shadow-black/10 md:mx-0 md:mt-0 md:max-w-md"
    >
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
        <circle cx="11" cy="11" r="7" stroke="#7A8794" strokeWidth="2" />
        <path d="M20 20l-4-4" stroke="#7A8794" strokeWidth="2" strokeLinecap="round" />
      </svg>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="¿qué destino quieres descubrir?"
        className="w-full bg-transparent outline-none placeholder:text-muted"
      />
    </form>
  );
}
