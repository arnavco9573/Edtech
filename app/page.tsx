// app/dashboard/page.tsx
import { redirect } from "next/navigation";

export default function DashboardPage() {
  // Redirecting to the student dashboard by default
  redirect("/dashboard/student");
}
