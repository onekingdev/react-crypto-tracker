import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Header from "./Components/Header";
import HomePage from "./Pages/HomePage";
import CoinPage from "./Pages/CoinPage";
import { makeStyles } from "@material-ui/core";

function App() {
  const useStyle = makeStyles(() => ({
    App: {
      backgroundColor: "#14161a",
      color: 'white',
      minHeight: '100vh'
    }
  }));
  const classes = useStyle();
  return (
    <BrowserRouter>
      <div className={classes.App}>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} exact />
          <Route path="/coins/:id" element={<CoinPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
