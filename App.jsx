import "./App.css";
import Product from "./components2/Product";
import products from "./components2/database.json";


function App() {
    <div style={{display: "flex", 
        flexWrap: "wrap",
        justifyContent: "center",
        gap: "5px",
        height: "100vh",
        alignItems: "center"
    }}>
    {products.map((products)) => {
        return <Product product = {product} key ={product.id}/>;
    }}

     </div>

}
export default App;
