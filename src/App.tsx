import { UserTag } from './components/Tag/UserTag/UserTag.tsx';
import { Avatar } from './components/Avatar/Avatar.tsx';
import { Tag } from './components/Tag/Tag.tsx';

function App() {
  return (
    <div style={{ width: '300px' }}>
      <Tag content={'qqq'} size={'small'} />
      <UserTag
        size={'big'}
        avatar={'https://placebear.com/300/300'}
        name={'Jenny Costys'}
        canDelete={true}
        onDelete={() => {}}
      />

      <Avatar
        name={'Kyle'}
        shape={'circle'}
        src={'https://api.dicebear.com/9.x/dylan/svg?seed=Felix'}
      />
    </div>
  );
}

export default App;
