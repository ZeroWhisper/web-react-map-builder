import Link from 'next/link';

const example_routes = [
  { v: 'car', name: 'outer' },
  { v: 'car', name: 'outer' },
  { v: 'car', name: 'outer' },
];

export default function LinkExample() {
  return (
    <div>
      <h2>I AM DETAIL</h2>
      <Link as={'/car/bruno'} href={'/[var1]/[var2]'}>
        <a>I AM A LINK</a>
      </Link>
    </div>
  );
}
