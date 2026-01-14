
import React from 'react';

export const FeatureSection: React.FC = () => {
  const features = [
    'কোর্স শেষে কারিগরি বোর্ড কর্তৃক সার্টিফিকেট প্রদান।',
    'দূরের ছাত্রদের জন্য আবাসিক ব্যবস্থা।',
    'প্রতিষ্ঠানটি অত্যন্ত সুন্দর মনোরম পরিবেশে অবস্থিত।',
    'দুর্বল শিক্ষার্থীদের জন্য আলাদাভাবে পাঠদানের ব্যবস্থা।',
    'আধুনিক সরঞ্জামের মাধ্যমে আন্তর্জাতিক মানের শিক্ষক দ্বারা প্র্যাকটিক্যাল।',
    'চাকরিজীবীদের জন্য শুক্র ও শনিবার বিশেষ ক্লাস।',
    'ড্রাইভিং কোর্স শেষে লাইসেন্স প্রাপ্তিতে সার্বিক সহযোগিতা।',
    'প্রতিষ্ঠানটি সার্বক্ষণিক সিসি ক্যামেরা দ্বারা নিয়ন্ত্রিত।'
  ];

  const onlineServices = [
    'অনলাইনে বিভিন্ন কলেজ বিশ্ববিদ্যালয়ে ভর্তির আবেদন।',
    'সকল প্রকার চাকরির আবেদন ও সিভি তৈরি।',
    'টিন সার্টিফিকেট বের করা হয়।',
    'ইন্ডিয়ান ভিসার আবেদন ও প্রসেসিং।',
    'পাসপোর্ট এর জন্য আবেদন ও প্রসেসিং।',
    'ড্রাইভিং লাইসেন্সের জন্য আবেদন ও প্রসেসিং।'
  ];

  return (
    <div className="grid md:grid-cols-2 gap-12">
      <section id="features" className="scroll-mt-20">
        <h3 className="relative inline-block bg-[#0097e6] text-white px-8 py-2 rounded-r-2xl mb-6 text-xl font-semibold ribbon-title">
          প্রতিষ্ঠানের বৈশিষ্ট্য সমূহ
        </h3>
        <ul className="space-y-3">
          {features.map((item, idx) => (
            <li key={idx} className="flex items-start pb-2 border-b border-dashed border-gray-300">
              <i className="fas fa-check-circle text-[#0097e6] mt-1 mr-3"></i>
              <span className="text-lg">{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <section id="services" className="scroll-mt-20">
        <h3 className="relative inline-block bg-[#0097e6] text-white px-8 py-2 rounded-r-2xl mb-6 text-xl font-semibold ribbon-title">
          আমাদের অনলাইন সেবা সমূহ
        </h3>
        <ul className="space-y-3">
          {onlineServices.map((item, idx) => (
            <li key={idx} className="flex items-start pb-2 border-b border-dashed border-gray-300">
              <i className="fas fa-globe text-[#0097e6] mt-1 mr-3"></i>
              <span className="text-lg">{item}</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};
