import React from "react";
import {motion} from "framer-motion";

export const MyComponent = () => (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    />
  )