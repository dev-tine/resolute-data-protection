import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

export default function Layout({ children, currentPath, onNavigate }) {
  return (
    <div className="min-h-screen bg-steel-50 text-navy-950">
      <Header currentPath={currentPath} onNavigate={onNavigate} />
      <main>{children}</main>
      <Footer onNavigate={onNavigate} />
    </div>
  );
}
