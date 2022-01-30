import { useEffect, useRef, useState } from 'react';

type TimerArgs = {
    milisegundos: number,
    segundos?: number
}

export const Timer = ({milisegundos}: TimerArgs) => {
    const [segs, setSegs] = useState(0);
    const ref = useRef<NodeJS.Timer>();

    useEffect(() => {
        ref.current && clearInterval(ref.current) //? si => entonces
       ref.current = setInterval(() => setSegs(segs => segs + 1) ,milisegundos); 
    }, [milisegundos]);
    

  return (
    <>
        <h4>Timer: <small>{segs}</small></h4>
    </>
  )
};
