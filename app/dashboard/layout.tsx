import SideNav from "@/app/ui/organisms/SideNav";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid grid-rows-[1fr_12fr] grid-col-1 min-h-screen">
      <div className="bg-rta-green p-basic">Navbar</div>
      <div className="flex">
        <div className="w-1/6">
          <SideNav />
        </div>
        <div className="bg-amber-50 flex-auto p-basic">{children}</div>
      </div>
    </div>
  );
}
