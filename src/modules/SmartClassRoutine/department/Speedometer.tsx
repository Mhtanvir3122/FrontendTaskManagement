type SpeedometerProps = {
  speed: number;      // current speed (Mbps)
  maxSpeed?: number;  // gauge max
};

const Speedometer = ({ speed, maxSpeed = 100 }: SpeedometerProps) => {
  // -90deg (0 Mbps) → +90deg (max Mbps)
  const angle = Math.min(speed / maxSpeed, 1) * 180 - 90;

  return (
    <div style={{ textAlign: "center", margin: "20px 0" }}>
      <div
        style={{
          position: "relative",
          width: 240,
          height: 120,
          margin: "auto",
          borderTopLeftRadius: 240,
          borderTopRightRadius: 240,
          background:
            "linear-gradient(to right, #f44336, #ff9800, #ffeb3b, #8bc34a, #4caf50)",
          overflow: "hidden",
        }}
      >
        {/* Needle */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: "50%",
            width: 4,
            height: 95,
            background: "#000",
            transform: `rotate(${angle}deg) translateX(-50%)`,
            transformOrigin: "bottom center",
            transition: "transform 0.2s ease-out",
          }}
        />

        {/* Center point */}
        <div
          style={{
            position: "absolute",
            bottom: -7,
            left: "50%",
            width: 16,
            height: 16,
            background: "#000",
            borderRadius: "50%",
            transform: "translateX(-50%)",
          }}
        />
      </div>

      <h3 style={{ marginTop: 10 }}>
        {speed.toFixed(2)} Mbps
      </h3>
    </div>
  );
};

export default Speedometer;
