import React from 'react';
import Navbar from '../../components/common/Navbar';
import Button from '../../components/common/Button';
import { ArrowRight, CheckCircle2, Shield, TrendingUp, Users, Lock, Target, Globe, ChevronRight, CreditCard, Home, Zap, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <div className="min-h-screen bg-bank-light font-sans text-bank-text overflow-x-hidden">
      {/* 1. HERO SECTION */}
      <div className="bg-gradient-to-br from-bank-dark via-[#0d1f3c] to-[#0A1628] relative w-full pt-4 pb-32 lg:pb-40 rounded-b-[3rem] lg:rounded-b-[5rem] overflow-hidden">
        {/* Decorative background blurs */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-bank-secondary/15 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[100px] translate-x-1/3"></div>
        <div className="absolute bottom-0 left-1/3 w-[400px] h-[400px] bg-bank-secondary/10 rounded-full blur-[80px]"></div>

        <Navbar />

        <div className="max-w-7xl mx-auto px-6 md:px-12 mt-16 md:mt-24 relative z-10 grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Text Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-bank-secondary/10 border border-bank-secondary/30 backdrop-blur-sm">
              <Shield size={16} className="text-bank-secondary" />
              <span className="text-bank-secondary text-xs md:text-sm font-semibold tracking-wide uppercase">Sri Lanka's Trusted Bank</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.1] tracking-tight">
              Banking Made
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-bank-secondary via-bank-accent to-bank-secondary" style={{ backgroundSize: '200% auto', animation: 'shimmer 3s linear infinite' }}>
                Brilliant.
              </span>
            </h1>
            
            <p className="text-gray-400 text-lg md:text-xl font-light leading-relaxed max-w-xl">
              Experience next-generation digital banking with LankaBank. Premium credit cards, instant transfers, and world-class security — all at your fingertips.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
              <Link to="/register" className="w-full sm:w-auto">
                <Button variant="primary" className="w-full sm:w-auto gap-2 px-8 py-4 text-lg shadow-[0_0_20px_rgba(245,166,35,0.3)] hover:shadow-[0_0_30px_rgba(245,166,35,0.5)] transform hover:-translate-y-1 transition-all duration-300 font-bold">
                  Open an Account <ArrowRight size={20} />
                </Button>
              </Link>
              <Link to="/login" className="w-full sm:w-auto text-white hover:text-bank-secondary font-medium px-8 py-4 flex items-center justify-center gap-2 group transition-colors">
                Sign In <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Right Visual — Credit Cards */}
          <div className="relative hidden lg:block h-[600px]">
            {/* Hero credit cards image */}
            <div className="absolute inset-0 flex items-center justify-center">
              <img 
                src="/images/hero-cards.png" 
                alt="LankaBank Premium Credit Cards" 
                className="w-full h-auto max-h-[520px] object-contain drop-shadow-2xl"
                style={{ animation: 'float 6s ease-in-out infinite' }}
              />
            </div>

            {/* Floating Glass UI Cards */}
            <div className="absolute top-16 -left-8 bg-white/10 backdrop-blur-md border border-white/20 p-5 rounded-2xl shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] z-20 flex items-center gap-4" style={{ animation: 'float 4s ease-in-out infinite' }}>
              <div className="w-12 h-12 rounded-full bg-green-400/20 flex items-center justify-center">
                <TrendingUp className="text-green-400" size={24} />
              </div>
              <div>
                <p className="text-gray-300 text-xs font-medium uppercase tracking-wider mb-1">Growth Rate</p>
                <p className="text-white text-xl font-bold">+24.5% <span className="text-green-400 text-sm font-medium">This month</span></p>
              </div>
            </div>

            <div className="absolute bottom-28 -right-4 bg-white/10 backdrop-blur-md border border-white/20 p-5 rounded-2xl shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] z-20" style={{ animation: 'floatReverse 5s ease-in-out infinite' }}>
              <div className="flex items-center gap-3 mb-2">
                <CreditCard className="text-bank-secondary" size={24} />
                <h3 className="text-white font-bold text-lg">Premium Cards</h3>
              </div>
              <p className="text-gray-300 text-sm">Exclusive rewards &<br/>zero annual fees.</p>
            </div>
          </div>
        </div>
      </div>

      {/* 2. STATS BANNER */}
      <div className="max-w-6xl mx-auto px-6 relative z-20 -mt-16 md:-mt-20">
        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 md:p-12 grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-gray-100">
          {[
            { value: "LKR 50B+", label: "Assets Managed" },
            { value: "1.5M+", label: "Active Customers" },
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

      {/* 3. CREDIT CARDS SHOWCASE */}
      <div className="py-28 max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-bank-secondary font-bold tracking-widest uppercase text-sm mb-4">Our Cards</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-bank-dark tracking-tight leading-tight">
            Premium cards designed<br/>for your lifestyle.
          </h3>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Blue Platinum Card */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-bank-dark/20 to-blue-500/20 rounded-[2rem] blur-xl group-hover:blur-2xl transition-all duration-500 opacity-60" />
            <div className="relative bg-gradient-to-br from-bank-dark to-bank-primary rounded-[2rem] p-8 md:p-10 overflow-hidden border border-white/10">
              <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-blue-500/10 rounded-full blur-[60px] translate-x-1/3 -translate-y-1/3" />
              <div className="relative z-10">
                <span className="inline-block px-3 py-1 bg-bank-secondary/20 text-bank-secondary rounded-full text-xs font-bold uppercase tracking-wider mb-6">Platinum</span>
                <h4 className="text-3xl font-bold text-white mb-3">Blue Platinum</h4>
                <p className="text-gray-400 mb-8 leading-relaxed">Unlimited cashback, exclusive airport lounge access, and premium travel insurance worldwide.</p>
                <img 
                  src="/images/card-blue.png" 
                  alt="LankaBank Blue Platinum Card" 
                  className="w-full max-w-sm mx-auto rounded-2xl shadow-2xl shadow-black/30 transform group-hover:scale-105 group-hover:-rotate-1 transition-all duration-500"
                />
                <div className="mt-8 flex items-center gap-6">
                  <div>
                    <p className="text-bank-secondary text-2xl font-extrabold">5%</p>
                    <p className="text-gray-400 text-xs uppercase tracking-wider">Cashback</p>
                  </div>
                  <div className="h-10 w-px bg-white/10" />
                  <div>
                    <p className="text-bank-secondary text-2xl font-extrabold">LKR 0</p>
                    <p className="text-gray-400 text-xs uppercase tracking-wider">Annual Fee</p>
                  </div>
                  <div className="h-10 w-px bg-white/10" />
                  <div>
                    <p className="text-bank-secondary text-2xl font-extrabold">50+</p>
                    <p className="text-gray-400 text-xs uppercase tracking-wider">Lounges</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Gold Rewards Card */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-bank-secondary/20 to-amber-500/20 rounded-[2rem] blur-xl group-hover:blur-2xl transition-all duration-500 opacity-60" />
            <div className="relative bg-gradient-to-br from-[#1a1a2e] to-[#16213e] rounded-[2rem] p-8 md:p-10 overflow-hidden border border-bank-secondary/20">
              <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-bank-secondary/10 rounded-full blur-[60px] translate-x-1/3 -translate-y-1/3" />
              <div className="relative z-10">
                <span className="inline-block px-3 py-1 bg-bank-secondary/20 text-bank-accent rounded-full text-xs font-bold uppercase tracking-wider mb-6">Gold Rewards</span>
                <h4 className="text-3xl font-bold text-white mb-3">Gold Rewards</h4>
                <p className="text-gray-400 mb-8 leading-relaxed">Earn reward points on every transaction. Redeem for flights, hotel stays, shopping, and more.</p>
                <img 
                  src="/images/card-gold.png" 
                  alt="LankaBank Gold Rewards Card" 
                  className="w-full max-w-sm mx-auto rounded-2xl shadow-2xl shadow-black/30 transform group-hover:scale-105 group-hover:rotate-1 transition-all duration-500"
                />
                <div className="mt-8 flex items-center gap-6">
                  <div>
                    <p className="text-bank-accent text-2xl font-extrabold">3X</p>
                    <p className="text-gray-400 text-xs uppercase tracking-wider">Points</p>
                  </div>
                  <div className="h-10 w-px bg-white/10" />
                  <div>
                    <p className="text-bank-accent text-2xl font-extrabold">LKR 0</p>
                    <p className="text-gray-400 text-xs uppercase tracking-wider">First Year</p>
                  </div>
                  <div className="h-10 w-px bg-white/10" />
                  <div>
                    <p className="text-bank-accent text-2xl font-extrabold">100+</p>
                    <p className="text-gray-400 text-xs uppercase tracking-wider">Partners</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 4. SERVICES SECTION */}
      <div className="bg-white py-28 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-bank-secondary font-bold tracking-widest uppercase text-sm mb-4">Our Services</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-bank-dark tracking-tight leading-tight">
              Comprehensive financial<br/>solutions tailored for you.
            </h3>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Global Transfers", desc: "Send money worldwide instantly with zero hidden margins. Our network ensures your money arrives safely.", icon: Globe },
              { title: "Smart Investing", desc: "Access high-yield portfolios curated by elite analysts. Watch your wealth grow with automated rebalancing.", icon: Target },
              { title: "Advanced Security", desc: "Sleep easy knowing your funds are safeguarded by state-of-the-art biometric and cryptographic protections.", icon: Lock },
            ].map((feature, i) => (
              <div key={i} className="bg-bank-light hover:bg-bank-dark p-10 rounded-[2rem] shadow-sm hover:shadow-2xl border border-gray-100 hover:border-bank-dark transition-all duration-500 group">
                <div className="w-16 h-16 rounded-2xl bg-white group-hover:bg-bank-secondary/20 flex items-center justify-center mb-8 transition-colors shadow-sm">
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
      </div>

      {/* 5. ABOUT SECTION */}
      <div className="py-28 max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute -inset-4 bg-bank-secondary/10 rounded-[3rem] transform -rotate-3"></div>
            <div className="relative z-10 bg-gradient-to-br from-bank-dark to-bank-primary rounded-[2.5rem] p-10 shadow-xl overflow-hidden">
              <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-bank-secondary/10 rounded-full blur-[80px] translate-x-1/2 -translate-y-1/2" />
              <div className="relative z-10 space-y-8">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-bank-secondary/20 flex items-center justify-center">
                    <Home className="text-bank-secondary" size={28} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-xl">Lanka<span className="text-bank-secondary">Bank</span></h4>
                    <p className="text-gray-400 text-sm">Est. 1995 — Sri Lanka</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { value: '28+', label: 'Years of Service' },
                    { value: '350+', label: 'Branch Network' },
                    { value: '1.5M+', label: 'Happy Customers' },
                    { value: '15+', label: 'Awards Won' },
                  ].map((stat, i) => (
                    <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
                      <p className="text-bank-secondary text-2xl font-extrabold">{stat.value}</p>
                      <p className="text-gray-400 text-xs mt-1">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-8 pl-0 lg:pl-10">
            <h2 className="text-bank-secondary font-bold tracking-widest uppercase text-sm">About LankaBank</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-bank-dark leading-tight tracking-tight">
              Trusted guidance for<br/>sustainable growth.
            </h3>
            <p className="text-bank-textLight text-lg leading-relaxed">
              We believe that banking should be transparent, personal, and technologically advanced. Our team of financial experts and engineers are united by a single vision: driving your financial success across Sri Lanka and beyond.
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

      {/* 6. REGISTRATION PROCESS */}
      <div className="bg-bank-dark py-32 rounded-t-[3rem] lg:rounded-t-[5rem] overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-16 items-center relative z-10">
          <div className="space-y-8">
            <h2 className="text-bank-secondary font-bold tracking-widest uppercase text-sm">Get Started</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white leading-tight tracking-tight">
              Open your account<br/>in minutes.
            </h3>
            <p className="text-gray-400 text-lg leading-relaxed max-w-md">
              Our registration process is designed with your convenience in mind. Open your LankaBank account smoothly and securely, right from your desktop or mobile.
            </p>
            
            <div className="space-y-6 pt-6">
              {[
                { step: "01", title: "Create Your ID", desc: "Securely sign up with your verified credentials.", icon: Zap },
                { step: "02", title: "Verify Identity", desc: "Quick and seamless KYC verification process.", icon: Shield },
                { step: "03", title: "Start Banking", desc: "Instantly unlock premium banking features & cards.", icon: Star }
              ].map((s, i) => (
                <div key={i} className="flex gap-6 group cursor-pointer">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-bank-secondary group-hover:border-bank-secondary group-hover:text-bank-dark transition-all">
                    <s.icon size={24} className="text-bank-secondary group-hover:text-bank-dark transition-colors" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-1 group-hover:text-bank-secondary transition-colors">{s.title}</h4>
                    <p className="text-gray-400">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <Link to="/register">
                <Button variant="primary" className="gap-2 px-8 py-4 text-lg font-bold">
                  Open Account Now <ArrowRight size={20} />
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="relative hidden lg:block">
            <div className="absolute -inset-10 bg-bank-secondary/10 blur-[100px] rounded-full"></div>
            {/* Stacked credit cards */}
            <div className="relative z-10 flex flex-col items-center gap-6">
              <img 
                src="/images/card-blue.png" 
                alt="LankaBank Blue Card" 
                className="w-[85%] rounded-2xl shadow-2xl shadow-black/40 transform -rotate-6 hover:rotate-0 transition-transform duration-700"
                style={{ animation: 'float 6s ease-in-out infinite' }}
              />
              <img 
                src="/images/card-gold.png" 
                alt="LankaBank Gold Card" 
                className="w-[85%] rounded-2xl shadow-2xl shadow-black/40 transform rotate-3 hover:rotate-0 transition-transform duration-700 -mt-32"
                style={{ animation: 'floatReverse 5s ease-in-out infinite' }}
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* 7. FOOTER */}
      <footer className="bg-[#060e1a] text-gray-400 py-16">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-2 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-bank-secondary text-bank-dark p-2 rounded-xl">
                <Home size={20} />
              </div>
              <span className="text-white font-bold text-2xl tracking-tight">Lanka<span className="text-bank-secondary">Bank</span></span>
            </div>
            <p className="max-w-sm mb-6">Empowering Sri Lanka's financial future through cutting-edge technology and unparalleled service since 1995.</p>
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-white/5 hover:bg-bank-secondary hover:text-bank-dark flex items-center justify-center cursor-pointer transition-colors"></div>
              <div className="w-10 h-10 rounded-full bg-white/5 hover:bg-bank-secondary hover:text-bank-dark flex items-center justify-center cursor-pointer transition-colors"></div>
              <div className="w-10 h-10 rounded-full bg-white/5 hover:bg-bank-secondary hover:text-bank-dark flex items-center justify-center cursor-pointer transition-colors"></div>
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
          <p>&copy; 2026 LankaBank. All rights reserved.</p>
          <p className="mt-4 sm:mt-0 flex items-center gap-2"><Shield size={14} className="text-bank-secondary"/> CBSL Licensed & Regulated</p>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
