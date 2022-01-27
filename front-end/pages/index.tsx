import type { NextPage } from "next";
import * as React from "react";
import PrimaryLayout from "../layouts/PrimaryLayout/PrimaryLayout";
import styles from "../styles/Index.module.css";

const Home: NextPage = () => (
  <PrimaryLayout title="Auto Parts Shop" description="But our auto parts">
    <div>
      <Inventory />
    </div>
  </PrimaryLayout>
);

export default Home;

const cars = [{item:"Tire", price:"$35"},{item:"Brakes", price:"$75"},{item:"Headlight Assembly", price:"$275"},{item:"Tail Light Assembly", price:"$225"},{item:"Brake Roters", price:"$55"},{item:"Battery", price:"$125"},{item:"Synthetic Oil", price:"$75"}]


function Inventory(){
  return (
    <div className={styles.InventoryForm}>
      
      <h2>Inventory</h2>
      <List />
      
    </div>
  )
}

function List(){
  const CarInfo = cars.map((car) => 
    <form className={styles.InventoryItems}>                               

                             
      <label hmtlFor="CarItem">Item:</label>                       
      <input className={styles.InventoryItem} type="text" name="CarItem" value={car.item} />
      
                             
      <label htmlFor="CarItem-price">Price:</label>                        
      <input className={styles.InventoryItem} type="text" name="CarItem-price" value={car.price} />
      <button type="submit">Add Item</button>
      <button type="button">X</button>

                                      
      
    </form>                        
                        
  )
  return (
    <div>{CarInfo}</div>    
  )                         
}
