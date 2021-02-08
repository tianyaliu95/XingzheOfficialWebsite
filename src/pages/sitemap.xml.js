import React from 'react'

const getSitemap = () => {
  return (
    `<?xml version="1.0" encoding="UTF-8"?>
      <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="https://www.w3.org/1999/xhtml">
        <url>
          <loc>http://www.xingzhefangche.com</loc>
          <changefreq>daily</changefreq>
          <priority>0.8</priority>
        </url>
        <url>
          <loc>http://www.xingzhefangche.com/about</loc>
          <changefreq>daily</changefreq>
          <priority>0.8</priority>
        </url>
        <url>
          <loc>http://www.xingzhefangche.com/activities</loc>
          <changefreq>daily</changefreq>
          <priority>0.8</priority>
        </url>
        <url>
          <loc>http://www.xingzhefangche.com/contact-us</loc>
          <changefreq>daily</changefreq>
          <priority>0.8</priority>
        </url>
        <url>
          <loc>http://www.xingzhefangche.com/rv-experience</loc>
          <changefreq>daily</changefreq>
          <priority>0.8</priority>
        </url>
        <url>
          <loc>http://www.xingzhefangche.com/events/summer-camps</loc>
          <changefreq>daily</changefreq>
          <priority>0.8</priority>
        </url>
        <url>
          <loc>https://www.xingzhefangche.com/events/winter-camps</loc>
          <changefreq>daily</changefreq>
          <priority>0.8</priority>
        </url>
        <url>
          <loc>https://www.xingzhefangche.com/events/family-events</loc>
          <changefreq>daily</changefreq>
          <priority>0.8</priority>
        </url>
        <url>
          <loc>https://www.xingzhefangche.com/events/company-events</loc>
          <changefreq>daily</changefreq>
          <priority>0.8</priority>
        </url>
      </urlset>`
  )
}

class Sitemap extends React.Component {
  static async getInitialProps ({ res }) {
    res.setHeader('Content-Type', 'text/xml')
    res.write(getSitemap())
    res.end()
  }
}

export default Sitemap
