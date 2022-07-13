import { toLocalePrice } from '../../utils/functions';
import { CloseButton } from '../CloseButton';
import { PriceBadge } from '../PriceBadge';
import {
  CardContainer,
  ImageNameContainer,
  QuantityContainer,
  QuantityPriceContainer,
} from './styles';

interface Props {
  removeHandler: () => void;
  addQuantity: () => void;
  removeQuantity: () => void;
  name: string;
  quantity: number;
  photo: string;
  price: string;
}

export function CartProductCard({
  removeHandler,
  name,
  quantity,
  addQuantity,
  removeQuantity,
  photo,
  price,
}: Props) {
  return (
    <CardContainer>
      <CloseButton
        handler={() => removeHandler()}
        width={3}
        height={3}
        padding={0.5}
        top="-1rem"
        right="-1rem"
      />

      <ImageNameContainer>
        <img src={photo} alt={name} />
        <span>{name}</span>
      </ImageNameContainer>

      <QuantityPriceContainer>
        <QuantityContainer>
          <button onClick={() => removeQuantity()}>-</button>
          <span>{quantity}</span>
          <button onClick={() => addQuantity()}>+</button>
        </QuantityContainer>

        <PriceBadge>{toLocalePrice(price)}</PriceBadge>
      </QuantityPriceContainer>
    </CardContainer>
  );
}
