import Card from "./Card"
import Section from "./Section"
import Separator from "./Separator"
import { appetizers } from "@/constants"

const Appetizers = () => {
 return (
  <Section title="Appetizers" id="appetizers">
   {appetizers.map((item, i) => (
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

export default Appetizers