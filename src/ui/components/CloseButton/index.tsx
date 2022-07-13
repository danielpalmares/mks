import { IoCloseOutline } from 'react-icons/io5';
import { Button } from './styles';

interface Props {
  handler: () => void;
  width: number;
  height: number;
  padding: number;
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
}

export function CloseButton({ handler, ...props }: Props) {
  return (
    <Button onClick={() => handler()} {...props}>
      <IoCloseOutline />
    </Button>
  );
}
