import {Select} from "./components/Select/Select.tsx";
import {useState} from "react";
import {Option} from "./components/Select/types/SelectTypes.ts";
const options: Option[] = [{id: '1', value: 'Josh'}, {id: '2', value: 'Josh'}, {id: '3', value: 'Laura'}, {id: '4', value: 'Greg'}];


function App() {
  const [value, setValue] = useState<Option | null>(null);
  const [arrValue, setArrValue] = useState<Option[]>([]);

  return (
    <div style={{cursor: 'pointer'}}>
      <p>{value?.value}</p>
      <div>{arrValue.map(item => <span key={item.id}>{item.value}</span>)}</div>
      {/*<Select value={value} isMultiple={false} onChange={setValue} options={options} />*/}
      <Select value={arrValue} isMultiple={true} onChange={setArrValue} options={options} />
    </div>
  )
}

export default App
