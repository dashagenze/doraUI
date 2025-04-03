import ReactIcon from './assets/react.svg?react';
import { Tag } from './components/Tag/Tag.tsx';

function App() {
  return (
    <div>
      <Tag tagType={'user'} size={'big'} canDelete={true} onDelete={() => {}} name={'Cassie'} />
      <Tag tagType={'user'} size={'big'} name={'Jenny'} avatar={'https://placebear.com/300/300'} />
      <Tag
        tagType={'default'}
        size={'middle'}
        canDelete={true}
        onDelete={() => {}}
        text={'best text when tag is working'}
        icon={<ReactIcon />}
      />
    </div>
  );
}

export default App;
