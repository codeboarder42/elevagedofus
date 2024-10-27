import NavLinks from "../atoms/NavLinks";

export default function SideNav() {
  return (
    <div className="bg-rta-warm-grey h-full w-full flex flex-col items-center p-basic gap-16">
      <div className="flex flex-col w-full gap-2">
        <NavLinks />
      </div>
    </div>
  );
}
