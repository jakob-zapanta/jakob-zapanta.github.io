// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-projects",
          title: "Projects",
          description: "Engineering, astrophysics, and 3D printing projects",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-contact",
          title: "Contact",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/contact/";
          },
        },{id: "projects-assessing-the-correlation-between-stellar-flares-and-spots",
          title: 'Assessing the correlation between stellar flares and spots',
          description: "Astrophysics Data Analysis-- python; juypter notebook",
          section: "Projects",handler: () => {
              window.location.href = "/projects/astrophysics/";
            },},{id: "projects-battlebots-weapon-design",
          title: 'Battlebots Weapon Design',
          description: "Hax et Lux -- CAD &amp; Waterjet",
          section: "Projects",handler: () => {
              window.location.href = "/projects/battlebots/";
            },},{id: "projects-3d-printing-my-dawg",
          title: '3D Printing my Dawg',
          description: "and other artsy prints",
          section: "Projects",handler: () => {
              window.location.href = "/projects/decorative_prints/";
            },},{id: "projects-candle-holder",
          title: 'Candle Holder',
          description: "it&#39;s not a dog, but...",
          section: "Projects",handler: () => {
              window.location.href = "/projects/functional_prints/";
            },},{id: "projects-m-a-t-e-r-i-a-l-s",
          title: 'M.A.T.E.R.I.A.L.S',
          description: "(short for Metal And Textile Exoskeletal Reinforcement Incorporating Aluminum &amp; Leather Sheets)",
          section: "Projects",handler: () => {
              window.location.href = "/projects/materials_and_manufacturing/";
            },},{id: "projects-truss-analysis",
          title: 'Truss analysis',
          description: "Design, analysis and construction of a statically determinate truss",
          section: "Projects",handler: () => {
              window.location.href = "/projects/truss_analysis/";
            },},{id: "projects-astro-code",
          title: 'Astro_code',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/Astro_code/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6A%61%6B%6F%62.%7A%61%70%61%6E%74%61@%74%75%66%74%73.%65%64%75", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/JakobZapanta", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
