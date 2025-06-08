import React from "react";
import classes from "./Layout.module.css";

interface LayoutProps {
  children: React.ReactNode;
}
export function Layout({ children }: LayoutProps) {
  return (
    <div className={classes.layout}>
      {children}
    </div>
  )
}