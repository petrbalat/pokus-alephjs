import {Link} from "aleph/react";

export default function Header() {
  return (
    <header
      style={{
        width: "100%",
        height: 80,
        position: "sticky",
        top: 0,
      }}
    >
      <div
        style={{
          margin: "0 auto",
          width: "90%",
          maxWidth: 900,
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <h1>
          <Link
            style={{
              fontSize: 16,
              color: "#333",
            }}
            to="/"
          >
            <title>Pokus Aleph.js</title>
          </Link>
        </h1>
        <nav
          style={{
            display: "flex",
            alignItems: "center",
            gap: 20,
          }}
        >
          <a
            href="https://deno.land/x/aleph"
            style={{
              fontSize: 20,
              color: "#454545",
            }}
          >
              <title>Deno Land</title>
          </a>
        </nav>
      </div>
    </header>
  );
}
