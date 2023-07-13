import { Fragment, useState } from "react";
import HookEffect from "./hook/HookEffect";
import HookRef from "./hook/HookRef";
import HookQ from "./hook/HookQ";
import HookReducer from "./hook/HookReducer";

function App() {
  // 보이기 버튼 숨김 - unmount값 확인
  const [visible, setVisible] = useState(true);

  const handleVisible = () => {
    setVisible(!visible);
  };

  console.log(visible);

  return (
    <Fragment>
      <button onClick={handleVisible}>{visible ? "숨기기" : "보이기"}</button>
      {visible ? <HookEffect /> : null}

      <br />
      <hr />
      <br />

      <HookRef />

      <br />
      <hr />
      <br />

      <HookQ />

      <br />
      <hr />
      <br />

      <HookReducer />
    </Fragment>
  );
}
export default App;
