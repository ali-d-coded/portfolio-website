'use client';
import { animate, stagger } from 'animejs';

type Props = {}

export default function WaterDropGrid({}: Props) {
  return (
    <div className='relative grid place-content-center  px-8'>
        <DotGrid />
    </div>
  )
}



const GRID_WIDTH = 25;
const GRID_HEIGHT = 20;
const DotGrid = () => {

    const handleDotClick = (e: any) => {
        console.log("Index :", e.target.dataset.index);
        
        animate(".dot-point", {
            scale: [
                {to: 1.35, ease: "outSine",duration: 250},
                {to: 1, ease: "inOutQuad",duration: 500},
            ],
            translateY:[
                {to: -15, ease: "outSine",duration: 250},
                {to: 15, ease: "inOutQuad",duration: 500},
            ],
            opacity: [
                {to: 1, ease: "outSine",duration: 250},
                {to: 0.5, ease: "inOutQuad",duration: 500},
            ],
            delay: stagger(100,{
                grid: [GRID_WIDTH, GRID_HEIGHT],
                from: +e.target.dataset.index,
            }),

        })
    }

    const dots = [];
    let index = 0;

    for(let i = 0; i < GRID_WIDTH; i++){
        for(let j = 0; j< GRID_HEIGHT; j++){
            dots.push(
                <div
                onClick={handleDotClick}
                className='group cursor-crosshair rounded-full p-2 transition-colors hover:bg-slate-500'
                data-index={index}
                key={`${i}-${j}`}
                >
                    <div
                    className='dot-point h-1 w-1 rounded-full bg-gradient-to-b from-slate-700 to-slate-400 opacity-50 group-hover:from-indigo-600 group-hover:to-white'
                   data-index={index}
                   >
                      
                    </div>

                </div>
            );
            index++;
        }
    }
    return <div
    style={{
        gridTemplateColumns: `repeat(${GRID_WIDTH}, minmax(0, 1fr))`,
    }}
    className='grid w-fit'
    >
{dots}
    </div>
}