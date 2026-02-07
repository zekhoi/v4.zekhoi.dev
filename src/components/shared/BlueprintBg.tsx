export default function BlueprintBg() {
  return (
    <div className="blueprint-bg animate-slow-spin-scale">
      <svg
        height="100%"
        viewBox="0 0 1000 1000"
        width="100%"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            height="50"
            id="grid"
            patternUnits="userSpaceOnUse"
            width="50"
          >
            <path
              d="M 50 0 L 0 0 0 50"
              fill="none"
              stroke="#E5E5E5"
              strokeWidth="0.5"
            ></path>
          </pattern>
        </defs>
        <rect fill="url(#grid)" height="100%" width="100%"></rect>
        <g fill="none" stroke="#E5E5E5" strokeWidth="1">
          <circle cx="500" cy="500" r="400" strokeDasharray="10,10"></circle>
          <circle cx="500" cy="500" r="300"></circle>
          <circle cx="500" cy="500" r="150"></circle>
          <circle cx="500" cy="500" r="50" strokeDasharray="4,4"></circle>
          <line strokeDasharray="2,2" x1="0" x2="1000" y1="500" y2="500"></line>
          <line strokeDasharray="2,2" x1="500" x2="500" y1="0" y2="1000"></line>
          <path
            d="M 300 300 L 700 300 L 700 700 L 300 700 Z"
            strokeDasharray="8,8"
          ></path>
          <path d="M 200 200 L 800 200 L 800 800 L 200 800 Z"></path>
          <path d="M 500 100 L 520 100 M 500 100 L 480 100"></path>
          <text
            fill="#E5E5E5"
            fontFamily="monospace"
            fontSize="8"
            x="530"
            y="105"
          >
            R_400.00
          </text>
          <path d="M 800 500 L 800 480 M 800 500 L 800 520"></path>
          <text
            fill="#E5E5E5"
            fontFamily="monospace"
            fontSize="8"
            transform="rotate(90 810,495)"
            x="810"
            y="495"
          >
            X_OFFSET: 300
          </text>
          <path d="M 500 500 L 712 288" strokeDasharray="2,2"></path>
          <text
            fill="#E5E5E5"
            fontFamily="monospace"
            fontSize="8"
            transform="rotate(-45 610,380)"
            x="610"
            y="380"
          >
            VECTOR_ALGN_04
          </text>
          <rect height="10" width="10" x="495" y="95"></rect>
          <rect height="10" width="10" x="495" y="895"></rect>
          <rect height="10" width="10" x="95" y="495"></rect>
          <rect height="10" width="10" x="895" y="495"></rect>
        </g>
      </svg>
    </div>
  );
}
