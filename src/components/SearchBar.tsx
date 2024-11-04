import React from 'react';
import { Focus, Paperclip, ArrowRight } from 'lucide-react';

export default function SearchBar() {
  return (
    <div className="w-full max-w-3xl">
      <div className="relative">
        <input
          type="text"
          placeholder="Search anything..."
          className="w-full bg-[#2D3135] text-white rounded-xl py-4 px-6 outline-none"
        />
        <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-2">
          <button className="p-2 text-gray-400 hover:text-white">
            <Focus size={20} />
          </button>
          <button className="p-2 text-gray-400 hover:text-white">
            <Paperclip size={20} />
          </button>
          <div className="h-6 w-px bg-gray-700 mx-1" />
          <button className="bg-[#424242] text-white rounded-lg px-3 py-1.5 text-sm flex items-center gap-2">
            Pro
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}