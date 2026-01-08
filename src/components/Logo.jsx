const Logo = () => {
  return (
    <svg
      width="320"
      height="80"
      viewBox="0 0 320 80"
      xmlns="http://www.w3.org/2000/svg"
      className="w-56 ml-2"
    >
      <text
        x="8"
        y="50%"
        dominantBaseline="middle"
        textAnchor="start"
        fontFamily="Netflix Sans, Arial, Helvetica, sans-serif"
        fontWeight="900"
        fontSize="56"
        fill="#E50914"
        letterSpacing="1"
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
      <style>{`text { filter: url(#shadow); }`}</style>
    </svg>
  );
};

export default Logo;
