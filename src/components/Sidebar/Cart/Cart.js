import Link from "next/link";
import React from "react";
import styles from "./Cart.module.scss";

export default function Cart() {
	return (
		<div className={styles.cart}>
			<h3>Your Cart</h3>
			<table>
				<tbody>
					<tr>
						<td>
							<strong>
								<Link
									className={styles.shoppingCart}
									href="https://www.ag-usa.net/cart.php">
									Shopping Cart
								</Link>
							</strong>
						</td>
					</tr>
					<tr>
						<td>0 Product(s) in Cart</td>
					</tr>
					<tr>
						<td>Total: $0.00</td>
					</tr>
					<tr>
						<td>
							<span>»</span>
							<Link href="https://www.ag-usa.net/cart.php">
								<strong>Checkout</strong>
							</Link>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
}
