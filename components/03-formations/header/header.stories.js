import header from "./header.twig";
import './header.es6.js';
import './header.pcss.css';
import '@components/00-elements/menu-trigger/menu-trigger.pcss.css';
import '@components/00-elements/menu-trigger/menu-trigger.es6.js';


export default {
  title: "03-formations/header",
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "A simple main menu. This is not a mega menu.",
      },
      source: {
        code: "drush propel:add header",
      },
    },
  },
  argTypes: {},
  component: header,
};

export const Default = {
  args: {},
  render: (args) => header({
    ...args,
    branding: `
      <div id="block-kinetic-branding" class="block block-system block-system-branding-block">
        <a href="/" rel="home" title="website name" class="site-logo">
          <img width="150" src="https://placehold.co/150x80" alt="Home">
        </a>
      </div>
    `,
    header_top: `
      <nav role="navigation" class="contextual-region block block-menu navigation menu--utility-menu">
        <ul class="flex gap-4 text-white">
          <li class="menu-item--expanded">
          <a href="/blog" class="hover:underline" data-drupal-link-system-path="node/131">Company</a>
          </li>
          <li class="py-2 md:py-0">
          <a href="/blog" class="hover:underline" data-drupal-link-system-path="node/131">Location</a>
          </li>
          <li class="py-2 md:py-0">
          <a href="/news" class="hover:underline" data-drupal-link-system-path="node/8606">News</a>
          </li>
        </ul>
      </nav>
    `,
    main_menu: `
      <nav role="navigation" class="contextual-region block block-menu navigation menu--main">
        <ul class="flex gap-4 text-white">
          <li class="menu-item--expanded">
            <div class="menu-link">
              <span> About </span>
            </div>
          </li>
          <li class="py-2 md:py-0">
          <a href="/blog" class="hover:underline" data-drupal-link-system-path="node/131">Blog</a>
          </li>
          <li class="py-2 md:py-0">
          <a href="/events-0" class="hover:underline" data-drupal-link-system-path="node/126">Events</a>
          </li>
          <li class="py-2 md:py-0">
          <a href="/news" class="hover:underline" data-drupal-link-system-path="node/8606">News</a>
          </li>
        </ul>
      </nav>
    `,
  }),
};
