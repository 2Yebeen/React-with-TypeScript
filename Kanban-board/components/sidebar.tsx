import { FC } from 'react';
import Link from 'next/link';

const Sidebar: FC = () => {
  return (
    <article className="flex flex-col min-h-screen justify-center items-center bg-light text-dark dark:bg-dark dark:text-light">
      <div style={{ marginBottom: 15 }}>
        <Link href="/views/home" as="/">
          <a
            style={{
              fontSize: 22,
              textDecoration: 'none',
              textTransform: 'uppercase',
            }}
          >
            Kanban board
          </a>
        </Link>
      </div>
      <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
        <li>
          <Link href="/views/home" as="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/views/signin" as="/signin">
            <a>Sign in</a>
          </Link>
        </li>
        <li>
          <Link href="/views/blog" as="/blog" prefetch={false}>
            <a>Blog</a>
          </Link>
        </li>
      </ul>
    </article>
  );
};

export default Sidebar;
