import AboutHero from './AboutHero.jsx';
import OurStory from './OurStory.jsx';
import CoreValues from './CoreValues.jsx';
import CompanyTimeline from './CompanyTimeline.jsx';
import ContacSectionCommon from '../components/ContactSectionCommon.jsx';
import TeamSection from '../components/TeamSection.jsx';

export default function AboutDetail() {
  return (
    <div className="min-h-screen bg-white">
      <main>
        <AboutHero />
        <OurStory />
        <CoreValues />
        <CompanyTimeline />
        <TeamSection />
        <ContacSectionCommon />
      </main>
    </div>
  );
}
