

'use client';
import Banner from './_components/Banner/Banner';
import Feature from './_components/Feature/Feature';
import QualityService from './_components/QualityService/QualityService';
import Services from './_components/Services/Services';
import ClinicalFacts from './_components/ClinicalFacts/ClinicalFacts';

export default function Home() {
  return (
    <>
      <Banner />
      <Feature />
      <QualityService />
      <Services home />
      <ClinicalFacts />
    </>
  );
}
