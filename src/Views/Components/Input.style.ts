import styled from 'styled-components';
import { lBoxStyle } from '../../Core/Interface/lStyle';

const CommonInput = styled.input`
  display: block;
  width: 100%;
  box-sizing: border-box;
  padding: 5px 5px 5px 12px;
`;

export const InputWrapper = styled.div<lBoxStyle>`
  display: inline-block;
  vertical-align: top;
  width: ${({ inputWithBtn }: lBoxStyle) => inputWithBtn}px;
  margin-right: ${({ fromRight }: lBoxStyle) => fromRight}px;
`;

export const InputFull = styled.div<lBoxStyle>`
  width: ${({ inputFull }: lBoxStyle) => inputFull}%;
  height: 32px;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  input
`;

export const SearchInput = styled(CommonInput).attrs({
  placeholder: '검색어를 입력하세요',
})``;

export const VideoInput = styled(CommonInput).attrs({
  placeholder: 'url을 입력해주세요',
})``;

export const TagInput = styled(CommonInput).attrs({
  placeholder: '태그를 입력하세요',
})`
  background: yellow;
`;

export const ChoiceOne = styled.input``;
