/**
 * JSX:javaScript and XML
 * -JS code를 HTML 구조에 맞게 작성하기 위한 문법=>전체 구조를 파악하기 쉽다.
 *
 * -무조건 하나의 태그를 반환해야 한다.여러개의 태그를 사용하면 하나의 태그로 감싸주어야 한다.
 * -<></> 불필요한 태그 생성을 방지
 * 닫는 태그가 필요없는 태그는 self-closing tag를 사용해야 한다. <   />
 * inline style은 style 속성에 JS 객체형태로 지정한다.
 *
 * event binding은 onClick처럼 camel case를 사용
 *
 */

import { Children } from "react";

//첫번째 매개변수로 props 객체 전달
function Hello({ title, color, backgroundColor, children }) {
  //const {title}=props; //비구조화 할당

  const element = <p> @ React Company</p>;
  return (
    <>
      <div> Buenos Dias, React</div>
      <div style={{ color, backgroundColor }} onClick={() => alert("click")}>
        Hello {title}
      </div>
      {element}
      <input type="text" />
      {children}
    </>
  );
}
Hello.defaultProps = {
  title: "React",
  color: "green",
};

export default Hello;
