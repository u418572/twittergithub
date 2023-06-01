import Github from "components/github";
import styles from "components/GitStyle.module.scss";
import MainPractice from "components/johnny/MainPractice";
function Main() {
  return (
    <div className={styles.container}>
      <Github title="測試分支" />
      <MainPractice />
    </div>
  );
}

export default Main;
