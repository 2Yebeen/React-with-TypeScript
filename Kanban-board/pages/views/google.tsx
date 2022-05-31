import { NextPage } from 'next';
import Router from 'next/router';
import * as React from 'react';
import styled from 'styled-components';
import { GoogleLogout } from 'react-google-login';

const Google: NextPage = () => {

    const onLogoutSuccess = () => {
        console.log('onLogoutSuccess')
        Router.push('/');
    }

    const onFailure = () => {
        console.log('onFailure');
    }

    return (
        <Wrapper>
            <Title>Google Page...</Title>
            <Button 
                clientId='asdf12345.apps.googleusercontent.com' // 발급된 clientId 등록
                onLogoutSuccess={onLogoutSuccess}
                onFailure={onFailure}
                buttonText='Google 로그아웃' // 버튼에 사용될 텍스트
            />
        </Wrapper>
    )
}

export default Google;

const Wrapper = styled.div`
    max-width: 720px;

    margin: 0 auto;

    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Title = styled.h2``;

const Button = styled(GoogleLogout)`
    width: 360px;
    height: 40px;

    margin: 6px 0;

    justify-content: center;

    & span {
        font-size: 18px;
        font-weight: 700 !important;
    }
`;