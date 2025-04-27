import Link from 'next/link'
import React from 'react'
import { Icon } from '@iconify-icon/react';

type Props = {}

const socialLinks = [
    {
        label:"linkedin",
        icon:<Icon icon="arcticons:linkedin" width="48" height="48" />,
        link:"#"
    },
    {
        label:"ali-d-coded",
        icon:<Icon icon="arcticons:github" width="48" height="48" />,
        link:"#"
    }
]
export default function Footer({}: Props) {
  return (
    <div className='border border-slate-800 flex '>
        <p className='py-[16px] px-[24px] w-[200px]'>
            find me-in:
        </p>
        <div className="flex w-full ">
          {socialLinks.map((item, index) => {

            return (
              <Link
                href={item.link}
                key={index}
                className={`border border-x-slate-800 border-y-0 py-[16px] px-[32px] last:ml-auto last:border-r-0 `}
              >
                {item.label}
                {item.icon}
              </Link>
            )
          })}
        </div>
    </div>
  )
}