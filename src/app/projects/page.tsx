import { Metadata } from 'next'
import React from 'react'

type Props = {}

export const metadata: Metadata = {
  title: "Ali D Coded - My works",
  description: "Ali Afthab aka ali-d-coded's personal portfolio website",
}
export default function page({}: Props) {
  return (
    <div>page</div>
  )
}