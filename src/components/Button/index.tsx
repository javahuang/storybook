import React from "react";

interface ButtonProps {
  children: React.ReactNode;
}

export default function Button(props: ButtonProps) {
  const { children } = props;
  return <div>hello world1 {children}</div>;
}
