import { Container, Footer, Logo, Menu } from '../../components';

type MainProps = {
  children: React.ReactNode;
};

export const MainTemplate = ({ children }: MainProps) => {
  return (
    <Container>
      <Logo />
      <Menu />
      {children}
      <Footer />
    </Container>
  );
};
