import { UserButton } from "@clerk/nextjs";

export default function Dashboard() {
  return (
    <>
      <p>Dashboard (Protected)</p>
      <UserButton afterSignOutUrl="/"/>
    </>
  );
}
