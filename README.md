# README

## Project-Specific Notes
Project-specific notes go here.

### User Flow
- Level 1 | Index Page -> Drag card onto lvl-1 door
- Level 2 | Category Pages -> Drag card onto lvl-2 door
- Level 3 | Content Pages -> View content, return to previous page or index page

### Site Map
- Access
	+ Appeals
	+ Benefits
	+ Billing
- Enrollment
	+ Enrollment Form
	+ Options
	+ Provider Portal
- Financial
	+ Commerical Patients
	+ Government/Uninsured Patients
- Reources
	+ Brochures
	+ Videos

### Project Links
- Local: http://localhost:3000/
- Staging: https://grovery-kiosk-template.netlify.app/
- Live: https://grovery-kiosk-template.netlify.app/

### Third Party Service Links
- [HubSpot Form](https://app.hubspot.com/submissions/39959608/form/c7e1d1d5-1b8c-499c-a187-b0b816215139/performance)
- [Netlify Dashboard](https://app.netlify.com/sites/grovery-kiosk-template/overview)

---

## Grovery Kiosk Experience Template

### Main Features
- Fullscreen-style layout
- SVG backgrounds, animations, UI assets
- Smooth page transitions, animated transition screens
- Touch-centric, drap-and-drop UI
- Inactivity Timer

### Best Practices
- Use lots of comments and documentation
- Keep your tabs lined up correctly
- Follow HTML5 element heirarchy
- Double check your title tags and favicon
- Store your local project in a regular folder with no cloud syncing - this can cause issues with running/building the project

### Initialize
- Use Node v16.13.0 - you can run "npm run nvm" to set
- run 'npm install'
- run 'npm run dev' (start and serve commands are the same as this by default, customize them if you need to)

### Initial Server Deploy
- Add `NETLIFY_NEXT_PLUGIN_SKIP` var to Netlify vars and set to `true`.
- Base Directory: `/`
- Publish Directory: `/out`

### Update Test/Staging Server
This project uses Netlify's auto-deploy functions.  Every time you push to your main branch, Netlify will do a new deploy. 

This project uses a `main` branch and a `staging` branch.  All updates should be first pushed to staging to be tested, and then pushed to main when fully vetted.  Main should ideally only ever be updated by merging/PR'ing from staging, and never directly from a regular branch.

### Branch Naming Conventions
New branches should use the following naming convention: `category--specific-name`.  This makes it easier to read/search branch names, and makes the purpose of the branch clear.  Note: git disallows spaces in branch names and uses dashes instead; therefore the double dash `--` acts as a delineator for the category name.

Example branch names:
- `feature--form-popup`
- `page--about`
- `content--new-logos`
- `fix--build-fixes`
- `component--LoadingScreen`

### Update Procedure
When making a new update, your chain of events should look like this:
Make new branch based off `main` -> make updates to code -> re-pull latest from `main` and `staging` to prevent merge errors -> pull request into `staging`, test, confirm merge -> pull request `staging` into `main` when sprint/update batch is ready.

### Form Configuration
Template uses HubSpot forms.  Be sure to clone a new form and update the form in your project's code.  Be sure to update the form link at the top of this doc as well.

#### Sample HubSpot form code:
``` html
<script charset="utf-8" type="text/javascript" src="//js.hsforms.net/forms/embed/v2.js"></script>
<script>
  hbspt.forms.create({
    region: "na1",
    portalId: "39959608",
    formId: "c7e1d1d5-1b8c-499c-a187-b0b816215139"
  });
</script>
```

### Assets Checklist
When you start the project, check in with the project's manager for the following:
- Font files
- Logo(s) - as PNGs or SVGs
- Favicon - you can usually resize the logo for this
- Xd/Figma/PSD of the design to export individual assets
- Legal copy/links
- Social links

### Plugin/Library Links
- Drag and Drop library: https://interactjs.io/
- Browser/Device detection: https://www.npmjs.com/package/react-device-detect
- [react-icons](https://react-icons.github.io/react-icons)
- [swiper](https://swiperjs.com/)
- [normalize.css](https://necolas.github.io/normalize.css/)

### Unique Issues With Project Type

> ==Summary==: Individual users can not be directly tracked in an event format.  Individual users can be tracked indirectly via UTM codes attached to QR code links. 

This project is intended to be used as a in-person, walk-up experience at an event such as a conference or convention, and is not primarily intended as a publicly accessible site (although it can be used as that).  Because of this, the site's "users" will typically only be the displays and/or tablets being used at the client's event, rather than the devices of each individual user as you would usually expect.  

This means you will have to treat user analytics differently - ignoring specific user data and focusing mainly on how many times each inner page was viewed.

There should be no way for the user to click out of the site/experience - the only links leading outside the site should be QR codes, and all QR codes should include UTM tracking parameters