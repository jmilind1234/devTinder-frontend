import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/Login";

function App() {
  return (
    <>
    <LoginPage/>
      {/* <BrowserRouter basename="/">
        <Routes>
          <Route path="/login" element={}/>
         </Routes>
      </BrowserRouter> */}
    </>
  )
}

export default App
