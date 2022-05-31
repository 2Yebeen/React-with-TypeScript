import * as React from 'react';
import { NextPage } from 'next';
import Router from 'next/router';
import GoogleLogin from 'react-google-login';
import styled from 'styled-components';

const Page: NextPage = () => {
  let googleClientId:string=process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID||"";
  const onSuccess = (res: any) => {
    console.log(res); // 로그인한 사용자 정보 조회
    Router.push('/'); // home 페이지로 이동
  }
  const onFailure = (error: any) => {
    console.log(error);
  }
  return (
    <div>
      <h1 className="text-3xl text-highlight">
        Sign in
      </h1>
      <Button.Container>
          <Button.ButtonList>
              <Button.GoogleButton 
                  clientId = {googleClientId} // 발급된 clientId 등록
                  onSuccess = {onSuccess}
                  onFailure = {onFailure}
                  cookiePolicy={'single_host_origin'} // 쿠키 정책 등록
                  buttonText='Google 로그인' // 버튼에 사용될 텍스트
              />
          </Button.ButtonList>
      </Button.Container>
    </div>
  );
};

export default Page;

const Wrapper = styled.div`
    max-width: 720px;

    margin: 0 auto;
`

const Header = {
    Container: styled.div`
        text-align: center;
    `,

    Title: styled.h2``,
}

const Button = {
    Container: styled.div``,

    ButtonList: styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
    `,

    GoogleButton: styled(GoogleLogin)`
        width: 360px;
        height: 40px;

        margin: 6px 0;

        justify-content: center;

        & span {
            font-size: 18px;
            font-weight: 700 !important;
        }
    `,
}