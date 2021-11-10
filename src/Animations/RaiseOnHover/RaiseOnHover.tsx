import React,{ReactChild} from "react";
import { motion } from "framer-motion";

export default function RaiseOnHover(props: {
  children: ReactChild | ReactChild[];
  scale?: number;
}) {
  return <motion.div whileHover={{scale: props.scale || 1.1}}>
      {props.children}
  </motion.div>;
}
