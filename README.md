# README #

## Project-Specific Notes ##
* Project-specific notes go here.

### Code Libraries ###
* Drag and Drop library: https://interactjs.io/
* Browser/Device detection: https://www.npmjs.com/package/react-device-detect


### Server Links ###
* Local: http://localhost:3000/
* Staging: https://bms-kiosk-staging.netlify.app/
* Live: 

---

## BMS ACCESS SUPPORT EXPERIENCE ##


### Best Practices ###
* Use lots of comments and documentation
* Keep your tabs lined up correctly
* Follow HTML5 element heirarchy
* Double check your title tags and favicon
* Store your local project in a regular folder with no cloud syncing - this can cause issues with running/building the project

### Initialize ###
* Use Node v16.13.0 - you can just run "npm run nvm" to set
* run 'npm install'
* run 'npm run dev' (start and serve commands are the same as this by default, customize them if you need to)

### Initial Server Deploy ###


### Update Test/Staging Server ###
This site uses Netlify's auto-deploy functions.  Every time you push to your main branch, Netlify will do a new deploy.

### Form Configuration ###


#### Page Links ####
* http://localhost:3000/ - Index/Home
* http://localhost:3000/posts - Blog posts directory
* http://localhost:3000/posts/master-post - Post master template
* http://localhost:3000/events - This is a clone of the blog pages and functionality, and can be renamed to whatever you need, or just ignored/removed.


### Assets Checklist ###
When you start the project, check in with the projects's Analyst for the following:
* Font files
* Logo(s) - as PNGs
* Favicon - you can usually resize the logo for this
* Figma/PSD of the design to export individual assets
* Legal copy/links
* Social links

### Plugin/Library Links ###
* [react-icons](https://react-icons.github.io/react-icons)
* [swiper](https://swiperjs.com/)
* [normalize.css](https://necolas.github.io/normalize.css/)
* [react-headroom](https://kyleamathews.github.io/react-headroom/)
* [tippy.js](https://atomiks.github.io/tippyjs/)

### Coming Features ###
* Contact page
* About page - == In Progress ==
* [Arbitrary JSON data usage](https://vercel.com/guides/loading-static-file-nextjs-api-route) - == Complete ==
* [Category and tag filtering on blog pages](https://retool.com/blog/filtering-data-in-react-filter-map-and-for-loops/)
* lodash - js utility library
* browsersync - sync multiple browser windows
* Form integration - netlify forms

### Article Links ###
* [Set up Google Analytics with react-ga](https://medium.com/@cooperwfloyd/the-most-simple-way-to-track-next-js-page-views-in-google-analytics-8a5c6d981f43)