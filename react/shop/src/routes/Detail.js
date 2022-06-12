import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Nav } from 'react-bootstrap';

function Detail(props) {
  let { id } = useParams();
  let [count, setCount] = useState(0);
  let [alert, setAlert] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setAlert(false);
    }, 2000);
  }, []);

  return (
    <div className="container">
      {alert === true ? <div className="alert alert-warning">2초이내 구매시 할인</div> : null}
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
      <Nav variant="tabs" defaultActiveKey="link0">
        <Nav.Item>
          <Nav.Link eventKey="link0">Active</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link1">Link</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link2">Link</Nav.Link>
        </Nav.Item>
      </Nav>
      <div>내용1</div>
      <div>내용2</div>
      <div>내용3</div>
    </div>
  );
}

export default Detail;
