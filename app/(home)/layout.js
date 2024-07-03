import NavBar from "../ui/navbar";

export default function Layout({ children }) {
  return (
    <div className="bg-[url('/assets/home/background-home-desktop.jpg')]">
      <NavBar />
      {children}
    </div>
  );
}
