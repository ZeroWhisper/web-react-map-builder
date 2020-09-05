import Link from 'next/link';

const example_routes = [
  { v: 'car', name: 'outer' },
  { v: 'bike', name: 'outer2' },
  { v: 'airplane', name: 'outer3' },
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
