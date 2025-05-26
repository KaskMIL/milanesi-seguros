import { useState } from 'react';
import { Burger, Container, Drawer, Group, Image, Stack, Text } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import classes from './HeaderSimple.module.css';

const links = [
  { link: '#inicio', label: 'Inicio' },
  { link: '#seguros', label: 'Seguros' },
  { link: '#nosotros', label: 'Nosotros' },
  { link: '#contacto', label: 'Contacto' },
];

export default function Navbar() {
  const [opened, { toggle }] = useDisclosure(false);
  const [active, setActive] = useState(links[0].link);

  const items = links.map((link) => (
    <a
      key={link.label}
      href={link.link}
      className={classes.link}
      data-active={active === link.link || undefined}
      onClick={() => {
        // event.preventDefault();
        setActive(link.link);
        if (opened) {
          toggle();
        }
      }}
    >
      {link.label}
    </a>
  ));

  return (
    <header className={classes.header}>
      <Container size={'xl'} className={classes.inner}>
        {/* <MantineLogo size={28} /> */}
        <Group>
          <Image w={100} src={'assets/logo.jpeg'} />
          <Stack align='center' gap={0}>
            <Text
              mb={-20}
              ta={'center'}
              fw={600}
              fz={'h1'}
              c={'var(--mantine-primary-color-9)'}
            >
              MILANESI
            </Text>
            <Text
              ta={'center'}
              fw={200}
              fz={'h2'}
              c={'var(--mantine-primary-color-9)'}
            >
              Seguros
            </Text>
          </Stack>
        </Group>
        <Group gap={5} visibleFrom='sm'>
          {items}
        </Group>
        <Drawer opened={opened} onClose={toggle} size={'80%'}>
          <Stack>{items}</Stack>
        </Drawer>

        <Burger opened={opened} onClick={toggle} hiddenFrom='sm' size='sm' />
      </Container>
    </header>
  );
}
