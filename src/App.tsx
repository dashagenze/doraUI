import {Select} from "./components/Select/Select.tsx";
import {useState} from "react";
import {Option} from "./components/Select/types/SelectTypes.ts";
import {options} from "./components/Select/mocks/options.ts";

function App() {
  const [value, setValue] = useState<Option | null>(null);
  const [arrValue, setArrValue] = useState<Option[]>([]);

  return (
    <div style={{width:'300px'}}>
      <Select value={value} isMultiple={false} onChange={setValue} options={options} />
      <Select value={arrValue} isMultiple={true} onChange={setArrValue} options={options} />
    </div>
  )
}

export default App
