module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    }
  ],
  siteMetadata: {
    title: "OSU Hackathon Club",
    titleTemplate: "%s · Home of BeaverHacks",
    description:
      "Oregon State University Hackathon Club Website.",
    url: "https://www.beaverhacks.com", // No trailing slash allowed!
    image: "/src/assets/img/osu_hackathon_club_logo_icon_right.png", 
  }
}
