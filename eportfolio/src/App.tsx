import { USER_INFO } from "../constants";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <>
      <div className="min-h-screen bg-base-100">
        <Header userInfo={USER_INFO} />
        <Body />
        <Footer userInfo={USER_INFO} />
      </div>
    </>
  );
}

export default App;
