const now = new Date();

module.exports = [{
  email: 'ivan@gmail.com',
  password: 'abc123',
}, {
  email: 'pavlo@gmail.com',
  password: '123abc',
}, {
  email: 'ann@gmail.com',
  password: '321cba',
}, {
  email: 'kate@gmail.com',
  password: 'cba321',
}].map(user => ({
    ...user,
    createdAt: now,
    updatedAt: now
}));
