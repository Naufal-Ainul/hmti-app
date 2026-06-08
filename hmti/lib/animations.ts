/**
 * Centralized Framer Motion animation variants for the HMTI website.
 * Use these across all pages/components for consistent, premium motion design.
 */

// ─── Fade Variants ────────────────────────────────────────────────
export const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

export const fadeDown = {
  hidden: { opacity: 0, y: -30 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

export const fadeLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

export const fadeRight = {
  hidden: { opacity: 0, x: 40 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    transition: { duration: 0.5, delay, ease: "easeOut" },
  }),
};

// ─── Scale Variants ───────────────────────────────────────────────
export const scaleIn = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, delay, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

export const scaleUp = {
  hidden: { opacity: 0, scale: 0.85, y: 20 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

// ─── Stagger Container ───────────────────────────────────────────
export const staggerContainer = (staggerDelay: number = 0.08) => ({
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: staggerDelay,
      delayChildren: 0.1,
    },
  },
});

// ─── Stagger Item (pair with staggerContainer) ───────────────────
export const staggerItem = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export const staggerItemScale = {
  hidden: { opacity: 0, scale: 0.9, y: 16 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

// ─── Slide Variants ───────────────────────────────────────────────
export const slideUp = {
  hidden: { y: "100%" },
  visible: {
    y: 0,
    transition: { duration: 0.6, ease: [0.33, 1, 0.68, 1] },
  },
};

export const slideDown = {
  hidden: { y: "-100%", opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.4, ease: [0.33, 1, 0.68, 1] },
  },
};

// ─── Hover Helpers (use with whileHover) ─────────────────────────
export const hoverLift = {
  y: -6,
  transition: { duration: 0.3, ease: "easeOut" },
};

export const hoverScale = {
  scale: 1.03,
  transition: { duration: 0.3, ease: "easeOut" },
};

export const hoverTilt = {
  rotateX: -2,
  rotateY: 2,
  transition: { duration: 0.3, ease: "easeOut" },
};

// ─── Page Transition ─────────────────────────────────────────────
export const pageTransition = {
  initial: { opacity: 0, y: 12 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
  },
  exit: {
    opacity: 0,
    y: -12,
    transition: { duration: 0.3, ease: "easeIn" },
  },
};
