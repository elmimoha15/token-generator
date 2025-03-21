// src/components/Sidebar.tsx
import { Grid } from "lucide-react";

export default function Sidebar() {
  return (
    <div className="w-16 border-r border-gray-200 flex flex-col justify-between items-center py-4">
      <Grid className="w-6 h-6 text-black" />
    </div>
  );
}
