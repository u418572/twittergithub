import Github from "components/github";
import styles from "components/GitStyle.module.scss";
function Main() {
  return (
    <div className={styles.container}>
      <Github title="測試分支" />
    </div>
  );
}

export default Main;
