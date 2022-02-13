import React, { ReactChild } from "react";
import { motion } from "framer-motion";

export default function ButtonTap(props: {
  children: ReactChild | ReactChild[];
  scale?: number;
}) {
  return (
    <motion.div whileTap={{ scale: props.scale || 0.9 }}>
      {props.children}
    </motion.div>
  );
}
