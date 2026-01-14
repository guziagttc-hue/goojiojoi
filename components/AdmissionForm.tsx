
import React, { useState } from 'react';

export const AdmissionForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    father_name: '',
    mobile: '',
    age: '',
    education: '',
    course: 'কম্পিউটার অফিস অ্যাপ্লিকেশন',
    address: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="admission">
      <div className="text-center mb-8">
        <h3 className="relative inline-block bg-[#0097e6] text-white px-12 py-3 rounded-full text-2xl font-bold shadow-lg">
          অনলাইন ভর্তি ফরম
        </h3>
      </div>

      <div className="bg-white p-8 rounded-2xl shadow-xl border-t-8 border-[#0097e6]">
        <form action="mailto:guziagttc@gmail.com" method="post" encType="text/plain" className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="block text-lg font-semibold text-gray-700">শিক্ষার্থীর নাম:</label>
              <input 
                type="text" 
                name="name" 
                required 
                placeholder="পূর্ণ নাম লিখুন"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#0097e6] outline-none transition-all"
                onChange={handleChange}
              />
            </div>
            <div className="space-y-2">
              <label className="block text-lg font-semibold text-gray-700">পিতার নাম:</label>
              <input 
                type="text" 
                name="father_name" 
                required 
                placeholder="পিতার নাম"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#0097e6] outline-none transition-all"
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="block text-lg font-semibold text-gray-700">মোবাইল নাম্বার:</label>
              <input 
                type="tel" 
                name="mobile" 
                required 
                placeholder="017XXXXXXXX"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#0097e6] outline-none transition-all"
                onChange={handleChange}
              />
            </div>
            <div className="space-y-2">
              <label className="block text-lg font-semibold text-gray-700">বয়স (নূন্যতম ১৮):</label>
              <input 
                type="number" 
                name="age" 
                required 
                min="18"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#0097e6] outline-none transition-all"
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="block text-lg font-semibold text-gray-700">শিক্ষাগত যোগ্যতা (নূন্যতম ৮ম শ্রেণি):</label>
            <input 
              type="text" 
              name="education" 
              placeholder="যেমন: SSC / HSC / Class 8"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#0097e6] outline-none transition-all"
              onChange={handleChange}
            />
          </div>

          <div className="space-y-2">
            <label className="block text-lg font-semibold text-gray-700">কোর্স সিলেক্ট করুন:</label>
            <select 
              name="course"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#0097e6] outline-none bg-white transition-all cursor-pointer"
              onChange={handleChange}
              value={formData.course}
            >
              <option>কম্পিউটার অফিস অ্যাপ্লিকেশন</option>
              <option>ড্রাইভিং কাম অটোমেকানিক্স</option>
              <option>ইলেকট্রিক্যাল হাউজওয়্যারিং</option>
              <option>গ্রাফিক্স ডিজাইন</option>
              <option>বুটিক</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="block text-lg font-semibold text-gray-700">ঠিকানা:</label>
            <textarea 
              name="address" 
              rows={3} 
              placeholder="গ্রাম, ডাকঘর, থানা, জেলা..."
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#0097e6] outline-none transition-all"
              onChange={handleChange}
            ></textarea>
          </div>

          <button 
            type="submit" 
            className="w-full bg-[#192a56] hover:bg-[#0097e6] text-white text-xl font-bold py-4 rounded-xl shadow-lg transform active:scale-95 transition-all duration-300 flex items-center justify-center gap-3"
          >
            <i className="fas fa-paper-plane"></i>
            আবেদন জমা দিন
          </button>
        </form>
      </div>
    </section>
  );
};
