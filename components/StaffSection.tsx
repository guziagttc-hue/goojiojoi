
import React from 'react';

const TeacherCard: React.FC<{ name: string; role: string; img?: string; icon?: string }> = ({ name, role, img, icon }) => (
  <div className="bg-white border border-gray-200 rounded-xl p-6 text-center shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group border-b-4 border-b-[#0097e6]">
    <div className="w-24 h-24 bg-gray-100 rounded-full mx-auto mb-4 border-4 border-[#0097e6] overflow-hidden flex items-center justify-center">
      {img ? (
        <img src={img} alt={name} className="w-full h-full object-cover" />
      ) : (
        <i className={`fas ${icon || 'fa-user-tie'} text-4xl text-gray-400`}></i>
      )}
    </div>
    <h4 className="text-xl font-bold text-gray-800 mb-1">{name}</h4>
    <p className="text-[#0097e6] font-semibold">{role}</p>
  </div>
);

export const StaffSection: React.FC = () => {
  return (
    <section id="teachers" className="space-y-12">
      <div className="text-center">
        <h3 className="relative inline-block bg-[#0097e6] text-white px-12 py-3 rounded-full text-2xl font-bold shadow-lg">
          আমাদের শিক্ষক ও পরিচালনা পর্ষদ
        </h3>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <TeacherCard name="মো: মশিফুকর রহমান (জিহাদ)" role="অধ্যক্ষ" icon="fa-user-graduate" />
        <TeacherCard name="[নাম]" role="পরিচালক" icon="fa-id-card" />
      </div>

      <div className="space-y-6">
        <h4 className="text-center text-2xl font-bold text-[#192a56] border-b-2 border-blue-200 pb-2">কম্পিউটার বিভাগ</h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <TeacherCard name="কম্পিউটার শিক্ষক ১" role="সিনিয়র ইন্সট্রাক্টর" />
          <TeacherCard name="কম্পিউটার শিক্ষক ২" role="ইন্সট্রাক্টর" />
          <TeacherCard name="কম্পিউটার শিক্ষক ৩" role="ইন্সট্রাক্টর" />
        </div>
      </div>

      <div className="space-y-6">
        <h4 className="text-center text-2xl font-bold text-[#192a56] border-b-2 border-blue-200 pb-2">অন্যান্য স্টাফ</h4>
        <div className="grid md:grid-cols-2 gap-6">
          <TeacherCard name="ড্রাইভিং ইন্সট্রাক্টর" role="১ জন" icon="fa-car" />
          <TeacherCard name="সহায়ক কর্মী/আয়া" role="১ জন" icon="fa-hands-helping" />
        </div>
      </div>
    </section>
  );
};
