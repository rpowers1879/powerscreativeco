'use client';

import { motion } from 'framer-motion';

export default function Button({
  children,
  href,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  type = 'button',
  disabled = false,
}) {
  const baseStyles =
    'inline-flex items-center justify-center font-medium rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-brand-500/50 focus:ring-offset-2 focus:ring-offset-surface-950';

  const variants = {
    primary:
      'bg-brand-500 text-white hover:bg-brand-400 shadow-lg shadow-brand-500/20 hover:shadow-brand-400/30 hover:-translate-y-0.5',
    secondary:
      'bg-white/[0.06] text-gray-200 border border-white/[0.1] hover:bg-white/[0.1] hover:border-white/[0.15] hover:-translate-y-0.5',
    ghost:
      'text-gray-400 hover:text-white hover:bg-white/[0.05]',
    accent:
      'bg-gradient-to-r from-brand-500 to-emerald-500 text-white hover:from-brand-400 hover:to-emerald-400 shadow-lg shadow-brand-500/20 hover:-translate-y-0.5',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm gap-1.5',
    md: 'px-6 py-3 text-sm gap-2',
    lg: 'px-8 py-4 text-base gap-2.5',
  };

  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  const MotionComponent = href ? motion.a : motion.button;

  return (
    <MotionComponent
      href={href}
      onClick={onClick}
      type={!href ? type : undefined}
      disabled={disabled}
      className={classes}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </MotionComponent>
  );
}
