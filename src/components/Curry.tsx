import Card from "./Card"
import Section from "./Section"
import Separator from "./Separator"
import { curry } from "@/constants"

const Curry = () => {
 return (
  <Section title="Curry" id="curry">
   {curry.map((item, i) => (
    <Card
     key={i}
     image={item.image}
     title={item.title}
     price={item.price}
     href={item.href}
    />
   ))}
   <Separator />
  </Section>
 )
}

export default Curry