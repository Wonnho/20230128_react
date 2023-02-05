import "./App.css"; //webpack이라는 도구가 css,이미지 파일 등 정적파일을 로딩할 수 있게 도와준다.
import styles from "./style.module.css";
//id,class의 중복을 방지해 준다. css in css

import "./style.scss";

function App() {
  return (
    <div className={styles.container}>
      <div className=".gnbList"></div>
    </div>
  );
}

export default App;
