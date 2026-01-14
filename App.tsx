
import React, { useState, useEffect } from 'react';
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { CourseSection } from './components/CourseSection';
import { FeatureSection } from './components/FeatureSection';
import { StaffSection } from './components/StaffSection';
import { AdmissionForm } from './components/AdmissionForm';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('home');

  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'courses', 'features', 'services', 'teachers', 'admission', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveTab(section);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="flex min-h-screen">
      {/* Mobile Toggle */}
      <button 
        onClick={toggleSidebar}
        className="fixed top-4 left-4 z-[1001] bg-[#192a56] text-white p-2 rounded-md md:hidden"
      >
        <i className={`fas ${isSidebarOpen ? 'fa-times' : 'fa-bars'}`}></i>
      </button>

      {/* Sidebar */}
      <Sidebar 
        isOpen={isSidebarOpen} 
        activeTab={activeTab} 
        closeSidebar={() => setSidebarOpen(false)} 
      />

      {/* Main Content */}
      <main className={`flex-1 transition-all duration-300 ${isSidebarOpen ? 'ml-0' : 'md:ml-64'} bg-white`}>
        <Header />
        
        <div className="max-w-6xl mx-auto px-4 py-10 space-y-20">
          <CourseSection />
          <FeatureSection />
          <StaffSection />
          <AdmissionForm />
        </div>

        <Footer />
      </main>
    </div>
  );
};

export default App;
