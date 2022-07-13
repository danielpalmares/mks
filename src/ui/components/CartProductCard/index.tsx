import { toLocalePrice } from '../../utils/functions';
import { CloseButton } from '../CloseButton';
import {
  CardContainer,
  PriceText,
  QuantityButton,
  QuantityContainer,
} from './styles';

interface Props {
  id: number;
  removeHandler: (id: number) => void;
  name: string;
  description: string;
  quantity: number;
  setQuantity: (value: number) => void;
  photo: string;
  price: string;
}

export function CartProductCard({
  id,
  removeHandler,
  name,
  description,
  quantity,
  setQuantity,
  photo,
  price,
}: Props) {
  return (
    <CardContainer>
      <CloseButton
        handler={() => removeHandler(id)}
        width={3}
        height={3}
        padding={0.5}
        top="-.5rem"
        right="-.5rem"
      />
      <img src={photo} alt={description} />
      <span>{name}</span>
      <QuantityContainer>
        <QuantityButton
          onClick={() => setQuantity(quantity - 1 ? quantity - 1 : quantity)}
        >
          -
        </QuantityButton>
        <span>{quantity}</span>
        <QuantityButton onClick={() => setQuantity(quantity + 1)}>
          +
        </QuantityButton>
      </QuantityContainer>
      <PriceText>{toLocalePrice(price)}</PriceText>
    </CardContainer>
  );
}
