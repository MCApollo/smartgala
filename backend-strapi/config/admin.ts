export default ({ env }) => ({
  auth: {
    secret: env("ADMIN_JWT_SECRET", "7c82c2a14ca865741154470e8d2240fb"),
  },
});
