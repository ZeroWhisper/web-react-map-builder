// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  res.statusCode = 200;
  // Add GOOD FOR TEST 2
  // console.group('Value Changed');
  // console.log('newValue', field, newValue);
  // console.log(`action: ${actionMeta.action}`);
  // console.groupEnd();
  res.json({ name: 'John Doe' });
};
