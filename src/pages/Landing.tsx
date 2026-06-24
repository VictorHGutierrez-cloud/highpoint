import { useNavigate } from "react-router-dom";
import { CinematicHero } from "@/components/ui/cinematic-hero";

const Landing = () => {
  const navigate = useNavigate();

  return (
    <CinematicHero
      brandName="FACTORIAL HR"
      tagline1="One platform."
      tagline2="Four companies. Zero paperwork."
      cardHeading="Integrated HR for High Point."
      cardDescription={
        <>
          Factorial centralises documents, time tracking, leave, shifts, and payroll prep — with a{" "}
          <strong>native Sage 50 Cloud sync</strong> and mobile access for your owner and floor teams.
        </>
      }
      metricValue={100}
      metricLabel="employees across 4 entities"
      ctaHeading="View the Proposal"
      ctaDescription="See how Factorial can replace manual HR across Cape Town and Gauteng — built from your discovery call."
      onCtaClick={() => navigate("/proposta")}
    />
  );
};

export default Landing;
