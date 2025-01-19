// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-home",
    title: "Home",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "Publications",
          description: "Selected Publication",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "Projects",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-positions",
          title: "Positions",
          description: "Open Positions",
          section: "Navigation",
          handler: () => {
            window.location.href = "/positions/";
          },
        },{id: "nav-team",
          title: "Team",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/members/";
          },
        },{id: "dropdown-publications",
              title: "Publications",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "";
              },
            },{id: "dropdown-projects",
              title: "projects",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "";
              },
            },{id: "dropdown-blog",
              title: "blog",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/blog/";
              },
            },{id: "news-announcements-and-news-can-be-much-longer-than-just-quick-inline-posts-in-fact-they-can-have-all-the-features-available-for-the-standard-blog-posts-see-below-jean-shorts-raw-denim-vice-normcore-art-party-high-life-pbr-skateboard-stumptown-vinyl-kitsch-four-loko-meh-8-bit-tousled-banh-mi-tilde-forage-schlitz-dreamcatcher-twee-3-wolf-moon-chambray-asymmetrical-paleo-salvia-sartorial-umami-four-loko-master-cleanse-drinking-vinegar-brunch-pinterest-diy-authentic-schlitz-hoodie-intelligentsia-butcher-trust-fund-brunch-shabby-chic-kickstarter-forage-flexitarian-direct-trade-cold-pressed-meggings-stumptown-plaid-pop-up-taxidermy-hoodie-xoxo-fingerstache-scenester-echo-park-plaid-ugh-wes-anderson-freegan-pug-selvage-fanny-pack-leggings-pickled-food-truck-diy-irony-banksy-hipster-list-brunch-fixie-raybans-messenger-bag-hoodie-thundercats-retro-tote-bag-8-bit-godard-craft-beer-gastropub-truffaut-tumblr-taxidermy-raw-denim-kickstarter-sartorial-dreamcatcher-quinoa-chambray-slow-carb-salvia-readymade-bicycle-rights-90-s-yr-typewriter-selfies-letterpress-cardigan-vegan-pug-heirloom-high-life-vinyl-swag-single-origin-coffee-four-dollar-toast-taxidermy-reprehenderit-fap-distillery-master-cleanse-locavore-est-anim-sapiente-leggings-brooklyn-ea-thundercats-locavore-excepteur-veniam-eiusmod-raw-denim-truffaut-schlitz-migas-sapiente-portland-vhs-twee-bushwick-marfa-typewriter-retro-id-keytar-we-do-not-grow-absolutely-chronologically-we-grow-sometimes-in-one-dimension-and-not-in-another-unevenly-we-grow-partially-we-are-relative-we-are-mature-in-one-realm-childish-in-another-anais-nin-fap-aliqua-qui-scenester-pug-echo-park-polaroid-irony-shabby-chic-ex-cardigan-church-key-odd-future-accusamus-blog-stumptown-sartorial-squid-gastropub-duis-aesthetic-truffaut-vero-pinterest-tilde-twee-odio-mumblecore-jean-shorts-lumbersexual",
          title: 'Announcements and news can be much longer than just quick inline posts. In...',
          description: "",
          section: "News",},{id: "news-",
          title: '',
          description: "",
          section: "News",},{id: "news-we-re-excited-to-share-that-our-paper-has-been-published-in-the-prestigious-nature-portfolio-journal-npj-imaging-sparkles",
          title: 'We’re excited to share that our paper has been published in the prestigious...',
          description: "",
          section: "News",},{id: "projects-project-1",
          title: 'project 1',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-project-2",
          title: 'project 2',
          description: "a project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6D%72%61%7A%61%76%69%32@%75%6E%6C.%65%64%75", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/razavi-lab", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=qw6NjREAAAAJ", "_blank");
        },
      },{
        id: 'social-custom_social',
        title: 'Custom_social',
        section: 'Socials',
        handler: () => {
          window.open("https://engineering.unl.edu/mme/faculty/mohammad-razavi/", "_blank");
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
