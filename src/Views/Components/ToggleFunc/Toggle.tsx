import React from 'react';
import {
  ToggleInput,
  ToggleBox,
  ToggleLabel,
  ToggleTitle,
  ToggleStatus,
  ToggleItem,
} from './Toggle.style';

interface lToggleInfo {
  label: string;
  labelFor: string;
  optionsLabels: string[];
}

interface lToggleProps {
  handleToggle: (e: React.ChangeEvent<HTMLInputElement>) => void;
  toggleInfo: lToggleInfo;
  toggle: boolean;
  inputRef: React.MutableRefObject<HTMLInputElement>;
}

function Toggle({ handleToggle, toggleInfo, toggle, inputRef }: lToggleProps) {
  return (
    <>
      <ToggleBox>
        <ToggleTitle htmlFor={toggleInfo.labelFor}>
          {toggleInfo.label}
        </ToggleTitle>
        <ToggleItem>
          <ToggleInput
            type="checkbox"
            id={toggleInfo.labelFor}
            ref={inputRef}
            onChange={handleToggle}
          />
          <ToggleLabel htmlFor={toggleInfo.labelFor}>
            <ToggleStatus
              data-yes={toggleInfo.optionsLabels[0]}
              data-no={toggleInfo.optionsLabels[1]}
            />
          </ToggleLabel>
        </ToggleItem>
        <p>
          설정
          <br /> {toggle ? '적용 완료' : '기본 상태'}
        </p>
      </ToggleBox>
    </>
  );
}

export default Toggle;
