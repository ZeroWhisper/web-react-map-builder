import Link from 'next/link';

export default function Details() {
  return (
    <div>
      <h2>I AM DETAIL</h2>
      <Link>
        <a href="/car/bruno">I AM A LINK</a>
      </Link>
    </div>
  );
}
