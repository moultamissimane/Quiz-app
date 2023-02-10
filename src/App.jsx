import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Result from "./pages/Result";
import { Provider as ReduxProvider} from "react-redux";
import store from "./app/features/store";
import Questions from "./pages/Questions";


function App() {
  return (
    <BrowserRouter>
    <ReduxProvider store={store}>

      <Routes>
        <Route path="/" element={<h1 >Hello</h1>} />
        <Route path="/home" element={<Home />} />
        <Route path="/questions/:id" element={<Questions />} />
        <Route path="/result" element={<Result />} />
        <Route path="*" element={<>404</>} />
      </Routes>
    </ReduxProvider>
    </BrowserRouter>
  );
}

export default App;
