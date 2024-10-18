import React from "react";

interface GradientButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  className?: string; // Add an optional className prop
}

const GradientButton: React.FC<GradientButtonProps> = ({
  onClick,
  children,
  className = "",
}) => {
  return (
    <button
      onClick={onClick}
      className={`px-6 py-2 rounded-md text-black ${className}`} // Append the dynamic className
      style={{
        background: "linear-gradient(to right, #F0BC39 0%, #DA9443 100%)",
        boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
        transition: "transform 0.1s ease-in-out",
      }}
      onMouseDown={(event: React.MouseEvent<HTMLButtonElement>) => {
        event.currentTarget.style.transform = "scale(0.98)";
      }}
      onMouseUp={(event: React.MouseEvent<HTMLButtonElement>) => {
        event.currentTarget.style.transform = "scale(1)";
      }}
      onMouseLeave={(event: React.MouseEvent<HTMLButtonElement>) => {
        event.currentTarget.style.transform = "scale(1)";
      }}
    >
      {children}
    </button>
  );
};

export default GradientButton;
