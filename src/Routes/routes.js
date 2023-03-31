import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from '../components/HomePage/HomePage'

export default function Router() {
   return(
    <BrowserRouter>
      <Routes>
       <Route path="/" element={<HomePage />}/>
      </Routes>
    </BrowserRouter>
   );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Router />);