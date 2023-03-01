import { useCallback, useEffect, useRef, useState, memo } from 'react';
import { ParticlesEngine } from '../../components';
import Chair from './chair';

import styles from './styles.module.css'

const ReservationScreen = () => {

  const [playAnimation, setPlayAnimation] = useState<boolean>(false)
  const timeoutRef = useRef<number>()

  const startAnimation = useCallback(
    () => setPlayAnimation(true), []
  )

  useEffect(() => {
    if (playAnimation) {
      timeoutRef.current = (setTimeout(() => {
        setPlayAnimation(false)
        // 10 seconds as timeout, as that is the lifetime of the confetti
      }, 10000) as unknown) as number
    }

    return ():void => {
      clearTimeout(timeoutRef.current)
    }
  }, [playAnimation])

  useEffect(() => {
    // TODO fix re-render? mount is logged twice when refreshing
    console.log('mount')
  }, [])


    return (
      <div className='bg-white p-5 relative'>
        <Chair onReservateCallback={() => startAnimation()} className={styles.firstChair} />
        <Chair onReservateCallback={() => startAnimation()} className={styles.secondChair} />
        <div className='border-4 border-black h-20 w-10' />
        <ParticlesEngine playAnimation={playAnimation} />
      </div>
    );
  };

  export default memo(ReservationScreen)