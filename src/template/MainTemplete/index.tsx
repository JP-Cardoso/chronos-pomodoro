// PascalCase
// HearderHeading

import '../../styles/theme.css';
import '../../styles/global.css';
import Container from '../../components/Container';
import Footer from '../../components/Footer';
import Logo from '../../components/Logo';
import React from 'react';
import Menu from '../../components/Menu';


type MainTempleteProps = {
  children: React.ReactNode;
}

export default function MainTemplete({
  children
}: MainTempleteProps) {
  return (
    <>
      <Container>
        <Logo />
      </Container>

      <Container>
        <Menu />
      </Container>

      {children}

      <Container>
        <Footer />
      </Container>
    </>
  );
}