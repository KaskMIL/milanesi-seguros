import { AppShell } from "@mantine/core";
import HeroImageRight from "../hero/HeroImage";
import InsurancesSection from "../insurances/InsurancesSection";
import { insuranceTypes } from "../insurances/insurancesList";
import Navbar from "../navbar/Navbar";

export default function Layout() {
  return (
    <AppShell
      // header={{ height: 100 }}
    >
      <AppShell.Header>
        {/* <Container size={'xl'}>
        <Group justify="space-between">
          <Group>
          <Image w={100} src={'assets/logo.jpeg'} />
          <Stack align="center" gap={0}>
            <Text mb={-20} ta={'center'} fw={600} fz={'h1'} c={'var(--mantine-primary-color-9)'}>MILANESI</Text>
            <Text ta={'center'} fw={200} fz={'h2'} c={'var(--mantine-primary-color-9)'}>Seguros</Text>
          </Stack>
          </Group>
          <Group>
            <a>Inicio</a>
            <a>Seguros</a>
            <a>Nosotros</a>
            <a>Contacto</a>
          </Group>
        </Group>
        </Container> */}
        <Navbar />
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