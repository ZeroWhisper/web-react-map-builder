import { useRouter } from 'next/router';

const Marcos = _props => {
  const { query } = useRouter();

  console.log('TESTE', query);

  return (
    <div>
      TESTE's MARCOS, {query.var1} and {query.var2}{' '}
    </div>
  );
};

export default Marcos;
