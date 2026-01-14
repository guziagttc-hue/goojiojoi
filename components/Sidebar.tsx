
import React from 'react';

interface SidebarProps {
  isOpen: boolean;
  activeTab: string;
  closeSidebar: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ isOpen, activeTab, closeSidebar }) => {
  const menuItems = [
    { id: 'home', label: 'হোম', icon: 'fa-home' },
    { id: 'courses', label: 'কোর্সসমূহ', icon: 'fa-book' },
    { id: 'features', label: 'বৈশিষ্ট্যসমূহ', icon: 'fa-star' },
    { id: 'services', label: 'অনলাইন সেবা', icon: 'fa-globe' },
    { id: 'teachers', label: 'শিক্ষকবৃন্দ', icon: 'fa-chalkboard-teacher' },
    { id: 'admission', label: 'ভর্তি ফরম', icon: 'fa-edit' },
    { id: 'contact', label: 'যোগাযোগ', icon: 'fa-phone' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    // For mobile, close the sidebar after clicking
    closeSidebar();
    
    // Smooth scroll implementation
    const element = document.getElementById(id);
    if (element) {
      e.preventDefault();
      const offset = 80; // offset for better positioning
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      
      // Update URL hash without jumping
      window.history.pushState(null, '', `#${id}`);
    }
  };

  return (
    <nav className={`
      fixed left-0 top-0 h-full w-64 bg-[#192a56] text-white z-[1000] p-6 transition-transform duration-300 overflow-y-auto shadow-2xl
      ${isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
    `}>
      <div className="text-center mb-10 pb-6 border-b border-white/20">
        <div className="w-20 h-20 bg-white rounded-full mx-auto mb-3 flex items-center justify-center border-4 border-[#0097e6] text-[#0097e6] shadow-inner">
          <i className="fas fa-cog fa-spin text-4xl"></i>
        </div>
        <h3 className="text-xl font-bold tracking-wider">GTTC</h3>
      </div>

      <ul className="space-y-2">
        {menuItems.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              onClick={(e) => handleLinkClick(e, item.id)}
              className={`
                flex items-center p-3 rounded-lg transition-all duration-300 group
                ${activeTab === item.id ? 'bg-[#0097e6] text-white translate-x-2 shadow-lg' : 'text-gray-300 hover:bg-[#0097e6]/20 hover:text-white hover:translate-x-1'}
              `}
            >
              <i className={`fas ${item.icon} w-6 mr-3 text-center ${activeTab === item.id ? 'text-white' : 'text-[#0097e6] group-hover:text-white'}`}></i>
              <span className="text-lg font-medium">{item.label}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
