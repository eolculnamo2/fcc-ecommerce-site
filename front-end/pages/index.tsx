import type { NextPage } from "next";
import * as React from "react";
import { PARTS } from "../constants/parts";
import PrimaryLayout from "../layouts/PrimaryLayout/PrimaryLayout";
import styles from "../styles/Index.module.css";

const Home: NextPage = () => (
  <PrimaryLayout title="Auto Parts Shop" description="But our auto parts">
    <Inventory />
  </PrimaryLayout>
);

export default Home;

function Inventory() {
  return (
    <div className={styles.InventoryForm}>
      <h2>Shop Inventory</h2>
      <div className={styles.List}>
        <List />
      </div>
    </div>
  );
}

function List() {
  return (
    <>
      {PARTS.map((part) => (
        <form key={part.item} className={styles.Form}>
          <div className={styles.InventoryItems}>
            <div>
              <h2 className={styles.InventoryItem}>{part.item} </h2>
              <div className={styles.InventoryItem}>{part.price}</div>
            </div>
            <button type="button">X</button>
          </div>
          <button className={styles.SubmitButton} type="submit">
            Add Item
          </button>
        </form>
      ))}
    </>
  );
}
