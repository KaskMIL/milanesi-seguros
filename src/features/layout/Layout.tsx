import { AppShell } from "@mantine/core";
import HeroImageRight from "../hero/HeroImage";
import InsurancesSection from "../insurances/InsurancesSection";
import { insuranceTypes } from "../insurances/insurancesList";
import Navbar from "../navbar/Navbar";
import { ServiceSlider } from "../slider/Slider";

export default function Layout() {
  return (
    <AppShell
    >
      <AppShell.Header>
        <Navbar />
      </AppShell.Header>
      <AppShell.Main>
        <HeroImageRight />
        {
          insuranceTypes.map((item, idx) => (
            <InsurancesSection key={item.id} imagePosition={idx%2 === 0 ? 'right' : 'left'} insurance={item} />
          ))
        }
        <ServiceSlider />
      </AppShell.Main>
    </AppShell>
  )
}