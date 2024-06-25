import Card from "./Card"
import Section from "./Section"
import Separator from "./Separator"
import { desserts } from "@/constants"

const Desserts = () => {
 return (
  <Section title="Desserts" id="desserts">
   {desserts.map((item, i) => (
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

export default Desserts