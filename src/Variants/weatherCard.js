const cardContainer = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: { duration: 1, delayChildren: 0.3, staggerChildren: 0.2 },
  },
  exit: {
    opacity: 0,
  },
}

const cardItem = {
  initial: {
    opacity: 0,
    y: 10,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
}

export { cardContainer, cardItem }
