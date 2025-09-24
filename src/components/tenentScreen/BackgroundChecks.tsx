import FeatureAccordion from '../commen/FeatureAccordion';
import dummyImage from '../../assets/dummy.jpg';

// Content data arrays tailored for Tenant Screening
const mainFeatures = [
  {
    id: 'credit',
    title: "Instant Credit Reports",
    description: "Pull TransUnion-powered credit reports with scores, tradelines, and alerts. Understand an applicant's creditworthiness in seconds.",
    learnMoreUrl: "#"
  },
  {
    id: 'criminal',
    title: "Nationwide Criminal & OFAC Checks",
    description: "Search national, state, and county records plus sex offender registries and OFAC lists to flag potential risks before you approve.",
    learnMoreUrl: "#"
  },
  {
    id: 'evictions',
    title: "Eviction & Housing Court History",
    description: "See prior filings and judgements to avoid repeat issues. Get a clearer picture of an applicant's rental track record.",
    learnMoreUrl: "#"
  },
  {
    id: 'identity',
    title: "Identity Verification",
    description: "Verify SSN, address history, and aliases to ensure the person applying is who they say they are.",
    learnMoreUrl: "#"
  },
  {
    id: 'compliance',
    title: "FCRA-Compliant Decisions",
    description: "Built-in disclosures, permissions, and adverse action letters help you stay compliant and organized throughout the screening process.",
    learnMoreUrl: "#"
  }
];

const BackgroundChecks = () => {
  return (
    <FeatureAccordion
      title="Comprehensive Tenant Screening"
      description="Make informed, fast approvals with instant credit, criminal, eviction, and identity checks—paid by the applicant and delivered securely."
      features={mainFeatures}
      imageSrc={dummyImage}
      imageAlt="Tenant screening checks"
      defaultActiveFeature="credit"
    />
  );
};

export default BackgroundChecks;
