import Card from "./Card"
import Section from "./Section"
import { drinks } from "@/constants"

const Drinks = () => {
 return (
  <Section title="Drinks" id="drinks">
   {drinks.map((item, i) => (
    <Card
     key={i}
     image={item.image}
     title={item.title}
     price={item.price}
     href={item.href}
    />
   ))}
  </Section>
 )
}

export default Drinks