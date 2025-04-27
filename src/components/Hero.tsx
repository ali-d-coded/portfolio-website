import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import WaterDropGrid from './ui/WaterDropGrid'

type Props = {}



export default function Hero({}: Props) {
  return (
    <div className='grid grid-cols-2 h-full relative '>
      <Image className='absolute  right-1' src="/background-blurs.svg" alt="hero" width={1050} height={1000} />
        <section className='grid place-items-center justify-end '>
            <div className='grid gap-15'>
              <div>
                  <p className='text-[18px]'>
                    Hi, I'm
                  </p>
                  <h1 className='text-[70px]'>
                    Ali Afthab
                  </h1>
                  <h2 className='text-[30px] text-indigo-500'>
                    {'>'} Full Stack Developer
                  </h2>
              </div>

            <div>
                <p className='text-slate-400'>
                // find my profile on Github:
                </p>
                <p>
              <span className='text-indigo-500'> const </span>  <span className='text-teal-400'>githubLink</span> = <span className='text -rose-300'> <Link href="https://github.com/ali-d-coded" target='_blank'> “https://github.com/ali-d-coded” </Link> </span>
                </p>
            </div>
            </div>
        </section>

        <section className='grid place-items-center'>
            <WaterDropGrid />
        </section>
    </div>
  )
}