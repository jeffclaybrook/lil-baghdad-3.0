import { SVGProps } from "react"

const Scroll = (props: SVGProps<SVGSVGElement>) => {
 return (
  <svg
   xmlns="http://www.w3.org/2000/svg"
   viewBox="0 96 960 960"
   height="24"
   width="24"
   fill="currentColor"
   {...props}
  >
   <path
    d="M480 591q-6 0-11-2t-10-7L261 384q-9-9-9-21t9-21q9-9 21-9t21 9l177 177 177-177q9-9 21-9t21 9q9 9 9 21t-9 21L501 582q-5 5-10 7t-11 2Zm0 253q-6 0-11-2t-10-7L261 637q-9-9-9-21t9-21q9-9 21-9t21 9l177 177 177-177q9-9 21-9t21 9q9 9 9 21t-9 21L501 835q-5 5-10 7t-11 2Z"
   />
  </svg>
 )
}

export default Scroll