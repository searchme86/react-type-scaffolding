import React from 'react';
import TagNew from './TagNew';
import { lList } from '../../../Core/Interface/lForm';

function TagList({ tags, onDeleteTag }: lList) {
  let tagsUI = tags.map((tag, index) => {
    return (
      <TagNew key={index} value={tag} onDeleteTag={() => onDeleteTag(tag)} />
    );
  });
  return <>{tagsUI}</>;
}

export default TagList;
