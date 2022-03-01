import React from 'react';
import { lTagN } from '../../../Core/Interface/lForm';
import { TagCompItem, TagCompList } from './Tag.style';

function TagNew({ onDeleteTag, value }: lTagN) {
  let tag = (
    <TagCompList>
      <TagCompItem onClick={() => onDeleteTag(value)}>{value}</TagCompItem>
    </TagCompList>
  );
  return <>{tag}</>;
}

export default TagNew;
