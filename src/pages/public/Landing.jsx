import React from 'react';
import Navbar from '../../components/common/Navbar';
import Button from '../../components/common/Button';
import { ArrowRight, CheckCircle2, Shield, TrendingUp, Users, Lock, Target, Globe, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <div className="min-h-screen bg-bank-light font-sans text-bank-text overflow-x-hidden">
      {/* 1. HERO SECTION (Dark Teal, Luxury, Glassmorphism) */}
      <div className="bg-gradient-to-br from-bank-dark via-[#13322d] to-bank-dark relative w-full pt-4 pb-32 lg:pb-40 rounded-b-[3rem] lg:rounded-b-[5rem] overflow-hidden">
        {/* Decorative background blurs */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-bank-secondary/20 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-[#1a423b]/40 rounded-full blur-[100px] translate-x-1/3"></div>

        <Navbar />

        <div className="max-w-7xl mx-auto px-6 md:px-12 mt-16 md:mt-24 relative z-10 grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Text Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
              <Shield size={16} className="text-bank-secondary" />
              <span className="text-bank-secondary text-xs md:text-sm font-semibold tracking-wide uppercase">Premium Secure Banking</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.15] tracking-tight">
              Elevate Your <br className="hidden md:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-bank-secondary to-[#c2dcd8]">Financial Future.</span>
            </h1>
            
            <p className="text-gray-300 text-lg md:text-xl font-light leading-relaxed max-w-xl">
              Experience the next generation of banking. Empowering your daily life with institutional-grade security, intelligent insights, and unparalleled support.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
              <Link to="/register" className="w-full sm:w-auto">
                <Button variant="primary" className="w-full sm:w-auto gap-2 px-8 py-4 text-lg shadow-[0_0_20px_rgba(136,169,162,0.3)] hover:shadow-[0_0_30px_rgba(136,169,162,0.5)] transform hover:-translate-y-1 transition-all duration-300">
                  Open an Account <ArrowRight size={20} />
                </Button>
              </Link>
              <Link to="/login" className="w-full sm:w-auto text-white hover:text-bank-secondary font-medium px-8 py-4 flex items-center justify-center gap-2 group transition-colors">
                Sign In <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Right Visual Area (Glassmorphism & Image) */}
          <div className="relative hidden lg:block h-[600px]">
             {/* The Main Hero Image */}
             <div className="absolute inset-0 right-10 rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl z-10 w-[95%] ml-auto h-[550px] mt-8 group">
                <div className="absolute inset-0 bg-gradient-to-t from-bank-dark/80 to-transparent z-10"></div>
                <img 
                  src="/images/hero.png" 
                  alt="Banking Professional" 
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
             </div>

             {/* Floating Glass UI Cards */}
             <div className="absolute top-20 -left-12 bg-white/10 backdrop-blur-md border border-white/20 p-5 rounded-2xl shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] z-20 flex items-center gap-4 animate-bounce hover:bg-white/20 transition-colors pointer-cursor" style={{ animationDuration: '4s' }}>
                <div className="w-12 h-12 rounded-full bg-green-400/20 flex items-center justify-center">
                  <TrendingUp className="text-green-400" size={24} />
                </div>
                <div>
                  <p className="text-gray-300 text-xs font-medium uppercase tracking-wider mb-1">Portfolio Growth</p>
                  <p className="text-white text-xl font-bold">+18.5% <span className="text-green-400 text-sm font-medium">This month</span></p>
                </div>
             </div>

             <div className="absolute bottom-32 -right-8 bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] z-20 animate-bounce" style={{ animationDuration: '5s', animationDelay: '1s' }}>
                <div className="flex items-center gap-3 mb-2">
                   <Shield className="text-bank-secondary" size={24} />
                   <h3 className="text-white font-bold text-lg">Bank-grade Security</h3>
                </div>
                <p className="text-gray-300 text-sm">Your assets are protected<br/>with AES-256 encryption.</p>
             </div>
          </div>
        </div>
      </div>

      {/* 2. STATS & TRUST BANNER (Overlapping the hero border) */}
      <div className="max-w-6xl mx-auto px-6 relative z-20 -mt-16 md:-mt-20">
        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 md:p-12 grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-gray-100">
          {[
            { value: "$5B+", label: "Assets Managed" },
            { value: "2M+", label: "Active Customers" },
            { value: "0.0%", label: "Hidden Fees" },
            { value: "24/7", label: "Dedicated Support" }
          ].map((stat, idx) => (
            <div key={idx} className="text-center px-4">
              <h4 className="text-3xl md:text-4xl font-extrabold text-bank-dark mb-2">{stat.value}</h4>
              <p className="text-bank-textLight text-sm font-medium uppercase tracking-wide">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 3. PREMIUM SERVICES / FEATURES SECTION */}
      <div className="py-32 max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-bank-secondary font-bold tracking-widest uppercase text-sm mb-4">Our Services</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-bank-dark tracking-tight leading-tight">
            Comprehensive financial <br/>solutions tailored for you.
          </h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: "Global Transfers", desc: "Send money worldwide instantly with zero hidden margins. Our network ensures your money arrives safely.", icon: Globe },
            { title: "Smart Investing", desc: "Access high-yield portfolios curated by Elite analysts. Watch your wealth grow with automated rebalancing.", icon: Target },
            { title: "Advanced Security", desc: "Sleep easy knowing your funds are safeguarded by state-of-the-art biometric and cryptographic protections.", icon: Lock },
          ].map((feature, i) => (
            <div key={i} className="bg-white hover:bg-bank-dark p-10 rounded-[2rem] shadow-sm hover:shadow-2xl border border-gray-100 transition-all duration-500 group">
              <div className="w-16 h-16 rounded-2xl bg-bank-light group-hover:bg-bank-secondary/20 flex items-center justify-center mb-8 transition-colors">
                <feature.icon className="text-bank-dark group-hover:text-bank-secondary transition-colors" size={32} />
              </div>
              <h4 className="text-2xl font-bold text-bank-dark group-hover:text-white mb-4 transition-colors">{feature.title}</h4>
              <p className="text-bank-textLight group-hover:text-gray-300 leading-relaxed mb-8 transition-colors">{feature.desc}</p>
              <Link to="#" className="inline-flex items-center gap-2 text-bank-dark font-semibold group-hover:text-bank-secondary transition-colors">
                Explore Feature <ArrowRight size={18} />
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* 4. ABOUT / VISION SECTION (Image + Text split) */}
      <div className="bg-white py-32 border-t border-gray-100">
         <div className="max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
               <div className="absolute -inset-4 bg-bank-secondary/10 rounded-[3rem] transform -rotate-3"></div>
               <img src="/images/about.png" alt="Banking Professionals Meeting" className="relative z-10 w-full h-[500px] object-cover rounded-[2.5rem] shadow-xl" />
            </div>
            <div className="space-y-8 pl-0 lg:pl-10">
               <h2 className="text-bank-secondary font-bold tracking-widest uppercase text-sm">About Finova</h2>
               <h3 className="text-4xl md:text-5xl font-bold text-bank-dark leading-tight tracking-tight">
                 Trusted guidance for <br/>sustainable growth.
               </h3>
               <p className="text-bank-textLight text-lg leading-relaxed">
                 We believe that banking should be transparent, personal, and technologically advanced. Our powerhouse team of financial experts and engineers are united by a single vision: driving your financial success.
               </p>
               <ul className="space-y-4">
                 {["Strategic financial planning aligned to your goals", "Revenue optimization with intelligent insights", "Dedicated relationship managers available 24/7"].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                       <CheckCircle2 className="text-bank-secondary" size={24} />
                       <span className="text-bank-dark font-medium">{item}</span>
                    </li>
                 ))}
               </ul>
               <div className="pt-4">
                 <Button variant="outline" className="rounded-full px-8 py-4">Read Our Story</Button>
               </div>
            </div>
         </div>
      </div>

      {/* 5. EASY REGISTRATION PROCESS */}
      <div className="bg-bank-dark py-32 rounded-t-[3rem] lg:rounded-t-[5rem] overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-16 items-center relative z-10">
           <div className="space-y-8">
              <h2 className="text-bank-secondary font-bold tracking-widest uppercase text-sm">Registration</h2>
              <h3 className="text-4xl md:text-5xl font-bold text-white leading-tight tracking-tight">
                Our easy steps <br/>for onboarding.
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed max-w-md">
                Our registration process is designed with your convenience in mind. Open your account smoothly and securely in minutes, right from your desktop or mobile.
              </p>
              
              <div className="space-y-6 pt-6">
                 {[
                   { step: "01", title: "Create Your ID", desc: "Securely sign in with your verified credentials." },
                   { step: "02", title: "Select Location", desc: "Choose your primary banking jurisdiction." },
                   { step: "03", title: "Enjoy Full Access", desc: "Instantly unlock premium banking features." }
                 ].map((s, i) => (
                    <div key={i} className="flex gap-6 group cursor-pointer">
                      <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white text-xl font-bold group-hover:bg-bank-secondary group-hover:text-bank-dark transition-colors shrink-0">
                        {s.step}
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-white mb-1 group-hover:text-bank-secondary transition-colors">{s.title}</h4>
                        <p className="text-gray-400">{s.desc}</p>
                      </div>
                    </div>
                 ))}
              </div>
           </div>
           
           <div className="relative">
             <div className="absolute -inset-10 bg-bank-secondary/20 blur-[100px] rounded-full"></div>
             <img src="/images/glow.png" alt="Financial Success Chart" className="relative z-10 w-full h-[600px] object-cover rounded-[2.5rem] border border-white/10 shadow-2xl" />
           </div>
        </div>
      </div>
      
      {/* 6. ENHANCED FOOTER */}
      <footer className="bg-[#0b1d19] text-gray-400 py-16">
         <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-2 md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-2">
               <span className="text-white font-bold text-3xl tracking-tight mb-6 block">Finova</span>
               <p className="max-w-sm mb-6">Empowering a new generation of financial independence through cutting-edge technology and unparalleled service.</p>
               <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/5 hover:bg-bank-secondary flex items-center justify-center cursor-pointer transition-colors"></div>
                  <div className="w-10 h-10 rounded-full bg-white/5 hover:bg-bank-secondary flex items-center justify-center cursor-pointer transition-colors"></div>
                  <div className="w-10 h-10 rounded-full bg-white/5 hover:bg-bank-secondary flex items-center justify-center cursor-pointer transition-colors"></div>
               </div>
            </div>
            <div>
               <h5 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">Company</h5>
               <ul className="space-y-4">
                 <li><Link to="#" className="hover:text-bank-secondary transition-colors">About Us</Link></li>
                 <li><Link to="#" className="hover:text-bank-secondary transition-colors">Careers</Link></li>
                 <li><Link to="#" className="hover:text-bank-secondary transition-colors">Press</Link></li>
                 <li><Link to="#" className="hover:text-bank-secondary transition-colors">Contact</Link></li>
               </ul>
            </div>
            <div>
               <h5 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">Legal</h5>
               <ul className="space-y-4">
                 <li><Link to="#" className="hover:text-bank-secondary transition-colors">Privacy Policy</Link></li>
                 <li><Link to="#" className="hover:text-bank-secondary transition-colors">Terms of Service</Link></li>
                 <li><Link to="#" className="hover:text-bank-secondary transition-colors">Cookie Policy</Link></li>
                 <li><Link to="#" className="hover:text-bank-secondary transition-colors">Security Details</Link></li>
               </ul>
            </div>
         </div>
         <div className="max-w-7xl mx-auto px-6 md:px-12 text-center text-sm border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-center">
            <p>&copy; 2026 Finova Banking System. All rights reserved.</p>
            <p className="mt-4 sm:mt-0 flex items-center gap-2"><Shield size={14} className="text-bank-secondary"/> FDIC Insured up to $250,000</p>
         </div>
      </footer>
    </div>
  );
};

export default Landing;
