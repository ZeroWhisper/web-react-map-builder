import Link from 'next/link';

export default function teste() {
  return (
    <div>
      <h2>I AM DETAIL</h2>
      <Link as="/car/bruno" href="/[var1]/[var2]">
        <a>I AM A LINK</a>
      </Link>
    </div>
  );
}
