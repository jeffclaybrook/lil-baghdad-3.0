import Card from "./Card"
import Section from "./Section"
import Separator from "./Separator"
import { dishes } from "@/constants"

const Dishes = () => {
 return (
  <Section title="Dishes" id="dishes">
   {dishes.map((item, i) => (
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

export default Dishes