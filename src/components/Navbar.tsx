import Link from "next/link"
import Chevron from "./icons/Chevron"

interface NavbarProps {
 href: string
}

const Navbar = ({ href }: NavbarProps) => {
 return (
  <nav className="flex items-center justify-start p-4 mb-4">
   <Link href={href} className="btn btn-circle btn-ghost">
    <Chevron />
   </Link>
  </nav>
 )
}

export default Navbar