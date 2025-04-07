import { FC } from 'react';
import { IUserTagProps, UserTag } from './UserTag/UserTag.tsx';
import { DefaultTag, IDefaultTagProps } from './DefaultTag/DefaultTag.tsx';
import { TagType } from './utils/tagTypes.ts';

type IUserTag = IUserTagProps & {
  type: TagType.USER;
};

type IDefaultTag = IDefaultTagProps & {
  type: TagType.DEFAULT;
};

type ITagProps = IUserTag | IDefaultTag;

export const Tag: FC<ITagProps> = (props) => {
  switch (props.type) {
    case TagType.USER:
      return <UserTag {...props} />;
    case TagType.DEFAULT:
      return <DefaultTag {...props} />;
    default:
      return null;
  }
};
