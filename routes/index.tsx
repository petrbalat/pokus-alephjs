import { Head, Link } from "aleph/react";

export default function Index() {
  return (
    <div className="screen index">
      <Head>
        <title>Pokus Aleph.js</title>
      </Head>
      <p className="logo">
        <img src="/assets/logo.svg" width="75" height="75" title="Aleph.js" />
      </p>
      <h1>
        The Fullstack Framework in Deno.
      </h1>

      <div className="external-links">
        <a href="https://alephjs.org/docs/get-started" target="_blank">
          Get Started
        </a>
        <a href="https://alephjs.org/docs" target="_blank">
          Docs
        </a>
        <a href="https://github.com/alephjs/aleph.js" target="_blank">
          Github
        </a>
      </div>
      <nav>
        <Link role="button" to="/todos">
          Todos App Demo
        </Link>
      </nav>
    </div>
  );
}
