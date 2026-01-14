
import React from 'react';

export const Header: React.FC = () => {
  return (
    <header id="home" className="relative bg-gradient-to-br from-[#0097e6] to-[#00a8ff] text-white text-center pt-16 pb-24 overflow-hidden header-curve">
      <div className="relative z-10 px-4">
        <p className="text-lg mb-2 animate-pulse">বিসমিল্লাহির রাহমানির রাহিম</p>
        <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">গুজিয়া টেকনিক্যাল ট্রেনিং সেন্টার</h1>
        <p className="text-xl opacity-90 mb-6">কারিগরি শিক্ষা নিলে দেশ-বিদেশে কর্ম মিলে...</p>
        <a 
          href="https://maps.app.goo.gl/S12E24DVvgh8sC569" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center bg-black/20 px-6 py-2 rounded-full backdrop-blur-sm border border-white/20 hover:bg-black/30 transition-all"
        >
          <i className="fas fa-map-marker-alt mr-2 text-yellow-300"></i>
          <span className="text-lg">২৮এক্সএফ+এক্স৯৮, গুজিয়া, শিবগঞ্জ, বগুড়া</span>
        </a>
      </div>
    </header>
  );
};
