const modalContainer = {
  initial: {
    opacity: 1,
    scale: 0,
  },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.1,
    },
  },
  exit: {
    scale: 0,
    opacity: 0,
  },
}

const modalItem = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
}

export { modalContainer, modalItem }
