import { BrowserRouter, Route, Routes} from "react-router-dom";
import { Toaster} from "react-hot-toast";
import './App.css';
import Home from "./pages/Home";
import EditorPage from "./pages/EditorPage";

function App() {
  return (
    <div>
      <div>
        <Toaster 
          position= "top-right" toastOptions=
          {{
            success: {
              theme: {
                primary: "#32f800",
              },
            },
          }} 
        >
        </Toaster>
      </div>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="editor/:roomId" element={<EditorPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
