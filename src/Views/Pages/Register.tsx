import { useState, useEffect } from 'react';
import Dim from '../Components/Modal/Dim';
import Modal from '../Components/Modal/Modal';
import {
  PageContentWrapper,
  PageTitle,
  PageContent,
  PageSubtitle,
} from '../Layout/Layout.style';
import { TextHidden } from '../Assets/Styles/Common.style';
import { InputWrapper, VideoInput } from '../Components/Input.style';
import {
  Youtube,
  VideoArea,
  TagGroup,
  VideoText,
  Genre,
  TagContent,
  FireBtnArea,
  ValidateText,
  IsBlank,
} from '../Assets/Styles/Register.style';
import { RegisterBtn, UrlBtn } from '../Components/Button.style';
import { Img, ImgWrapper } from '../Components/Picture.style';
import Radio from '../Components/Radio';
import TextArea from '../Components/TextArea';
import HolderTag from '../Components/TagFunc/HolderTag';
import { useNavigate } from 'react-router';
import getYouTubeID from 'get-youtube-id';
import { useForm } from 'react-hook-form';
import { LogIn } from '../../Core/Config/AssetPath';

interface lForm {
  YoutubeUrl: string;
  extraError: string;
}

function Register() {
  const idRegex =
    /(?:youtube(?:-nocookie)?\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<lForm>({
    defaultValues: {
      YoutubeUrl: '',
    },
  });

  const onValid = (data: lForm) => {
    if (!data.YoutubeUrl) {
      setError(
        'YoutubeUrl',
        { message: 'youtube link is empty' },
        { shouldFocus: true }
      );
    }
    setError('extraError', { message: 'Server offline' });
  };

  const RegisterStyle = {
    InputWithBtn: 408,
    InputFull: 100,
    fromAbove: 10,
    fromRight: 16,
  };

  const navigate = useNavigate();
  useEffect(() => {
    let authToken = sessionStorage.getItem('Auth Token');
    if (authToken) {
      navigate('/');
    }
  }, [navigate]);

  const [modalOpen, setModalOpen] = useState(false);

  const [videoUrl, setVideoUrl] = useState('');
  const [youtubeId, setYoutubeid] = useState('');
  //isUrl url이 있냐 없냐
  //isUrl false: 돔이 보임
  const [isUrl, setIsUrl] = useState(false);
  //isblank true: 비어있다,
  const [isBlank, setIsBlank] = useState(false);
  const [src, setSrc] = useState('');

  const openModal = (event: React.FormEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  const handleCheck = () => {
    if (!videoUrl.match(idRegex)) {
      setIsUrl(false);
      console.log('isUrl', isUrl);
    } else {
      setYoutubeid(getYouTubeID(videoUrl));
      setIsUrl(true);
      console.log('isUrl', isUrl);
    }
  };

  const handleUrl = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = e;
    setVideoUrl(value);
    handleCheck();
    console.log('videoUrl', videoUrl);
    isBlankCheck();
  };

  const handleCheckUrl = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsUrl(true);
    setIsBlank(false);
    handleCheck();
    isBlankCheck();
  };

  const isBlankCheck = () => {
    if (videoUrl.trim().length <= 1) {
      setIsUrl(false);
      console.log('현재 인풋창은 비어있습니다.');
    }
  };

  // const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();
  // };

  return (
    <PageContentWrapper>
      <PageTitle>음악정보를 입력해주세요</PageTitle>
      <PageContent fromAbove={RegisterStyle.fromAbove}>
        <form onSubmit={handleSubmit(onValid)}>
          <Youtube>
            <TextHidden>
              <legend>영상주소를 입력하는 공간입니다.</legend>
            </TextHidden>
            <InputWrapper
              inputWithBtn={RegisterStyle.InputWithBtn}
              fromRight={RegisterStyle.fromRight}
            >
              <VideoInput onChange={handleUrl} value={videoUrl} />
            </InputWrapper>
            <UrlBtn onClick={handleCheckUrl}>입력</UrlBtn>
            {isUrl ? null : (
              <ValidateText>유효한 YouTube url이 아닙니다</ValidateText>
            )}
            {isBlank ? <IsBlank>입력창이 비어 있습니다</IsBlank> : null}
          </Youtube>
          <VideoArea>
            <ImgWrapper>
              {!isUrl ? (
                <Img src={LogIn.info.src} alt={LogIn.info.alt} />
              ) : (
                <Img
                  src={`https://img.youtube.com/vi/${youtubeId}/maxresdefault.jpg`}
                />
              )}
            </ImgWrapper>
          </VideoArea>
          <Genre>
            <PageSubtitle>장르</PageSubtitle>
            <Radio />
          </Genre>
          <TagGroup>
            <PageSubtitle>태그</PageSubtitle>
            <TagContent>
              <HolderTag />
            </TagContent>
          </TagGroup>

          <VideoText>
            <PageSubtitle>음악링크에 대한 소개를 적어주세요</PageSubtitle>
            <TextArea />
          </VideoText>
          <FireBtnArea>
            <RegisterBtn onClick={openModal}>취소</RegisterBtn>
            <RegisterBtn
              type="submit"
              bgColor="#10239E"
              textColor="#fff"
              // onClick={redirect}
            >
              작성
            </RegisterBtn>
          </FireBtnArea>
        </form>
      </PageContent>

      <div>
        {modalOpen && <Dim />}
        {modalOpen && (
          <Modal close={closeModal}>정말 등록을 취소하시겠습니까?</Modal>
        )}
      </div>
    </PageContentWrapper>
  );
}

export default Register;
