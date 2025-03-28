import { Container, GenericHtml } from '../../components';

type GenericProps = {
  children: React.ReactNode;
};

export const GenericTemplate = ({ children }: GenericProps) => {
  return (
    <Container>
      <GenericHtml>{children}</GenericHtml>
    </Container>
  );
};
