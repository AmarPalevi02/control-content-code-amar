import { ReactNode } from "react"
import { RiContactsLine } from "react-icons/ri";
import { FaBlog } from "react-icons/fa6";
import { PiToolboxFill } from "react-icons/pi";
import { RiHome4Line } from "react-icons/ri";

interface NavItems {
   path: string,
   name: string,
   icon: ReactNode
}

export const navItems: NavItems[] = [
   {
      path: '/',
      name: 'Home',
      icon: <RiHome4Line />
   },
   {
      path: '/bio',
      name: 'Bio',
      icon: <RiContactsLine />
   },
   {
      path: '/blog',
      name: 'Blog',
      icon: <FaBlog />
   },
   {
      path: '/project',
      name: 'Project',
      icon: <PiToolboxFill />
   }
]