/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
await import("./src/env.js");

/** @type {import("next").NextConfig} */
const config = {
  images: {
    domains: [
      "incand25-nits.s3.ap-south-1.amazonaws.com",
      "lh3.googleusercontent.com",
      "res.cloudinary.com",
    ], // Add the hostname here
  },
};

export default config;
