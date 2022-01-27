import type { NextPage } from "next";
import * as React from "react";
import PrimaryLayout from "../layouts/PrimaryLayout/PrimaryLayout";
import styles from "../styles/Cart.module.css";

const Cart: NextPage = () => (
  <PrimaryLayout title="Auto Parts Shop" description="But our auto parts">
    <div>
      <CartItems />
    </div>
  </PrimaryLayout>
);
export default Cart;

const carParts = [
  {
    item: "Tire",
    price: "$35",
    imgSrc:
      "https://images.pexels.com/photos/21694/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
  {
    item: "Brakes",
    price: "$75",
    imgSrc:
      "https://images.pexels.com/photos/3399938/pexels-photo-3399938.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  },
  {
    item: "Headlight Assembly",
    price: "$275",
    imgSrc:
      "https://images.pexels.com/photos/3798067/pexels-photo-3798067.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
  {
    item: "Tail Light Assembly",
    price: "$225",
    imgSrc:
      "https://images.pexels.com/photos/191238/pexels-photo-191238.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  },
  {
    item: "Brake Roters",
    price: "$55",
    imgSrc:
      "https://images.pexels.com/photos/4022543/pexels-photo-4022543.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  },
  {
    item: "Battery",
    price: "$125",
    imgSrc:
      "https://images.pexels.com/photos/1409999/pexels-photo-1409999.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
  {
    item: "Synthetic Oil",
    price: "$75",
    imgSrc:
      "https://images.pexels.com/photos/8985922/pexels-photo-8985922.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
  {
    item: "Synthetic Oil",
    price: "$75",
    imgSrc:
      "https://images.pexels.com/photos/8985922/pexels-photo-8985922.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
  {
    item: "Synthetic Oil",
    price: "$75",
    imgSrc:
      "https://images.pexels.com/photos/8985922/pexels-photo-8985922.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
  {
    item: "Synthetic Oil",
    price: "$75",
    imgSrc:
      "https://images.pexels.com/photos/8985922/pexels-photo-8985922.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
  {
    item: "Synthetic Oil",
    price: "$75",
    imgSrc:
      "https://images.pexels.com/photos/8985922/pexels-photo-8985922.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
];

function CartItems() {
  const CartItems = carParts.map((car) => (
    <section key={car.item} className={styles.CartItem}>
      <div>
        <img
          alt="car item img"
          className={styles.CartItemImg}
          src={car.imgSrc}
        />
        <div className={styles.CartItemTitle}>
          <p>{car.item}</p>
        </div>
        <div className={styles.CartItemPrice}>
          <p>{car.price}</p>
        </div>
        <button type="submit">Purchase</button>
      </div>
    </section>
  ));
  return <div className={styles.CartContainer}>{CartItems}</div>;
}
