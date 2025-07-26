import ContactForm from './ContactForm.jsx';
import HeroSection from './HeroSection.jsx';
import Services from './Services.jsx';
import WhoWeAre from './WhoWeAre.jsx';

export default function Home() {
  return (
    <>
      <HeroSection />
      <WhoWeAre />
      <Services />
      <ContactForm />
    </>
  );
}
