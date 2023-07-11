import { Fragment } from "react";

function App() {
  const name = "홍길동";
  const age = 20;

  return (
    <>
      <Fragment>
        <div className="App">
          <ul>
            <li>1. JSX의 규칙 주석은 alt + shift + a{/* 주석 */}</li>
            <li>2. JSX에서는 반드시 하나의 JSX형태를 ()로 리턴해야 한다</li>
            <li>
              3. div태그를 사용하기 싫다면 Fragnebt태그 or 없는 모형<></>을
              사용할 수 있다
            </li>
            <li>
              4. 함수안에서 만들어진 변수는 중괄호 참조를 사용한다. {name}{" "}
              입나다 {age}세 입니다
            </li>
            <li>
              5. JSX에서 if문을 사용하고 싶다면, if문 대신 3항 연산자를 사용
            </li>
            <li>6. 화면에 보여주고 싶은게 없는 경우에는 null을 반환</li>
            <li>7. undefined을 반환하는 상황을 만들면 안된다</li>
            <li style={{ color: "red", backgroundColor: "#777", fontSize: 15 }}>
              8. DOM요소 (태그)에 스타일을 직접 넣을 때는 반드시 객체형으로 묶고
              카멜표기법을 사용
            </li>
            <li>9. clss대신 className속성을 사용</li>
            <li>
              10. HTML5의 문법을 정확하게 지킨다 (홀로 사용되는 태드는 반드시
              닫는 태그를 적는다(img, input, br))
              <input />, <img alt="똥칼라파워" />, <br />
            </li>
          </ul>
          {name === "홍길동" ? "홍길동 입니다" : "홍길동이 아니다"}
          {name === "홍길동" ? <p>홍길동 입니다</p> : <p>홍길동이 아닙니다</p>}
          {age !== 20 ? <p>20세 입니다</p> : null}
        </div>
      </Fragment>
    </>
  );
}

export default App; // index.js가 사용하고 있기 때문
