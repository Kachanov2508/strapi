module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '2898694e050927ed52a3e5c7526657b9'),
  },
});
