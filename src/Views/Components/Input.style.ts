import styled from 'styled-components';
import { lInputWidth } from '../../Core/Interface/lStyle';

const CommonInput = styled.input`
  display: block;
  width: 100%;
  box-sizing: border-box;
  padding: 5px 5px 5px 12px;
`;

export const InputWrapper = styled.div<lInputWidth>`
  width: ${({ inputWithBtn }: lInputWidth) => inputWithBtn}px;
`;

export const SearchInput = styled(CommonInput).attrs({
  placeholder: '검색어를 입력하세요',
})``;

export const VideoInput = styled(CommonInput).attrs({
  placeholder: 'url을 입력해주세요',
})``;

export const TagInput = styled(CommonInput).attrs({
  placeholder: '태그를 입력하세요',
});
