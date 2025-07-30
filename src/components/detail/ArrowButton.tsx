import PreviousBtnIcon from '@/components/icons/PreviousBtnIcon';
import NextBtnIcon from '@/components/icons/NextBtnIcon';

interface ArrowButtonProps {
  direction: 'prev' | 'next';
  onClick: () => void;
}

const ArrowButton = ({ direction, onClick }: ArrowButtonProps) => (
  <div
    className={`gallery__arrow gallery__arrow--${direction}`}
    onClick={onClick}
  >
    {direction === 'prev' ? <PreviousBtnIcon /> : <NextBtnIcon />}
  </div>
);

export default ArrowButton;
