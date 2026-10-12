import dog from "./assets/dog.jpg"
import falcon from "./assets/falcon.jpg"
import airbus from "./assets/airbus.jpg"

import Header from "./Header"
import AnimalCard from "./AnimalCard"
import Footer from "./Footer"

import { useState } from "react"

const dato = new Date().toLocaleDateString('nb-NO');

export default function App() {

  const [showAnimals, setShowAnimals] = useState(false);

  return (
    <main style={{  
      padding: 0, 
      paddingBottom: 0,
      marginBottom: 0,  
      fontFamily:'Arial, sans-serif' 
      }}>
      <Header></Header>

      <button onClick={() => setShowAnimals(!showAnimals)} style={{
        marginBottom: 40
      }}>
        {showAnimals ? "Skjul" : "Vis"}
      </button>

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
        name="The Airbus"
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