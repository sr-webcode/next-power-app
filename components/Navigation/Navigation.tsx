import Link from "next/link";

const Navigation = () => {
  return (
    <nav className="navigation">
      <ul>
        <li>
          <Link href="/">
            <a>Home Page</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a>About</a>
          </Link>
        </li>
        <li>
          <Link href="/users">
            <a>Users</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
