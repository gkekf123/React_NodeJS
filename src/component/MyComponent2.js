import React from "react";

class MyComponent2 extends React.Component {
  render() {
    // 클래스형 컴포넌트는 멤버변수 props로 자동전달이 된다
    // console.log(this.props);
    const { name, age } = this.props;

    return (
      <div>
        나의 클래스형 컴포넌트 클래스형
        <br />
        props : {name}
        <br />
        클래스형props : {age}
        <br />
      </div>
    );
  }
}

export default MyComponent2;
