//import { greet } from "./utils/greet";
import MainContent from "./Components/MainContent";
import PageHeader from "./Components/PageHeader";
import PageFooter from "./Components/PageFooter";
import './index.css';

function App(): JSX.Element {
  return (
  // <h1>{greet("World")}</h1>;
  <>
      <PageHeader />
      <MainContent />
      <PageFooter />
    </>
  )
}

export default App;
