import { useState } from "react";
import Navbar from "./components/Navbar";
import Product from "./components/Product";

function App() {
    const [selectedOption, setSelectedOption] = useState({
        product: "all",
        rating: "all",
        sort: "name",
    });

    function handleOption(value) {
        setSelectedOption(value);
    }

    return (
        <div className="w-screen h-screen  bg-slate-100">
            <Navbar handleOption={handleOption} />
            <Product productToShow={selectedOption} />
        </div>
    );
}

export default App;
