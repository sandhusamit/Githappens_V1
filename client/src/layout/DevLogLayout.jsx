import { Outlet } from "react-router-dom";
import { DevLogProvider } from "../contexts/DevLogContext";

export default function DevLogLayout() {
  return (
    <DevLogProvider>
      <Outlet />
    </DevLogProvider>
  );
}