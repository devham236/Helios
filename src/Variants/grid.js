const gridContainer = {
  initial: { opacity: 0, y: 50 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, delayChildren: 0.2, staggerChildren: 0.1 },
  },
}

const gridItem = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
}

export { gridContainer, gridItem }
