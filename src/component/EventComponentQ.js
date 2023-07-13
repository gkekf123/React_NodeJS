import { useState } from "react";

function EventComponentQ() {
  const [form, setForm] = useState("메뉴를 선택하세요");

  const handleChange = (e) => {
    // const copy = { ...form, [e.target.name]: e.target.value };
    setForm(e.target.value);
  };

  return (
    <div>
      <h2>셀렉트 태그 핸들링 (실습)</h2>
      <p>셀렉트 태그가 체인지 될 때 선택한 결과를 아래에 출력</p>
      <select onChange={handleChange}>
        <option>햄버거</option>
        <option>피자</option>
        <option>치킨</option>
      </select>
      <h3>선택한 결과</h3>
      <p>{form}</p>
    </div>
  );
}
export default EventComponentQ;
