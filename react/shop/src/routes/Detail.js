import { useParams } from 'react-router-dom';
// import styled from 'styled-components';

// let YellowBtn = styled.button`
//   background: ${props => props.bg};
//   color: ${props => (props.bg === 'blue' ? 'white' : 'black')};
//   padding: 10px;
// `;

// let NewBtn = styled.button(YellowBtn)`
//   margin: 20px;
// `;

// let Box = styled.div`
//   background: grey;
//   padding: 20px;
// `;

function Detail(props) {
  let { id } = useParams();

  return (
    <div className="container">
      {/* <Box>
        <YellowBtn bg="blue" />
        <YellowBtn bg="yellow" />
      </Box> */}
      <div className="row">
        <div className="col-md-6">
          <img alt="" src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
        </div>
        <div className="col-md-6">
          <h4 className="pt-5">{props.shoes[id].title}</h4>
          <p>{props.shoes[id].content}</p>
          <p>{props.shoes[id].price}</p>
          <button className="btn btn-danger">주문하기</button>
        </div>
      </div>
    </div>
  );
}

export default Detail;
