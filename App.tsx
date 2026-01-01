
import React from 'react';
import Navbar from './components/Navbar';
import AIChat from './components/AIChat';
import { FEATURES, PRODUCTS } from './constants';

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/seed/tigerbeer-hero/1920/1080?grayscale" 
            className="w-full h-full object-cover opacity-30 scale-105"
            alt="Tiger Background"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#001a3d]/60 via-[#001a3d]/80 to-[#001a3d]"></div>
        </div>
        
        <div className="relative z-10 text-center px-4">
          <h1 className="text-6xl md:text-9xl font-black italic uppercase leading-none tracking-tighter mb-4 animate-pulse">
            TIGER <span className="text-[#ff6600]">BEER</span>
          </h1>
          <p className="text-xl md:text-3xl font-bold uppercase tracking-[0.3em] mb-8 text-gray-300">
            Đánh Thức Bản Lĩnh
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a href="#features" className="bg-[#ff6600] hover:bg-orange-600 text-white font-black py-4 px-10 rounded-full text-lg transition-all uppercase italic">Khám Phá Tính Năng</a>
            <a href="#ai-assistant" className="border-2 border-[#ff6600] text-[#ff6600] hover:bg-[#ff6600] hover:text-white font-black py-4 px-10 rounded-full text-lg transition-all uppercase italic">Hỏi Đại Sứ AI</a>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-8 h-8 text-[#ff6600]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7-7-7" />
          </svg>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-white text-[#001a3d]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black italic uppercase mb-4">Đặc Điểm <span className="text-[#ff6600]">Nổi Bật</span></h2>
            <div className="w-24 h-2 bg-[#ff6600] mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {FEATURES.map((feature, idx) => (
              <div key={idx} className="p-8 rounded-3xl bg-gray-50 border border-gray-100 hover:shadow-2xl transition-all hover:-translate-y-2 group">
                <div className="text-5xl mb-6 group-hover:scale-110 transition-transform">{feature.icon}</div>
                <h3 className="text-xl font-black uppercase italic mb-4 text-[#0033a0]">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed font-medium">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Parallax Quote */}
      <section className="py-32 relative overflow-hidden bg-[#ff6600]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-black italic text-white uppercase mb-4">
            "Không Chỉ Là Bia, Đó Là Tinh Thần Đánh Thức Bản Lĩnh Bên Trong Bạn."
          </h2>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-24 bg-[#001a3d]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black italic uppercase mb-4 text-white">Dòng <span className="text-[#ff6600]">Sản Phẩm</span></h2>
            <p className="text-gray-400 italic">Lựa chọn hoàn hảo cho mọi cuộc vui.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12">
            {PRODUCTS.map((product, idx) => (
              <div key={idx} className="relative group rounded-3xl overflow-hidden bg-[#00285a]">
                <div className="h-[400px] overflow-hidden">
                  <img 
                    src={product.image} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-80"
                    alt={product.name}
                  />
                </div>
                <div className="p-8">
                  <span className="text-[#ff6600] font-black uppercase text-sm tracking-widest">{product.tagline}</span>
                  <h3 className="text-3xl font-black italic uppercase text-white my-2">{product.name}</h3>
                  <p className="text-gray-400 mb-6">{product.description}</p>
                  <button className="w-full py-3 border border-white/20 hover:bg-[#ff6600] hover:border-[#ff6600] text-white font-bold transition-all rounded-xl uppercase italic">Tìm Hiểu Thêm</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Assistant Section */}
      <AIChat />

      {/* Footer */}
      <footer className="py-12 bg-black text-white border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-[#ff6600] rounded-full flex items-center justify-center font-black text-xl italic">T</div>
              <span className="text-3xl font-black tracking-tighter uppercase italic">Tiger Beer</span>
            </div>
            <div className="text-center md:text-right">
              <p className="font-bold text-[#ff6600] mb-2 uppercase tracking-widest">Thưởng Thức Có Trách Nhiệm</p>
              <p className="text-gray-500 text-sm italic">Đã uống rượu bia, không lái xe. Chỉ dành cho người trên 18 tuổi.</p>
              <p className="text-gray-600 text-[10px] mt-4 uppercase">© 2024 Tiger Beer Showcase. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
