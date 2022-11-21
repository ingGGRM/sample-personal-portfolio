import React from "react";
import { motion } from "framer-motion";

import { images } from "../../constants";
import "./Header.scss";

const Header = () => {
	return (
		<div className="app__header app__flex">
			<motion.div
				whileInView={{ x: [-100, 0], opacity: [0, 1] }}
			></motion.div>
		</div>
	);
};

export default Header;
