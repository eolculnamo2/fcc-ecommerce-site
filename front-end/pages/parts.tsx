import type { NextPage } from "next";
import * as React from "react";
import PrimaryLayout from "../layouts/PrimaryLayout/PrimaryLayout";
import styles from "../styles/Parts.module.css";

const Parts: NextPage = () => (
  <PrimaryLayout title="Auto Parts Shop" description="But our auto parts">
    <>
      <AddModal />
    </>
  </PrimaryLayout>
);

export default Parts;

function AddModal() {
  return (
    <div className={styles.AddModalFormContainer}>
      <AddModalForm />
    </div>
  );
}

function AddModalForm() {
  return (
    <form className={styles.AddModalForm}>
      <h2>Inventory</h2>
      <h3>ADD ITEM</h3>

      <ul className={styles.AddModalFormInputs}>
        <li>
          <label htmlFor="name">name:</label>
          <input type="text" name="name" className={styles.AddModalInput} />
        </li>

        <li>
          <label htmlFor="year">year:</label>
          <input type="text" name="year" className={styles.AddModalInput} />
        </li>

        <li>
          <label htmlFor="price">price:</label>
          <input type="text" name="price" className={styles.AddModalInput} />
        </li>

        <li>
          <label htmlFor="category">category:</label>
          <input type="text" name="category" className={styles.AddModalInput} />
        </li>
      </ul>

      <button type="submit">ADD</button>
    </form>
  );
}
