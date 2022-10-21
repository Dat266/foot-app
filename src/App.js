import "./App.css";
import CartDetail from "./components/CartDetail";
import Content from "./components/Layout/Content";
import Header from "./components/Layout/Header";

function App() {
    return (
        <div className="App">
            <Header />
            <Content />
            <CartDetail />
        </div>
    );
}

export default App;
