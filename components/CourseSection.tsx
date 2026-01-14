
import React from 'react';

export const CourseSection: React.FC = () => {
  const longCourses = [
    'কম্পিউটার অফিস অ্যাপ্লিকেশন',
    'মোটর ড্রাইভিং কাম অটোমেকানিক্স',
    'ইলেকট্রিক্যাল হাউজওয়্যারিং',
    'প্লাম্বিং এন্ড পাইপ ফিটিং',
    'মেশিনারিজ এন্ড রড বাইন্ডিং'
  ];

  const shortCourses = [
    { name: 'মোটর ড্রাইভিং (হালকা)', duration: '৪৫ দিন' },
    { name: 'বুটিক', duration: '২ মাস' },
    { name: 'কম্পিউটার অফিস অ্যাপ্লিকেশন', duration: '৩ মাস' },
    { name: 'বেসিক গ্রাফিক্স ডিজাইন', duration: '৩ মাস' }
  ];

  return (
    <section id="courses" className="grid md:grid-2 lg:grid-cols-2 gap-8">
      <div className="bg-blue-50/50 p-6 rounded-xl border-l-8 border-[#0097e6] shadow-sm">
        <h3 className="relative inline-block bg-[#0097e6] text-white px-8 py-2 rounded-r-2xl mb-6 text-xl font-semibold ribbon-title">
          ৬ মাস (৩৬০ ঘন্টা) মেয়াদী কোর্স
        </h3>
        <ul className="space-y-3">
          {longCourses.map((course, idx) => (
            <li key={idx} className="flex items-start pb-2 border-b border-dashed border-gray-300 group">
              <i className="fas fa-caret-right text-[#0097e6] mt-1 mr-3 group-hover:translate-x-1 transition-transform"></i>
              <span className="text-lg">{course}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-blue-50/50 p-6 rounded-xl border-l-8 border-[#0097e6] shadow-sm">
        <h3 className="relative inline-block bg-[#0097e6] text-white px-8 py-2 rounded-r-2xl mb-6 text-xl font-semibold ribbon-title">
          স্বল্প মেয়াদী কোর্স সমূহ
        </h3>
        <ul className="space-y-3">
          {shortCourses.map((course, idx) => (
            <li key={idx} className="flex items-start pb-2 border-b border-dashed border-gray-300 group">
              <i className="fas fa-caret-right text-[#0097e6] mt-1 mr-3 group-hover:translate-x-1 transition-transform"></i>
              <div className="text-lg flex justify-between w-full">
                <span>{course.name}</span>
                <span className="text-blue-600 font-bold ml-2">({course.duration})</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
