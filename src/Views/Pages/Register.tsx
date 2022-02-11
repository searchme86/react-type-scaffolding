import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Dim from '../Components/Modal/Dim';
import Modal from '../Components/Modal/Modal';
import { PageContentWrapper } from '../Layout/Layout.style';
import useAuth from '../../Server/useAuth';
import { TextHidden } from '../Assets/Styles/Common.style';
import { InputWrapper, VideoInput } from '../Components/Input.style';
import { Youtube, VideoArea } from '../Assets/Styles/Register.style';
import { UrlBtn } from '../Components/Button.style';

function Register() {
  const { user } = useAuth();
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const navigate = useNavigate();
  const redirect = () => {
    navigate('/completed');
  };

  // const widdth = 120;

  const RegisterStyle = {
    InputWithBtn: 408,
    InputFull: 100,
  };

  return (
    <PageContentWrapper>
      <h1>제목을 입력하세요</h1>
      <div>
        <form>
          <Youtube>
            <fieldset>
              <TextHidden>
                <legend>영상주소를 입력하는 공간입니다.</legend>
              </TextHidden>
              <InputWrapper inputWithBtn={RegisterStyle.InputWithBtn}>
                <VideoInput />
              </InputWrapper>
              <UrlBtn>입력</UrlBtn>
              <VideoArea />
            </fieldset>
          </Youtube>
          <div>
            <fieldset>
              <strong>장르</strong>
              <ul>
                <li>
                  <button>LOFI</button>
                </li>
                <li>
                  <button>POP</button>
                </li>
                <li>
                  <button>K-POP</button>
                </li>
                <li>
                  <button>영화음악</button>
                </li>
                <li>
                  <button>재즈음악</button>
                </li>
                <li>
                  <button>기타</button>
                </li>
              </ul>
            </fieldset>
          </div>
          <div>
            <fieldset>
              <TextHidden>
                <legend>태그를 입력해주세요</legend>
              </TextHidden>
            </fieldset>
          </div>

          <div>
            <button onClick={openModal}>취소</button>
            <button onClick={redirect}>작성</button>
          </div>
        </form>
      </div>
      <Link to="/">홈으로</Link>
      <div>
        {modalOpen && <Dim />}
        {modalOpen && (
          <Modal close={closeModal}>정말 등록을 취소하시겠습니까?</Modal>
        )}
      </div>
      {user ? (
        <h1>유저의 이름은 {user.displayName}입니다</h1>
      ) : (
        <p>로그인 해주세요!</p>
      )}
    </PageContentWrapper>
  );
}

export default Register;
