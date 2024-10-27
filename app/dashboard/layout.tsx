import SideNav from "@/app/ui/organisms/SideNav";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex">
      <div className="w-1/6">
        <SideNav />
      </div>
      <div className="bg-amber-50 flex-auto p-basic">{children}</div>
    </div>
  );
}
