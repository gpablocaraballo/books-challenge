import React from 'react';
import Header from '../Header';
import Container from './AppLayout.styled';

export default function AppLayout({ children }) {
  return (
    <Container>
      <Header />
      {children}
    </Container>
  );
}
