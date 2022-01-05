module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'a277f083dbbda2aeb5efb6c7a2fd5243'),
  },
});
