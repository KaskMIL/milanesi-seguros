import { AppShell, Container, Group, Image } from "@mantine/core";
import HeroImageRight from "./hero/HeroImage";

export default function Layout() {
  return (
    <AppShell
      header={{ height: 80 }}
    >
      <AppShell.Header>
        <Container size={'xl'}>
        <Group justify="space-between">
          <Image h={80} w={100} src={'assets/logo.jpeg'} />
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
      </AppShell.Main>
    </AppShell>
  )
}