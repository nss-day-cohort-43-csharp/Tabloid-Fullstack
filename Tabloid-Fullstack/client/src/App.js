import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import ApplicationViews from "./components/ApplicationViews";
import { UserProfileProvider } from "./providers/UserProvider";

function App() {
  return (
    <div className="App">
      <UserProfileProvider>
        <Router>
          <ApplicationViews />
        </Router>
      </UserProfileProvider>
    </div>
  );
}

export default App;
