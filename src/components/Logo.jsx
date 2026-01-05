const Logo = () => {
  return (
    <svg
      width="200"
      height="60"
      viewBox="0 0 200 60"
      xmlns="http://www.w3.org/2000/svg"
      className="w-44"
    >
      <path id="curve" d="M 10 50 Q 100 30 190 50" fill="none" />
      <text width="200">
        <textPath
          href="#curve"
          startOffset="50%"
          textAnchor="middle"
          fontFamily="Arial, Helvetica, sans-serif"
          fontWeight="bold"
          fontSize="40"
          fill="#E50914"
          letterSpacing="2"
        >
          FILIMGPT
        </textPath>
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
