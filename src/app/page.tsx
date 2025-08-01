'use client';

import { Container, Navbar } from '@/components';

const HomePage = () => {
  return (
    <Container className="flex flex-col">
      <Navbar page="home" />
    </Container>
  );
};

export default HomePage;
