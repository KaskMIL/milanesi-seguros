import { Button, Container, Text, Title } from '@mantine/core';
import classes from './HeroImageRight.module.css';

export default function HeroImageRight() {
  return (
    <div className={classes.root}>
      <Container size="lg">
        <div className={classes.inner}>
          <div className={classes.content}>
            <Title className={classes.title}>
              Tu tranquilidad, protegida.
            </Title>

            <Text className={classes.description} mt={30}>
              Planes flexibles que protegen tu <strong>casa, tus bienes y tu vehículo</strong> con asesoramiento personalizado 24/7.
            </Text>
            <Text className={classes.description} mt={30}>
              Soluciones simples para cuidarte hoy y siempre.
            </Text>

            <Button
              variant="gradient"
              gradient={{ from: 'blue', to: 'yellow' }}
              size="xl"
              className={classes.control}
              mt={40}
            >
              Asegurate hoy
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}