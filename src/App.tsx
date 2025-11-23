import Navbar from "./SellerPage/Navbar"
import HeroSection from "./SellerPage/Hero"
import HowtoBecomeSeller from "./SellerPage/ProcessSection"
import WhySellWithUs from "./SellerPage/BenefitsSection"
import EarningsSection from "./SellerPage/EarningSection"
import ContentSection from "./SellerPage/ContentTypesSection"
import Testimonials from "./SellerPage/TestimonialsSection"
import Application from "./SellerPage/ApplicationForm"
import CTA from "./SellerPage/CTASection"

function App() {
  return (
    <div className="min-h-screen bg-black text-slate-100">
      <Navbar />
      <HeroSection />
      <WhySellWithUs />
      <HowtoBecomeSeller />
      <EarningsSection />
      <ContentSection />
      <Testimonials />
      <Application />
      <CTA />
    </div>
  )
}

export default App