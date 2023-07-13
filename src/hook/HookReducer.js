import { useReducer } from "react";

// 1. Reducer 함수 (state값, reducer 실행함수로 전달하는 상태 값)
const myReducer = (state, action) => {
  console.log(state); // {value: 0} - 초기값
  console.log(action); // {x: 'increase'} - func()에서 전달 한 값은 리듀서의 상태를 나타내기 위한 값

  // 액션에 따라서 상태를 변경하고 return state를 반환
  if (action.x === "increase") {
    state = { value: state.value + 1 };
  } else if (action.x === "decrese") {
    state = { value: state.value - 1 };
  } else if (action.x === "reset") {
    state = { value: 0 };
  }
  return state;
};

function HookReducer() {
  // 2. const[현재 state, 리듀서 실행 함수] = reducer Hook(reducer함수, state초기값)
  const [state, func] = useReducer(myReducer, { value: 0 });

  const handleClick = () => {
    // 리듀서 함수를 실행
    func({ x: "increase" });
  };
  return (
    <div>
      <h3>카운트 : {state.value}</h3>
      <button onClick={handleClick}>증가</button>
      <button onClick={() => func({ x: "decrese" })}>감소</button>
      <button onClick={() => func({ x: "reset" })}>초기화</button>
    </div>
  );
}

export default HookReducer;
