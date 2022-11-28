/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  compiler: {
    emotion: true,
  },
  env: {
    adminEmail: process.env.ADMIN_EMAIL,
    serviceId: process.env.FORMIK_SERVICE_ID,
    templateId: process.env.FORMIK_TEMPLATE_ID,
    userId: process.env.FORMIK_USER_ID,
  },
  serverRuntimeConfig: {
    // Will only be available on the server side
    adminEmail: process.env.ADMIN_EMAIL,
    serviceId: process.env.FORMIK_SERVICE_ID,
    templateId: process.env.FORMIK_TEMPLATE_ID,
    userId: process.env.FORMIK_USER_ID,
  },
  publicRuntimeConfig: {
    // Will be available on both server and client
    adminEmail: process.env.ADMIN_EMAIL,
    serviceId: process.env.FORMIK_SERVICE_ID,
    templateId: process.env.FORMIK_TEMPLATE_ID,
    userId: process.env.FORMIK_USER_ID,
  },
};

module.exports = nextConfig;
