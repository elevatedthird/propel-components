import header from "./header.twig";
import './header.es6.js';
import './header.pcss.css';

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
    nav: `
      <nav role="navigation" aria-labelledby="block-kinetic-utilitymenu-menu" id="block-kinetic-utilitymenu" class="contextual-region block block-menu navigation menu--utility-menu">
        <ul class="menu-level-0">
          <li class="menu-item--expanded">
            <div class="menu-link">
              <span> About </span>
            </div>
            <div class="menu-dropdown">
              <ul class="menu-level-1">
                <li><a href="/"> Link 1 </a></li>
                <li><a href="/"> Link 2 </a></li>
                <li><a href="/"> Link 3 </a></li>
                <li><a href="/"> Link 4 </a></li>
              </ul>
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
