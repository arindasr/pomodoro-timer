const paths = {
  tomato: (
    <>
      <path d="M12 7.8c4.2 0 7 2.6 7 6.3 0 4.1-3.1 7.4-7 7.4s-7-3.3-7-7.4c0-3.7 2.8-6.3 7-6.3Z" />
      <path d="M12 8.3c-.1-1.7.7-3 2.4-3.8" />
      <path d="M12 8.3c-.5-1.4-1.8-2.2-3.7-2.4" />
      <path d="M12 8.3c1.1-1.1 2.6-1.2 4.4-.5" />
    </>
  ),
  sprout: (
    <>
      <path d="M12 20V9" />
      <path d="M12 10C8.9 9.8 7 8.2 6.5 5.2c3 .1 5 1.6 5.5 4.8Z" />
      <path d="M12 12.3c3.3-.2 5.3-1.9 5.9-5.2-3.3.1-5.4 1.9-5.9 5.2Z" />
      <path d="M7.5 20h9" />
    </>
  ),
  focus: (
    <>
      <circle cx="12" cy="12" r="7.2" />
      <circle cx="12" cy="12" r="2.4" />
      <path d="M12 2.7v2.2M12 19.1v2.2M2.7 12h2.2M19.1 12h2.2" />
    </>
  ),
  chart: (
    <>
      <path d="M5 19V6" />
      <path d="M5 19h14" />
      <path d="m8 15 3.2-3.4 2.7 2.4L19 8.5" />
      <path d="M17 8.5h2v2" />
    </>
  ),
  pencil: (
    <>
      <path d="m5 16.8-.7 3 3-.7L18.4 8.9l-2.3-2.3L5 16.8Z" />
      <path d="m14.8 7.8 2.3 2.3" />
      <path d="M7.8 19.1 5 16.8" />
    </>
  ),
  cup: (
    <>
      <path d="M6 8h9v5.8A4.2 4.2 0 0 1 10.8 18h-.6A4.2 4.2 0 0 1 6 13.8V8Z" />
      <path d="M15 10h1.4a2.1 2.1 0 0 1 0 4.2H15" />
      <path d="M7 21h9" />
      <path d="M8.5 4.5c-.8.8-.8 1.6 0 2.3M12 4.5c-.8.8-.8 1.6 0 2.3" />
    </>
  ),
  loop: (
    <>
      <path d="M17.5 8.5A6.5 6.5 0 0 0 6.8 7.1L5 9" />
      <path d="M5 5.5V9h3.5" />
      <path d="M6.5 15.5a6.5 6.5 0 0 0 10.7 1.4L19 15" />
      <path d="M19 18.5V15h-3.5" />
    </>
  ),
  play: <path d="M8.5 6.5v11l9-5.5-9-5.5Z" />,
  pause: (
    <>
      <path d="M8.5 6.5v11" />
      <path d="M15.5 6.5v11" />
    </>
  ),
  reset: (
    <>
      <path d="M6.5 8.5A6.8 6.8 0 1 1 5.8 16" />
      <path d="M6.5 4.8v3.7H2.8" />
    </>
  ),
  close: (
    <>
      <path d="M7 7l10 10" />
      <path d="M17 7 7 17" />
    </>
  ),
  menu: (
    <>
      <path d="M5 7h14" />
      <path d="M5 12h14" />
      <path d="M5 17h14" />
    </>
  ),
  arrowLeft: <path d="m14 6-6 6 6 6" />,
  sparkle: (
    <>
      <path d="M12 3.5 13.7 9l5.3 1.8-5.3 1.8L12 18l-1.7-5.4L5 10.8 10.3 9 12 3.5Z" />
      <path d="M18 15.5 18.7 18l2.3.7-2.3.8L18 22l-.7-2.5-2.3-.8 2.3-.7.7-2.5Z" />
    </>
  ),
};

const Icon = ({ name, size = 24, className = '', ...props }) => (
  <svg
    className={`icon ${className}`.trim()}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden="true"
    {...props}
  >
    {paths[name]}
  </svg>
);

export default Icon;
