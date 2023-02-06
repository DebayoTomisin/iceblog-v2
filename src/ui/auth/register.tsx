import styles from "./Auth.module.css";
import { userStorageAdapter } from "src/services/storageAdapter";

const RegisterComponent = () => {
  const storage = userStorageAdapter();
  console.log(storage.user);

  return (
    <div className={styles.container}>
      <div className={styles.left}>left content</div>

      <div className={styles.right}>right content</div>
    </div>
  );
};

export default RegisterComponent;
