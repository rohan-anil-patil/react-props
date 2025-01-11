import "./App.css";
import Cards from "./Components/Cards/Cards";

function App() {
  const products = [
    {
      name: "Card 1",
      image:
        "https://asapkerala.gov.in/wp-content/uploads/2021/09/Cyber-Security-Security-Operations-Centre-Analyst.jpeg",
      description: "This is card 1",
    },
    {
      name: "Card 2",
      image:
        "https://asapkerala.gov.in/wp-content/uploads/2021/09/Cyber-Security-Security-Operations-Centre-Analyst.jpeg",
      description: "This is card 2",
    },
    {
      name: "Card 3",
      image:
        "https://asapkerala.gov.in/wp-content/uploads/2021/09/Cyber-Security-Security-Operations-Centre-Analyst.jpeg",
      description: "This is card 3",
    },
    {
      name: "Card 4",
      image:
        "https://asapkerala.gov.in/wp-content/uploads/2021/09/Cyber-Security-Security-Operations-Centre-Analyst.jpeg",
      description: "This is card 4",
    },
    {
      name: "Card 5",
      image:
        "https://asapkerala.gov.in/wp-content/uploads/2021/09/Cyber-Security-Security-Operations-Centre-Analyst.jpeg",
      description: "This is card 5",
    },
    {
      name: "Card 6",
      image:
        "https://asapkerala.gov.in/wp-content/uploads/2021/09/Cyber-Security-Security-Operations-Centre-Analyst.jpeg",
      description: "This is card 6",
    },
    {
      name: "Card 7",
      image:
        "https://asapkerala.gov.in/wp-content/uploads/2021/09/Cyber-Security-Security-Operations-Centre-Analyst.jpeg",
      description: "This is card 7",
    },
    {
      name: "Card 8",
      image:
        "https://asapkerala.gov.in/wp-content/uploads/2021/09/Cyber-Security-Security-Operations-Centre-Analyst.jpeg",
      description: "This is card 8",
    },
    {
      name: "Card 9",
      image:
        "https://asapkerala.gov.in/wp-content/uploads/2021/09/Cyber-Security-Security-Operations-Centre-Analyst.jpeg",
      description: "This is card 9",
    },
  ];

  return (
    <div className="container">
      <h2 className="main-title">All cards are here</h2>
      <Cards products={products} />
    </div>
  );
}

export default App;
