import Radio from "./lib";
import "./app.css";
import { useState } from "react";

function App() {
  const [isSelected, setIsSelected] = useState("");
  return (
    <div className="App">
      <Radio
        defaultValue={isSelected}
        label="label"
        labelColor="#242424"
        checkedColor="#242424"
        unCheckedColor="#7fffd4"
        iconColor="#ffffff"
        name="label"
        onChange={(e) => {
          setIsSelected(e.target.value);
        }}
      />
      <Radio
        defaultValue={isSelected}
        label="label"
        labelColor="#242424"
        checkedColor="#242424"
        unCheckedColor="#7fffd4"
        iconColor="#ffffff"
        name="label"
        onChange={(e) => {
          setIsSelected(e.target.value);
        }}
      />
    </div>
  );
}

export default App;
