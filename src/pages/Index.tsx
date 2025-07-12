import { useState, useEffect } from "react";
import { Music, Calendar, Instagram, Facebook, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen flex flex-col relative">
      {/* Full-screen background logo - original position */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <img 
          src="/lovable-uploads/ebc446a5-97e2-42c3-89db-e80a684c332d.png"
          alt="Background Logo"
          className="w-full h-full object-cover opacity-5"
        />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <a href="#" className="flex items-center space-x-2">
              <div className="w-10 h-10 overflow-hidden rounded-full static-image">
                <img 
                  src="/lovable-uploads/ebc446a5-97e2-42c3-89db-e80a684c332d.png"
                  alt="Dirty Bourgeois Logo"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
              <span className="text-2xl font-bold tracking-tighter">DIRTY BOURGEOIS</span>
            </a>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="nav-link">About</a>
              <a href="#music" className="nav-link">Music</a>
              <a href="#shows" className="nav-link">Shows</a>
              <a href="#contact" className="nav-link">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center pt-20 relative z-10">
        <div className="container px-4">
          <div className="text-center space-y-8">
            <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              {/* Circular Text Design */}
              <div className="flex flex-col items-center space-y-8">
                {/* Circular Text Container */}
                <div className="circular-text-container relative w-80 h-80 md:w-96 md:h-96">
                  {/* Thinner Red Circle Border */}
                  <div className="w-full h-full rounded-full border-4 border-red-600 shadow-lg shadow-red-600/30"></div>
                  
                  {/* Center Text */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="motel-sign">
                      <div>TRANCE</div>
                      <div>HOUSE</div>
                      <div>TECHNO</div>
                    </div>
                  </div>
                  
                  {/* Rotating Text */}
                  <div className="circular-text">
                    <svg className="w-full h-full" viewBox="0 0 200 200">
                      <defs>
                        <path
                          id="circle"
                          d="M 100, 100 m -85, 0 a 85,85 0 1,1 170,0 a 85,85 0 1,1 -170,0"
                        />
                      </defs>
                      <text className="circular-text-element">
                        <textPath href="#circle" startOffset="0%">
                          DIRTY BOURGEOIS
                        </textPath>
                      </text>
                      <text className="circular-text-element">
                        <textPath href="#circle" startOffset="50%">
                          DIRTY BOURGEOIS
                        </textPath>
                      </text>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 relative z-10">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <div className="glass rounded-2xl p-8 space-y-6">
              <h2 className="text-3xl font-bold tracking-tighter">About</h2>
              <div className="static-image aspect-video rounded-lg overflow-hidden">
                <img 
                  src="/lovable-uploads/ebc446a5-97e2-42c3-89db-e80a684c332d.png"
                  alt="Dirty Bourgeois Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <p className="text-lg text-white/70">
                Dirty Bourgeois is at the forefront of the international electronic music scene, 
                delivering mind-bending performances that blur the lines between trance and techno. 
                With appearances at major festivals and clubs worldwide, Dirty Bourgeois creates 
                immersive sonic experiences that take audiences on unforgettable journeys.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Music Section */}
      <section id="music" className="py-20 relative z-10">
        <div className="container px-4">
