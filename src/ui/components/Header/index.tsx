import {
  Container,
  Title,
  SubTitle,
  TitleContainer,
  CartButton,
} from './styles';
import { IoCartOutline } from 'react-icons/io5';

export function Header() {
  return (
    <Container>
      <TitleContainer>
        <Title>MKS</Title>
        <SubTitle>Sistemas</SubTitle>
      </TitleContainer>
      <CartButton>
        <IoCartOutline size={20} /> 10
      </CartButton>
    </Container>
  );
}
