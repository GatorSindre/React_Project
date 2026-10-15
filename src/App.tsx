import dog from "./assets/dog.jpg"
import falcon from "./assets/falcon.jpg"
import airbus from "./assets/airbus.jpg"
import like from "./assets/like.png"

import Header from "./Header"
import AnimalCard from "./AnimalCard"
import Footer from "./Footer"

import { useState } from "react"

const dato = new Date().toLocaleDateString('nb-NO');

export default function App() {

  const [showAnimals, setShowAnimals] = useState(true);

  const [hundLikes, setHundLikes] = useState(0);
  const [falkLikes, setFalkLikes] = useState(0);
  const [airbusLikes, setAirbusLikes] = useState(0);

  const animal = [
    { id: 1, name: "Hund", description: "Hunder er bra", 
      fakta: ["Lever vanligvis er 10-13 år", "Spiser hundemat"],
      category: "rovdyr", image: dog
    },
    { id: 2, name: "Falk", description: "Skikkelig rask", 
      fakta: ["Kan stupe i over 300 km/t", "Spiser småfugler"],
      category: "rovdyr", image: falcon
    },
    { id: 3, name: "Airbus", description: "Flyr", 
      fakta: ["Transporterer andre flydeler", "Har et unikt utseende"],
      category: "livløs", image: airbus
    }
  ]

  return (
    <main style={{  
      padding: 0, 
      paddingBottom: 0,
      marginBottom: 0,  
      fontFamily:'Arial, sans-serif' 
      }}>
      <Header></Header>

      <button className="knapp" onClick={() => {
        setShowAnimals(!showAnimals);
      }} style={{
        marginBottom: 40,
        width: 60
      }}>
        {showAnimals ? "Skjul" : "Vis"}
      </button>
      
      {showAnimals && (
        <div style={{ 
          display: "flex", 
          justifyContent: "center", 
          gap: 50, 
          }}>
            
            {animal.map((animal) => (
              <AnimalCard
                key={animal.id}
                name={animal.name}
                description={animal.description}
                image={animal.image}
              />
            ))}

        </div>
      )}

      <Footer
        text={dato}
      />

    </main>
  )
}