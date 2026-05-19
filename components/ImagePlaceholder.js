'use client';

// ImagePlaceholder — a tasteful warm-gradient stand-in for real photography.
// Swap these for <Image> tags (or <img>) once real assets are dropped into
// /public. The `variant` prop simply rotates through gradient combinations
// so a grid of placeholders does not look monotonous.

const gradients = [
  'from-saffron-200 via-rose-200 to-gold-200',
  'from-rose-200 via-saffron-200 to-saffron-300',
  'from-gold-200 via-saffron-200 to-rose-200',
  'from-saffron-300 via-gold-200 to-rose-200',
  'from-rose-300 via-rose-200 to-saffron-200',
  'from-gold-300 via-saffron-200 to-gold-200',
];

export default function ImagePlaceholder({
  variant = 0,
  icon: Icon,
  label,
  className = '',
  rounded = 'rounded-2xl',
}) {
  const g = gradients[variant % gradients.length];

  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden
        bg-gradient-to-br ${g} ${rounded} ${className}
        dark:opacity-90`}
      role="img"
      aria-label={label || 'Kanyadan Foundation photograph'}
    >
      {/* Soft decorative motif */}
      <div className="pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full bg-white/30" />
      <div className="pointer-events-none absolute -bottom-10 -left-6 h-32 w-32 rounded-full bg-white/20" />
      {Icon && (
        <Icon className="relative text-5xl text-white/80 drop-shadow" />
      )}
      {label && (
        <span className="absolute bottom-3 left-3 right-3 text-xs font-medium text-saffron-900/70">
          {label}
        </span>
      )}
    </div>
  );
}
