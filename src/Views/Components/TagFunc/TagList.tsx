import React from 'react';
import TagNew from './TagNew';
import { lList } from '../../../Core/Interface/lForm';

function TagList({ tags, onDeleteTag }: lList) {
  let tagsUI = tags.map((tag) => {
    return (
      <TagNew key={tag} value={tag} onDeleteTag={() => onDeleteTag(tag)} />
    );
  });
  return <>{tagsUI}</>;
}

export default TagList;
