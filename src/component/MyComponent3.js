import PropTypes from "prop-types";

function MyComponent3({ title, content, writer }) {
  return (
    <div>
      제목 : {title}
      <br />
      내용 : {content}
      <br />
      글쓴이 : {writer}
    </div>
  );
}
MyComponent3.defaultProps = {
  writer: "박인욱",
};
export default MyComponent3;
