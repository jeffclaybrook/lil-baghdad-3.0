import Appetizers from "@/components/Appetizers"
import Curry from "@/components/Curry"
import Desserts from "@/components/Desserts"
import Dishes from "@/components/Dishes"
import Drinks from "@/components/Drinks"
import Footer from "@/components/Footer"
import Header from "@/components/Header"

export default function Home() {
  return (
    <>
      <Header />
      <Appetizers />
      <Dishes />
      <Curry />
      <Desserts />
      <Drinks />
      <Footer />
    </>
  )
}