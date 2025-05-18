import "./App.css";
import Listing from "./Listing.tsx";
import listingsData from "./data/etsy.json";

function App() {
  return (
    <div className="App">
      <Listing items={listingsData} />
    </div>
  );
}

export default App;
