import { Fragment } from "react";
import MyComponent from "./component/MyComponent";
import MyComponent2 from "./component/MyComponent2";
import MyComponent3 from "./component/MyComponent3";

function App() {
  return (
    <Fragment>
      <div>나의 새로운 컴포넌트</div>
      <br />
      <MyComponent
        name={"홍길동"}
        age={20}
        addr={"서울시"}
        email={"상위@naver.com"}
      />{" "}
      {/* props */}
      <br />
      <MyComponent name={"이순신"} age={30} addr={"경기도"} />
      <br />
      {/* 클래스형 컴포넌트 */}
      <MyComponent2 name={"신사임당"} age={40} />
      {/* 함수형 컴포넌트 MyComponent3를 생성
      props는 title, content, writer를 전달
      writer는 기본값은 admin으로 선언 */}
      <MyComponent3 title={"안녕"} content={"뭘봐"} />
    </Fragment>
  );
}

export default App; // index.js가 사용하고 있기 때문
