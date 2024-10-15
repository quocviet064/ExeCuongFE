/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "i.ibb.co",
      "ibb.co",  // Thêm dòng này
      "lh3.googleusercontent.com",
      "res.cloudinary.com",
      "lomonoxop.edu.vn",
      "example.com",
    ],
   
  },
};

module.exports = nextConfig;
