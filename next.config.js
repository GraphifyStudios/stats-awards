/** @type {import('next').NextConfig} */
const nextConfig = {
  redirects: async () => [{
    source: "/survey",
    destination: "https://docs.google.com/forms/d/e/1FAIpQLSfWJxjsYPxzLuZJ8jNcyLOAhXUDg7N2JRIQshlagCJHAyIowA/viewform",
    permanent: false,
  }]
}

module.exports = nextConfig
