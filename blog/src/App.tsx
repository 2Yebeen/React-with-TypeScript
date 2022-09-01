import React, { useState } from 'react';
// import logo from './logo.svg';
import './App.css';

function App() {
  
  let [title, setTitle ] = useState<string[]>(['남자 코트 추천', '강남 우동 맛집', '파이썬독학'])
  let [like, setLike] = useState<number>(0);
  let [modal, setModal] = useState<boolean>(false);
  let [modalTitle, setModalTitle] = useState<string>(title[0]);
  
  return (
    <div className="App">
      <div className='black-nav'>
        <h4 style={{color:'red'}}>블로그</h4>
      </div>

      <button onClick={() => {
        let copy = [...title];
        copy[0] = '여자 코트 추천';
        setTitle(copy);
      }}> 글 수정 </button>

      <button onClick={() => {
        let copy = [...title];
        setTitle(copy.sort());
      }}> 글 정렬 </button>

      {/* <button onClick={() => {
        setModal(!modal);
      }}> 모달 창 띄우기 </button> */}

      {
        title.map((title, index)=>{
          return (
            <div className='list' key={index}>
              <h4 onClick={() => {modalTitle === title ? setModal(!modal) : setModal(true); setModalTitle(title)}}>{ title }</h4>
              <span onClick={() => {setLike(like + 1)}}> 👍 </span> { like } 
              <p>9월 1일 발행</p>
            </div>
          )
        })
      }
      {/* 
      동적인 UI 만드는 방법  
      1. html css로 미리 디자인 완성
      2. UI의 현재 상태를 state로 저장
      3. state에 따라 UI가 어떻게 보일지 작성
      */}
      {
        modal ? <Modal title={modalTitle} setTitle={setTitle} / > : null
      }
    </div>
  );
}

// 컴포넌트를 쓰면 좋은 상황
// 1. 반복적으로 나타나는 html 축약할 때 
// 2. 페이지를 전환할 때
// 3. 자주 변경되는 것
// const Modal() => { ,,, }
interface ModalProps {
  title: string,
  setTitle: React.Dispatch<React.SetStateAction<string[]>>,
}
function Modal( props: ModalProps) {
  return (
    <div className='modal'>
      <h4>{ props.title }</h4>
      <p>날짜</p>
      <p>상세 내용</p>
      <button onClick={()=>{props.setTitle(['파이썬 독학', 'react 강의 추천', '강남 맛집'])}}>글 수정</button>
    </div>
  );
}

export default App;
