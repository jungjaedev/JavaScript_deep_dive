import { useParams } from 'react-router-dom';
import { useEffect, useState, useContext } from 'react';
import { Nav } from 'react-bootstrap';

import { Context1 } from './../App';

function Detail(props) {
  let { id } = useParams();
  let [count, setCount] = useState(0);
  let [tab, setTab] = useState(0);
  let [alert, setAlert] = useState(true);

  let { items } = useContext(Context1);

  useEffect(() => {
    setTimeout(() => {
      setAlert(false);
    }, 2000);
  }, []);

  return (
    <div className="container">
      {items}
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
          <Nav.Link
            onClick={() => {
              setTab(0);
            }}
            eventKey="link0"
          >
            Link
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            onClick={() => {
              setTab(1);
            }}
            eventKey="link1"
          >
            Link
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            onClick={() => {
              setTab(2);
            }}
            eventKey="link2"
          >
            Link
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <TabContent tab={tab} shoes={props.shoes} />
    </div>
  );
}

function TabContent({ tab }) {
  // if (tab === 0) {
  //   return <div>내용0</div>;
  // } else if (tab === 1) {
  //   return <div>내용1</div>;
  // } else if (tab === 2) {
  //   return <div>내용2</div>;
  // }
  let [fade, setFade] = useState('');
  useEffect(() => {
    setTimeout(() => {
      setFade('end');
    }, 100);

    return () => {
      setFade('');
    };
  }, [tab]);

  return <div className={`start ${fade}`}>{[<div>내용0</div>, <div>내용1</div>, <div>내용2</div>][tab]}</div>;
}

export default Detail;
