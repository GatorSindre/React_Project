import dog from "./assets/dog.jpg"
import falcon from "./assets/falcon.jpg"
import airbus from "./assets/airbus.jpg"

import Header from "./Header"
import AnimalCard from "./AnimalCard"
import Footer from "./Footer"

const dato = new Date().toLocaleDateString('nb-NO');

export default function App() {
  return (
    <main style={{  padding: 20,  fontFamily:'Arial, sans-serif' }}>

      <Header></Header>

      <div style={{ display: "flex", justifyContent: "center", gap: 50 }}>
      <AnimalCard
        name="Hund"
        description="Hunder er bra"
        image={dog}
        fakta={['Vanligvis 10–13 år', 'Spiser hundemat']}
      />
      <AnimalCard
        name="Falk"
        description="Skikkelig rask"
        image={falcon}
        fakta={['Kan stupe i over 300 km/t', 'Spiser småfugler']}
      />
      <AnimalCard
        name="The Airbus Beluga Airplane"
        description="Flyr"
        image={airbus}
        fakta={['Transporterer andre flydeler', 'Har et unikt utsende']}
      />
      </div>

      <Footer
        text={dato}
      />

    </main>
  )
}