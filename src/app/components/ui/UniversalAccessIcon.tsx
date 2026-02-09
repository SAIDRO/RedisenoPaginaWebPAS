export const UniversalAccessIcon = ({ size = 24, className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width={size}
    height={size}
    className={className}
    fill="currentColor"
    stroke="currentColor"
    strokeWidth="0"
  >
    {/* Circle Stroke */}
    <path
      d="M50 5C25.147 5 5 25.147 5 50s20.147 45 45 45 45-20.147 45-45S74.853 5 50 5zm0 82C29.565 87 13 70.435 13 50S29.565 13 50 13s37 16.565 37 37-16.565 37-37 37z"
      fill="currentColor"
    />
    
    {/* Person Figure */}
    {/* Head */}
    <circle cx="50" cy="30" r="7" fill="currentColor" />
    
    {/* Body and Limbs */}
    <path
      d="M50 40c-2.209 0-4 1.791-4 4v16H46l-9 19c-.902 1.902.138 4.062 2.062 4.902 1.969.86 4.25-.137 4.938-2.204l7-14.75 7 14.75c.688 2.067 2.969 3.064 4.938 2.204C64.862 79.062 65.902 76.902 65 75l-9-19h-2V44c0-2.209-1.791-4-4-4z"
      fill="currentColor"
    />
    {/* Arms (Upwards V) */}
    <path
      d="M50 42c-1.5 0-3 .5-4 1.5l-13 13c-1.562 1.562-1.562 4.095 0 5.657 1.562 1.562 4.095 1.562 5.657 0L48 52.828V60h4v-7.172l9.343 9.343c1.562 1.562 4.095 1.562 5.657 0 1.562-1.562 1.562-4.095 0-5.657l-13-13c-1-1-2.5-1.5-4-1.5z"
      fill="currentColor"
    />
  </svg>
);
