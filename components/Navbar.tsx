
import React, { useState } from 'react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-[#001a3d]/90 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center gap-2">
              <div className="w-10 h-10 bg-[#ff6600] rounded-full flex items-center justify-center font-black text-white italic">T</div>
              <span className="text-2xl font-black tracking-tighter text-white uppercase italic">Tiger Beer</span>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8 uppercase text-sm font-bold tracking-widest">
              <a href="#hero" className="hover:text-[#ff6600] transition-colors">Trang chủ</a>
              <a href="#features" className="hover:text-[#ff6600] transition-colors">Tính năng</a>
              <a href="#products" className="hover:text-[#ff6600] transition-colors">Sản phẩm</a>
              <a href="#ai-assistant" className="bg-[#ff6600] px-4 py-2 rounded-full hover:bg-orange-600 transition-colors">Hỏi Đại Sứ AI</a>
            </div>
          </div>
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-white/10"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />}
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-[#001a3d] border-b border-white/10">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#hero" className="block px-3 py-2 text-white font-bold">TRANG CHỦ</a>
            <a href="#features" className="block px-3 py-2 text-white font-bold">TÍNH NĂNG</a>
            <a href="#products" className="block px-3 py-2 text-white font-bold">SẢN PHẨM</a>
            <a href="#ai-assistant" className="block px-3 py-2 text-[#ff6600] font-bold">HỎI ĐẠI SỨ AI</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
