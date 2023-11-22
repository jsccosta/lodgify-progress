
import "./App.scss";
import { Accordion } from "./components/Accordion/accordion";

import { groupedTasks } from "./data";

function App() {
  return (
    <div className="App">
      <Accordion content={groupedTasks} accordionTitle={"Lodgify Grouped Tasks"} />
    </div>
  );
}

export default App;
