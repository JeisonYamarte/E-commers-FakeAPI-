
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

function LoadingCard() {
  return (
    <div className='lg:w-56 lg:h-60 w-30 h-25 rounded-lg p-2'>
        <Skeleton width={224} height={200} />
        <Skeleton width={224} height={40} />
    </div>
  )
}

export {LoadingCard}