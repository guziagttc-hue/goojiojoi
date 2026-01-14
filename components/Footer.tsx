
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-[#192a56] text-white py-12 px-4 mt-20">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <h2 className="text-3xl font-bold border-b-2 border-white/20 pb-4">গুজিয়া টেকনিক্যাল ট্রেনিং সেন্টার</h2>
        
        <div className="flex flex-col md:flex-row justify-center gap-8 text-xl">
          <div className="space-y-4">
            <a 
              href="https://maps.app.goo.gl/S12E24DVvgh8sC569" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 hover:text-[#0097e6] transition-colors"
            >
              <i className="fas fa-map-marker-alt text-[#0097e6]"></i>
              <span>স্থান: ২৮এক্সএফ+এক্স৯৮, গুজিয়া, শিবগঞ্জ, বগুড়া</span>
            </a>
            <a 
              href="mailto:guziagttc@gmail.com"
              className="flex items-center justify-center gap-3 hover:text-[#0097e6] transition-colors"
            >
              <i className="fas fa-envelope text-[#0097e6]"></i>
              guziagttc@gmail.com
            </a>
          </div>
          <div className="space-y-4">
            <a 
              href="tel:+8801733093962"
              className="flex items-center justify-center gap-3 font-mono hover:text-[#0097e6] transition-colors"
            >
              <i className="fas fa-phone-alt text-[#0097e6]"></i>
              ০১৭৩৩-০৯৩৯৬২
            </a>
            <a 
              href="tel:+8801723128662"
              className="flex items-center justify-center gap-3 font-mono hover:text-[#0097e6] transition-colors"
            >
              <i className="fas fa-phone-alt text-[#0097e6]"></i>
              ০১৭২৩-১২৮৬৬২
            </a>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 opacity-70">
          <p className="text-sm">
            © ২০২৪ গুজিয়া টেকনিক্যাল ট্রেনিং সেন্টার | সর্বস্বত্ব সংরক্ষিত
          </p>
          <p className="text-xs mt-2">
            ডিজাইন এবং তৈরি: <span className="font-semibold">IM Softwork</span> (Md Esahak Ali) | 
            <a href="tel:+8801792157184" className="hover:text-[#0097e6] ml-1 transition-colors">
              <i className="fas fa-phone-alt text-[10px] mr-1"></i>
              ০১৭৯২-১৫৭১৮৪
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};
