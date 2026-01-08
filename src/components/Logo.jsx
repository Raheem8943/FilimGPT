const Logo = () => {
  return (
    <svg
      width="320"
      height="80"
      viewBox="0 0 320 80"
      xmlns="http://www.w3.org/2000/svg"
      className="w-56"
    >
      <text
        x="50%"
        y="50%"
        dominantBaseline="middle"
        textAnchor="middle"
        fontFamily="Arial, Helvetica, sans-serif"
        fontWeight="bold"
        fontSize="60"
        fill="#E50914"
        letterSpacing="2"
      >
        FILIMGPT
      </text>
      <defs>
        <filter id="shadow">
          <feDropShadow
            dx="2"
            dy="2"
            stdDeviation="1"
            floodColor="black"
            floodOpacity="0.5"
          />
        </filter>
      </defs>
      <style>
        {`text { filter: url(#shadow); }`}
      </style>
    </svg>
  );
};

export default Logo;
