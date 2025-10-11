import { type ReactNode } from "react";

export interface Page {
  path: string;
  name: string;
  element: ReactNode;
}