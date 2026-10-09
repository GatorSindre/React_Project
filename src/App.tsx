import dog from "./assets/dog.jpg"
import AnimalCard from "./AnimalCard"

export default function App() {
  return (
    <main style={{  padding: 20,  fontFamily:'Arial, sans-serif' }}>
      <h1>Mitt favorittdyr</h1>
      <AnimalCard
        name="Mitt dyr"
        description="Hunder er bra"
        image={dog}
      />
    </main>
  )
}