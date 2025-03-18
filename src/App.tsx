import { Select } from './components/Select/Select.tsx';
import { useState } from 'react';
import { Option } from './components/Select/types/SelectTypes.ts';
import { createOptions } from './components/Select/__mocks__/createOptions.ts';

function App() {
  const [value, setValue] = useState<Option | null>(null);
  const [arrValue, setArrValue] = useState<Option[]>([]);

  return (
    <div style={{ width: '300px' }}>
      <Select value={value} isMultiple={false} onChange={setValue} options={createOptions()} />
      <Select value={arrValue} isMultiple={true} onChange={setArrValue} options={createOptions()} />
    </div>
  );
}

export default App;
