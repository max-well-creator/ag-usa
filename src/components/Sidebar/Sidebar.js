import styles from "../../styles/Sidebar.module.scss";
import Info from "./Info/Info";
import StructuredWater from "./StructuredWater/StructuredWater";

const Sidebar = () => {
	return (
		<aside className={styles.sidebar}>
			<Info />
			<StructuredWater />
		</aside>
	);
};

export default Sidebar;
