import Link from "next/link"
import Image from "next/image"
import Facebook from "./icons/Facebook"
import Instagram from "./icons/Instagram"
import Google from "./icons/Google"
import Phone from "./icons/Phone"

const links = [
 { href: "https://www.facebook.com/profile.php?id=100074970285412/", icon: <Facebook /> },
 { href: "https://www.instagram.com/desireddishes/", icon: <Instagram /> },
 { href: "https://maps.app.goo.gl/tWPKAk5hpr35QfVx5", icon: <Google /> },
 { href: "tel:(512)-831-8122", icon: <Phone /> }
]

const Footer = () => {
 return (
  <footer className="flex flex-col items-center justify-center gap-6 py-12 mt-24 px-4 border-t border-slate-500">
   <Link href="/">
    <Image
     src="/logo.png"
     alt="Lil Baghdad"
     width={140}
     height={140}
     className="rounded-full object-cover"
    />
   </Link>
   <ul className="flex items-center justify-center gap-5">
    {links.map((item, i) => (
     <li key={i}>
      <a
       href={item.href}
       target="_blank"
       rel="noreferrer"
       className="btn btn-circle btn-outline"
      >
       {item.icon}
      </a>
     </li>
    ))}
   </ul>
   <a
    href="https://maps.app.goo.gl/tWPKAk5hpr35QfVx5"
    target="_blank"
    rel="noreferrer"
    className="flex flex-col items-center"
   >
    <span>1006 Bleu Spur</span>
    <span>Copperas Cove, TX 76522</span>
   </a>
  </footer>
 )
}

export default Footer