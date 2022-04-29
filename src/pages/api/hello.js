// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  res.statusCode = 200;
  // To remove this
  res.json({ name: 'John Doe' });
};
