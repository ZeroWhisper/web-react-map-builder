import Link from 'next/link';

export default function teste() {
  return (
    <div>
      <h2>I AM DETAIL</h2>
      <Link as="/car/bruno" href="/">
        <a>I AM A LINK</a>
      </Link>
    </div>
  );
}
