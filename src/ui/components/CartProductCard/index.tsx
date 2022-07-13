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
  name: string;
  description: string;
  quantity: number;
  setQuantity: (value: number) => void;
  photo: string;
  price: string;
}

export function CartProductCard({
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
        handler={() => removeHandler()}
        width={3}
        height={3}
        padding={0.5}
        top="-1rem"
        right="-1rem"
      />

      <ImageNameContainer>
        <img src={photo} alt={description} />
        <span>{name}</span>
      </ImageNameContainer>

      <QuantityPriceContainer>
        <QuantityContainer>
          <button
            onClick={() => setQuantity(quantity - 1 ? quantity - 1 : quantity)}
          >
            -
          </button>
          <span>{quantity}</span>
          <button onClick={() => setQuantity(quantity + 1)}>+</button>
        </QuantityContainer>
        <PriceBadge>{toLocalePrice(price)}</PriceBadge>
      </QuantityPriceContainer>
    </CardContainer>
  );
}
