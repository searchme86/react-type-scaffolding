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
  //isUrl url??? ?????? ??????
  //isUrl false: ?????? ??????
  const [isUrl, setIsUrl] = useState(false);
  //isblank true: ????????????,
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
      console.log('?????? ???????????? ??????????????????.');
    }
  };

  // const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();
  // };

  return (
    <PageContentWrapper>
      <PageTitle>??????????????? ??????????????????</PageTitle>
      <PageContent fromAbove={RegisterStyle.fromAbove}>
        <form onSubmit={handleSubmit(onValid)}>
          <Youtube>
            <TextHidden>
              <legend>??????????????? ???????????? ???????????????.</legend>
            </TextHidden>
            <InputWrapper
              inputWithBtn={RegisterStyle.InputWithBtn}
              fromRight={RegisterStyle.fromRight}
            >
              <VideoInput onChange={handleUrl} value={videoUrl} />
            </InputWrapper>
            <UrlBtn onClick={handleCheckUrl}>??????</UrlBtn>
            {isUrl ? null : (
              <ValidateText>????????? YouTube url??? ????????????</ValidateText>
            )}
            {isBlank ? <IsBlank>???????????? ?????? ????????????</IsBlank> : null}
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
            <PageSubtitle>??????</PageSubtitle>
            <Radio />
          </Genre>
          <TagGroup>
            <PageSubtitle>??????</PageSubtitle>
            <TagContent>
              <HolderTag />
            </TagContent>
          </TagGroup>

          <VideoText>
            <PageSubtitle>??????????????? ?????? ????????? ???????????????</PageSubtitle>
            <TextArea />
          </VideoText>
          <FireBtnArea>
            <RegisterBtn onClick={openModal}>??????</RegisterBtn>
            <RegisterBtn
              type="submit"
              bgColor="#10239E"
              textColor="#fff"
              // onClick={redirect}
            >
              ??????
            </RegisterBtn>
          </FireBtnArea>
        </form>
      </PageContent>

      <div>
        {modalOpen && <Dim />}
        {modalOpen && (
          <Modal close={closeModal}>?????? ????????? ?????????????????????????</Modal>
        )}
      </div>
    </PageContentWrapper>
  );
}

export default Register;
