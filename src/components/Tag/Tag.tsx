import { FC } from 'react';
import { IUserTagProps, UserTag } from './UserTag/UserTag.tsx';
import { DefaultTag, IDefaultTagProps } from './DefaultTag/DefaultTag.tsx';

type IUserTag = IUserTagProps & {
  tagType: 'user';
};

type IDefaultTag = IDefaultTagProps & {
  tagType: 'default';
};

type ITagProps = IUserTag | IDefaultTag;

export const Tag: FC<ITagProps> = (props) => {
  switch (props.tagType) {
    case 'user':
      return <UserTag {...props} />;
    case 'default':
      return <DefaultTag {...props} />;
    default:
      return null;
  }
};
