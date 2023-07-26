import EventPage from "./Component/EventPage"
import Modal from "./Component/Modal"
import CheckoutSuccess from "./Component/CheckoutSuccess"
import { Routes, Route } from "react-router-dom"
import "./App.css"

function App() {
return (
    <div>
    <Routes>
    <Route path='/' element={<EventPage />} />
    <Route path='/modal/' element={<Modal />} />
    <Route path="/checkoutSuccess" element={<CheckoutSuccess />} />
    </Routes>
    </div>
)
}


export default App;
