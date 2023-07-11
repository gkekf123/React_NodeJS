import PropTypes from "prop-types";

function MyComponent(/* x */ { name, age, addr, email }) {
  // 하위 컴포넌트의 첫째 매개변수에는 props가 전달 된다
  // 구조 분해 할당
  // const { name, age, addr } = x;

  return (
    <div>
      함수형 컴포넌트
      <br />
      props 이름 : {name}
      <br />
      props 나이 : {age}
      <br />
      props 주소 : {addr}
      <br />
      props 이메일 : {email}
      <br />
    </div>
  );
}

// 하위 \\
// props 값이 넘어오지 않을 때 기본값의 선언
// 컴포넌트명.defaultProps = {}
MyComponent.defaultProps = {
  email: "기본값@naver.com",
  // age: 0,
  // addr: "부산",
};

// props값의 타입 검증(정적타입 지정)
// 컴포넌트명.propTypes = {}
MyComponent.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  addr: PropTypes.string.isRequired, //필수값(상위컴포넌트에서 반드시 전달)
};

export default MyComponent;
