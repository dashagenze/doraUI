import ReactIcon from './components/Icon/assets/react.svg?react';
import { Tag } from './components/Tag/Tag.tsx';
import { TagType } from './components/Tag/utils/tagTypes.ts';
import { Size } from './shared/types/size.ts';
import './App.scss';

function App() {
  return (
    <div>
      <Tag
        color={'#1a1'}
        type={TagType.USER}
        size={Size.BIG}
        canDelete={true}
        onDelete={() => {}}
        name={'Cassie'}
      />
      <Tag
        type={TagType.USER}
        size={Size.BIG}
        name={'Jenny'}
        avatar={'https://placebear.com/300/300'}
      />
      <Tag
        type={TagType.DEFAULT}
        size={Size.SMALL}
        canDelete={true}
        onDelete={() => {}}
        text={'best text when tag is working'}
        icon={<ReactIcon />}
      />

      <Tag
        type={TagType.DEFAULT}
        size={Size.BIG}
        canDelete={true}
        onDelete={() => {}}
        text={'best text when tag is working'}
        icon={<ReactIcon />}
      />
    </div>
  );
}

export default App;
