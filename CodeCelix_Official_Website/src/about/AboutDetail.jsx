import AboutHero from './AboutHero.jsx';
import OurStory from './OurStory.jsx';
import CoreValues from './CoreValues.jsx';
import CompanyTimeline from './CompanyTimeline.jsx';
import ContactSectionCommon from '../components/ContactSectionCommon.jsx';
import TeamSection from '../home/TeamSection.jsx';

export default function AboutDetail() {
  return (
    <>
      <AboutHero />
      <OurStory />
      <CoreValues />
      {/* <CompanyTimeline /> */}
      <TeamSection />
      <ContactSectionCommon />
    </>
  );
}
