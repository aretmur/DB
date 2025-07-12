import { useState, useEffect } from "react";
import { Music, Play, Calendar, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const EPRelease = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const tracks = [
    "Noir Nouveau",
    "Velvet Collapse", 
    "Faux Memory",
    "Private Collection",
    "Champagne Residue (No More Room Service)"
  ];

  return (
    <div className="min-h-screen flex flex-col relative">
      {/* Full-screen background logo */}
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
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 overflow-hidden rounded-full static-image">
                <img 
                  src="/lovable-uploads/ebc446a5-97e2-42c3-89db-e80a684c332d.png"
                  alt="Dirty Bourgeois Logo"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
              <span className="text-2xl font-bold tracking-tighter">DIRTY BOURGEOIS</span>
            </Link>
            <div className="hidden md:flex space-x-8">
              <Link to="/#about" className="nav-link">About</Link>
              <Link to="/#music" className="nav-link">Music</Link>
              <Link to="/#shows" className="nav-link">Shows</Link>
              <Link to="/#contact" className="nav-link">Contact</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Back Button */}
      <div className="pt-24 px-4 relative z-10">
        <div className="container mx-auto">
          <Link 
            to="/" 
            className="inline-flex items-center space-x-2 text-white/70 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>
        </div>
      </div>

      {/* EP Release Hero */}
      <section className="flex-1 flex items-center justify-center py-20 relative z-10">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              {/* EP Artwork */}
              <div className="w-80 h-80 mx-auto mb-8 glass rounded-2xl overflow-hidden">
                <img 
                  src="/lovable-uploads/ebc446a5-97e2-42c3-89db-e80a684c332d.png"
                  alt="5 Rooms of Decay EP Cover"
                  className="w-full h-full object-contain p-8"
                />
              </div>

              {/* EP Title */}
              <h1 className="radical-title text-4xl md:text-6xl font-bold tracking-tighter mb-4">
                5 ROOMS OF DECAY
              </h1>
              
              {/* EP Info */}
              <div className="space-y-4 mb-8">
                <p className="text-xl text-white/80">NEW EP</p>
                <div className="flex items-center justify-center space-x-4 text-white/60">
                  <span className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4" />
                    <span>Coming Soon</span>
                  </span>
                  <span>•</span>
                  <span className="flex items-center space-x-2">
                    <Music className="w-4 h-4" />
                    <span>5 Tracks</span>
                  </span>
                </div>
              </div>

              {/* Track List */}
              <div className="glass rounded-2xl p-8 text-left max-w-2xl mx-auto">
                <h2 className="text-2xl font-bold mb-6 text-center">Track List</h2>
                <div className="space-y-4">
                  {tracks.map((track, index) => (
                    <div key={index + 1} className="flex items-center justify-between p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                      <div className="flex items-center space-x-4">
                        <span className="text-accent font-medium w-8">{index + 1}.</span>
                        <span className="text-white">{track}</span>
                      </div>
                      <Play className="w-5 h-5 text-white/30" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Release Info */}
              <div className="mt-12 glass rounded-2xl p-6 max-w-2xl mx-auto">
                <p className="text-white/70 text-center">
                  Experience the haunting journey through electronic decay. Five immersive tracks 
                  that explore the darker corners of trance and techno, where beauty meets destruction 
                  in perfect harmony.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 relative z-10">
        <div className="container px-4">
          <div className="text-center">
            <p className="text-white/50 text-sm">
              © {new Date().getFullYear()} Dirty Bourgeois. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default EPRelease;
