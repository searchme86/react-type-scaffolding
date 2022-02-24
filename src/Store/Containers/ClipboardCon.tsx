import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ClipboardComp from '../../Views/Components/ClipboardFunc/ClipboardComp';
import { RootState } from '../Modules';
import { copy } from '../Modules/mClipboard';

function ClipboardCon() {
  const { copied } = useSelector((state: RootState) => state.ClipText);
  const dispatch = useDispatch();

  const onCopy = (value: string, result: boolean) => {
    dispatch(copy(value, result));
  };

  return (
    <>
      <ClipboardComp copied={copied} onCopy={onCopy} />
    </>
  );
}

export default ClipboardCon;
