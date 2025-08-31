import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginForm from "./organisms/LoginForm";
import SignUpForm from "./organisms/SignUpForm";

function App() {
  return (
    <>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<LoginForm />}/>
          <Route path="/signup" element={<SignUpForm />}/>
         </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
