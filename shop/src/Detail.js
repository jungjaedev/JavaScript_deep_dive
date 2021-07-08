import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import styled from 'styled-components';
import './Detail.scss';

let 박스 = styled.div`
  padding: 20px;
`;

let 제목 = styled.h4`
  font-size: 25px;
  color: ${props => props.색상};
`;

function Detail({ shoes, 재고, set재고 }) {
  let [alert, setAlert] = useState(true);
  let [inputData, setInputData] = useState('');
  useEffect(() => {
    let timer = setTimeout(() => {
      setAlert(false);
    }, 2000);
    return () => {
      clearTimeout(timer);
    };
    // return function 어쩌구() {실행코드} {/**컴포넌트없어질때 실행 */}
  }, []);

  let { id } = useParams();
  let history = useHistory();
  let findItem = shoes.find(i => i.id === id);

  return (
    <div className="container">
      <박스>
        <제목 className="red">Detail</제목>
      </박스>
      {inputData}
      <input
        onChange={e => {
          setInputData(e.target.value);
        }}
      />

      {alert ? (
        <div className="my-alert">
          <p>재고가 얼마 남지 않았습니다.</p>
        </div>
      ) : null}

      <div className="row">
        <div className="col-md-6">
          <img src={'https://cdn.pixabay.com/photo/2013/07/12/18/20/shoes-153310_960_720.png'} width="100%" />
        </div>
        <div className="col-md-6 mt-4">
          <h4 className="pt-5">{shoes[0].title}</h4>
          <p>{shoes[0].content}</p>
          <p>{shoes[0].price}</p>

          <Info 재고={재고} set재고={set재고}></Info>
          <button
            className="btn btn-danger"
            onClick={() => {
              set재고([9, 11, 12]);
            }}
          >
            주문하기
          </button>
          <button
            className="btn btn-info"
            onClick={() => {
              history.goBack();
            }}
          >
            뒤로가기
          </button>
        </div>
      </div>
    </div>
  );
}

function Info(재고, set재고) {
  return <p>재고 : {재고[0]}</p>;
}

export default Detail;
