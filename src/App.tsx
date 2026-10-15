import dog from "./assets/dog.jpg"
import falcon from "./assets/falcon.jpg"
import airbus from "./assets/airbus.jpg"
import like from "./assets/like.png"

import Header from "./Header"
import AnimalCard from "./AnimalCard"
import Footer from "./Footer"
import Like from "./Like"

import { useState } from "react"

const dato = new Date().toLocaleDateString('nb-NO');

export default function App() {

  const [showAnimals, setShowAnimals] = useState(true);

  const [hundLikes, setHundLikes] = useState(0);

  const [falkLikes, setFalkLikes] = useState(0);

  const [airbusLikes, setAirbusLikes] = useState(0);

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
          <div className="vertikalSeksjon">
            <AnimalCard
              name="Hund"
              description="Hunder er bra"
              image={dog}
              fakta={['Vanligvis 10–13 år', 'Spiser hundemat']}
            />
            <div style={{display: "flex", paddingTop: 10 }} onClick={()=> {
                setHundLikes(hundLikes+1)
              }}>
              <h1>{hundLikes}</h1>
              <Like></Like>
            </div>
          </div>
          <div className="vertikalSeksjon">
            <AnimalCard
              name="Falk"
              description="Skikkelig rask"
              image={falcon}
              fakta={['Kan stupe i over 300 km/t', 'Spiser småfugler']}
            />
            <div style={{display: "flex", paddingTop: 10 }} onClick={()=> {
                setFalkLikes(falkLikes+1)
              }}>
              <h1>{falkLikes}</h1>
              <Like></Like>
            </div>
          </div>
          <div className="vertikalSeksjon">
            <AnimalCard
              name="The Airbus"
              description="Flyr"
              image={airbus}
              fakta={['Transporterer andre flydeler', 'Har et unikt utsende']}
            />
            <div style={{display: "flex", paddingTop: 10 }} onClick={()=> {
                setAirbusLikes(airbusLikes+1)
              }}>
              <h1>{airbusLikes}</h1>
              <Like></Like>
            </div>
          </div>
        </div>
      )}

      <Footer
        text={dato}
      />

    </main>
  )
}