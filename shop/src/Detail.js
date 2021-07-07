import React from 'react';
import { useHistory } from 'react-router-dom';

function Detail() {
  let history = useHistory();

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img src="https://cdn.pixabay.com/photo/2013/07/12/18/20/shoes-153310_960_720.png" width="100%" />
        </div>
        <div className="col-md-6 mt-4">
          <h4 className="pt-5">상품명</h4>
          <p>상품설명</p>
          <p>120000원</p>
          <button className="btn btn-danger">주문하기</button>
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

export default Detail;
