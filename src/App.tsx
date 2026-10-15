import dog from "./assets/dog.jpg"
import falcon from "./assets/falcon.jpg"
import airbus from "./assets/airbus.jpg"
import horse from "./assets/horse.jpg"

import Header from "./Header"
import AnimalCard from "./AnimalCard"
import Footer from "./Footer"

import { useState } from "react"

const dato = new Date().toLocaleDateString('nb-NO');

export default function App() {

  const [showAnimals, setShowAnimals] = useState(true);

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
      fakta: ["Transporterer flydeler", "Unikt utseende"],
      category: "livløs", image: airbus
    },
    { id: 4, name: "Horse", description: "Yeehaw", 
      fakta: ["Puster ikke gjennom munnen", "Sover stående"],
      category: "husdyr", image: horse
    }
  ]

  const [search, setSearch] = useState("");

  const visibleAnimals = animal.filter((animal) =>
  animal.name.toLowerCase().includes(search.toLowerCase())
  );


  return (
    <main style={{  
      padding: 0, 
      paddingBottom: 0,
      marginBottom: 0,  
      fontFamily:'Arial, sans-serif' 
      }}>
      <Header></Header>

      <input 
        type="text" 
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Søk etter dyr..."
        style={{
          padding: 8,
          fontSize: 16,
          width: '100%',
          maxWidth: 420,
          boxSizing: "border-box",
        }}
      />

      <button className="knapp" onClick={() => {
        setShowAnimals(!showAnimals);
      }} style={{
        marginBottom: 50,
        width: 60
      }}>
        {showAnimals ? "Skjul" : "Vis"}
      </button>
      
      {showAnimals && (
        <div style={{ 
          display: "flex", 
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center", 
          maxWidth: 1200,
          margin: "0 auto",
          gap: 50, 
          }}>
            
            {visibleAnimals.map((animal) => (
              <AnimalCard
                key={animal.id}
                name={animal.name}
                description={animal.description}
                fakta={animal.fakta}
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