import styles from "../styles/Sidebar.module.scss";
import Info from "./Sidebar/Info/Info";
import Cart from "./Sidebar/Cart/Cart";
import StructuredWater from "./Sidebar/StructuredWater/StructuredWater";

const Sidebar = () => {
	return (
		<aside className={styles.sidebar}>
			<Info />
			<Cart />
			<StructuredWater />
		</aside>
	);
};

export default Sidebar;
