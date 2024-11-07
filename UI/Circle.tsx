import React from "react";

export default function Circle({ number, Icon }: any) {
  return (
    <div
      style={{
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "9rem",
        height: "9rem",
      }}
    >
      {/* Small number circle */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: "50%",
          transform: "translate(-50%, -50%)",
          backgroundColor: "white",
          borderRadius: "50%",
          height: "3rem",
          width: "3rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#c02424",
          fontWeight: "bold",
          fontSize: "0.875rem",
          zIndex: 10,
          border: "1px solid #d1d5db",
          boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
        }}
      >
        {number}
      </div>

      {/* Main red circle */}
      <div
        style={{
          backgroundColor: "#c02424",
          borderRadius: "50%",
          height: "100%",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          fontSize: "2.25rem",
        }}
      >
        <Icon style={{ width: "48px", height: "48px" }} />
      </div>
    </div>
  );
}
