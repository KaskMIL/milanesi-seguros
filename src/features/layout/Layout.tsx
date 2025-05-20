import { AppShell, Container, Group, Image } from "@mantine/core";
import HeroImageRight from "../hero/HeroImage";
import InsurancesSection from "../insurances/InsurancesSection";
import { insuranceTypes } from "../insurances/insurancesList";

export default function Layout() {
  return (
    <AppShell
      // header={{ height: 100 }}
    >
      <AppShell.Header>
        <Container size={'xl'}>
        <Group justify="space-between">
          <Image w={100} src={'assets/logo.jpeg'} />
          <Group>
            <a>Inicio</a>
            <a>Seguros</a>
            <a>Nosotros</a>
            <a>Contacto</a>
          </Group>
        </Group>
        </Container>
      </AppShell.Header>
      <AppShell.Main>
        <HeroImageRight />
        {
          insuranceTypes.map((item, idx) => (
            <InsurancesSection key={item.id} imagePosition={idx%2 === 0 ? 'right' : 'left'} insurance={item} />
          ))
        }
      </AppShell.Main>
    </AppShell>
  )
}