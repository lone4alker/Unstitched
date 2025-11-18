import { Button } from '@/components/ui/button';

export default function Navbar() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 bg-black/70 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-4 py-1 flex items-center justify-between gap-6">
        
        {/* Left Column: Logo */}
        <div className="flex items-center gap-6">
          <img
            src="https://static.wixstatic.com/media/b0bce6_2740448e86174dffb5a766e6bc0fc37e~mv2.png/v1/fill/w_740,h_200,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/b0bce6_2740448e86174dffb5a766e6bc0fc37e~mv2.png"
            alt="Envato Elements Logo"
            className="w-48 md:w-56"
          />
        </div>

        {/* Right Column: Apply Button */}
        <Button
          className="bg-emerald-500 hover:bg-emerald-400 text-black font-semibold"
          onClick={() => scrollToSection('apply')}
        >
          Apply now
        </Button>
      </div>
      <div className="lg:hidden border-t border-white/5">
      </div>
    </header>
  );
};

