import React from "react";

type TProps = {
  style: React.CSSProperties | undefined;
};

export default function Logo({ style }: TProps) {
  return (
    <img src="/logo.png" style={{ borderRadius: 99, ...style }} alt="Logo" />
  );
}
