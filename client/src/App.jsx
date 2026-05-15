import { useState } from "react";
import MainRouter from "./routes/MainRouter";
import { AuthProvider } from "./contexts/AuthContext";


function App() {
  const [count, setCount] = useState(0);

  return (
    <AuthProvider>
      <MainRouter />
    </AuthProvider>

  );
}

export default App;
