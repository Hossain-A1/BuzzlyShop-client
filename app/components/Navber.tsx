import Link from "next/link";
import Button from "./Button";

const Navber = () => {
  return (
    <header className="h-20 fixed top-0 left-0 right-0 bg-light z-[100] backdrop-blur-lg border border-dark/10">
      <div className="wrapper w-full h-full flex justify-between items-center">
        <nav className="nav-start">
          <Link href="/" className="text-xl font-semibold text-accent1 capitalize link-item">BuzzlyShop</Link>
        </nav>
        <nav className="nav-middle">
          <ul className="flex gap-5">
            <li>
              <Link href="/home" className="link-item">Home</Link>
            </li>
            <li>
              <Link href="/products" className="link-item">Products</Link>
            </li>
            <li>
              <Link href="/about" className="link-item">About</Link>
            </li>
            <li>
              <Link href="/contact" className="link-item">Contact</Link>
            </li>
          </ul>
        </nav>

        <nav className="nav-end">
     <Button href="/login" placeholder="Login" color="green" />
        </nav>
      </div>
    </header>
  );
};

export default Navber;
