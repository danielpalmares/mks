import { PriceText } from './styles';

interface Props {
  children: string;
}

export function PriceBadge({ children }: Props) {
  return <PriceText>{children}</PriceText>;
}
