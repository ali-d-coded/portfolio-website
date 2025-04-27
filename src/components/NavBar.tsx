"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

type Props = {}

const navItems = [
  {
    label: "_hello",
    link: "/",
  },
  {
    label: "_about-me",
    link: "/about",
  },
  {
    label: "_projects",
    link: "/projects",
  },
  {
    label: "_contact",
    link: "/contact",
  },
]

export default function NavBar({}: Props) {
  const pathname = usePathname()

  return (
    <div className="border border-slate-800  text-base text-slate-500">
      <div className="flex items-center">
        <p className="w-[250px] px-[24px]">
      <Link href={'/'}>
            ali-d-coded
      </Link>
            </p>

        <div className="flex w-full ">
          {navItems.map((item, index) => {
            const isActive = pathname === item.link

            return (
              <Link
                href={item.link}
                key={index}
                className={`border border-x-slate-800 border-y-0 py-[16px] px-[32px] last:ml-auto last:border-r-0 ${isActive ? "text-white border-b-2 border-b-amber-300" : ""}`}
              >
                {item.label}
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}
