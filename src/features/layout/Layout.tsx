import { AppShell, Container, Group, Image, Title } from "@mantine/core";

export default function Layout() {
  return (
    <AppShell
      header={{ height: 80 }}
    >
      <AppShell.Header>
        <Container size={'xl'}>
        <Group justify="space-between">
          <Image h={80} w={100} src={'https://placehold.co/200x200'} />
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
        <Title>Hello World!</Title>
      </AppShell.Main>
    </AppShell>
  )
}