import Link from 'next/link'
import React from 'react'
import { useRouter } from 'next/router'
import useMobileDeviceDetection from "../../../hooks/useMobileDetection";

interface Props {
  href: string
  value: string
  canActive?: boolean
  className?: string
}

const NavLink = ({ href, value, canActive = false, className = '' }: Props) => {
  const router = useRouter()
  const isMobile = useMobileDeviceDetection()
  
  return (
    <Link href={href} passHref>
      <p
        className={`
          font-inter font-light leading-[16px] text-black select-none hover:text-grey
          ${router.pathname == href && canActive ? 'font-normal' : 'text-opacity-80 font-normal'}
          ${isMobile ? 'cursor-default' : 'cursor-pointer'}
          ${className}
        `}
        style={{ fontFamily: 'Inter, sans-serif' }}
      >
        {value}
      </p>
    </Link>
  )
}

export default NavLink