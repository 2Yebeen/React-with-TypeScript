import React, { useState } from 'react';
// import logo from './logo.svg';
import './App.css';

type Iitems = {
  like: number,
  title: string,
};
function App() {
  let [data, setData] = useState<Iitems[]>([
    {like:0, title:'남자 코트 추천'}, 
    {like:0, title:'강남 우동 맛집'}, 
    {like:0, title:'파이썬독학'}
  ]);
  let [modal, setModal] = useState<boolean>(false);
  let [modalTitle, setModalTitle] = useState<string>(data[0].title);
  const clickLike = (index: number) => {
    let tmpList:Iitems[] = []
    data.forEach(
      (data, idx) => {
        let tmp:Iitems = {
          like: idx === index ? data.like + 1 : data.like,
          title: data.title,
        }
        if(tmpList.length < 1)
          tmpList = [tmp]
        else
          tmpList = tmpList.concat(tmp)
        setData(tmpList);
    });
  }
  return (
    <div className="App">
      <div className='black-nav'>
        <h4 style={{color:'red'}}>블로그</h4>
      </div>
      <button onClick={() => {
        let copy = [...data];
        copy[0].title = '여자 코트 추천';
        setData(copy);
      }}> 글 수정 </button>
      <button onClick={() => {
        let copy = [...data];
        setData(copy.sort((firstObject: Iitems, secondObject: Iitems) => (firstObject.title > secondObject.title) ? 1: -1));
      }}> 글 정렬 </button>
      
      {data.map((data, idx)=>{
        return (
          <div className='list' key={idx}>
            <h4 onClick={() => {modalTitle === data.title ? setModal(!modal) : setModal(true); setModalTitle(data.title)}}>{ data.title }</h4>
            <span onClick={() => clickLike(idx)}> 👍 </span> { data.like } 
            <p>9월 1일 발행</p>
          </div>
        )
      })}
      {/* 
      동적인 UI 만드는 방법  
      1. html css로 미리 디자인 완성
      2. UI의 현재 상태를 state로 저장
      3. state에 따라 UI가 어떻게 보일지 작성
      */}
      {modal ? <Modal title={modalTitle} setTitle={setData} / > : null}
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
  setTitle: React.Dispatch<React.SetStateAction<Iitems[]>>,
};

const  Modal = (props: ModalProps) => {
  return (
    <div className='modal'>
      <h4>{ props.title }</h4>
      <p>날짜</p>
      <p>상세 내용</p>
      <button onClick={ () => { props.setTitle(
        [{like:0, title:'react 강의 추천'}, 
        {like:0, title:'Typescript 강의 추천'}, 
        {like:0, title:'파이썬독학'}]
       )}}>글 수정</button>
    </div>
  );
}

export default App;
