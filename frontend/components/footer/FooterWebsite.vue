<template>
  <footer
    class="responsive-px-5 responsive-py-5 bg-light-layer-2 text-light-distinct-text dark:bg-dark-layer-2 dark:text-dark-distinct-text"
  >
    <!-- Note: Content Sections Top for Mobile -->
    <FooterFlexCol class="flex flex-col lg:hidden" :links="links" />

    <!-- Note: Content Sections Left and Right for Desktop (xl) -->
    <FooterFlex class="hidden lg:flex" :links="links" />
  </footer>
</template>

<script setup lang="ts">
import { IconMap } from "~/types/icon-map";

const connectLinks = [
  {
    name: "components._global.github",
    url: "https://github.com/activist-org/activist",
    iconName: `${IconMap.GITHUB}`,
    iconSize: "1.05em",
  },
  {
    name: "components._global.matrix",
    url: "https://matrix.to/#/#activist_community:matrix.org",
    iconName: `${IconMap.MATRIX}`,
    iconSize: "1.061em",
  },
  {
    name: "components._global.instagram",
    url: "https://instagram.com/activist_org",
    iconName: `${IconMap.INSTAGRAM}`,
    iconSize: "1em",
  },
];

const resourcesLinks = [
  {
    name: "_global.help",
    url: "/help",
  },
  {
    name: "_global.documentation",
    url: "/docs",
  },
  {
    name: "_global.legal",
    url: "/legal",
  },
  {
    name: "_global.contact",
    url: "/help/contact",
  },
];

const organizationLinks = [
  {
    name: "_global.about",
    url: "/about",
  },
  {
    name: "_global.supporters",
    url: "/supporters",
  },
  {
    name: "_global.imprint",
    url: "/about/imprint",
  },
];

const platformLinks = [
  {
    name: "components.footer_website.version_number",
    isLocalePath: false,
    url: "https://github.com/activist-org/activist/releases",
  },
  {
    name: "components.footer_website.source_code",
    isLocalePath: false,
    url: "https://github.com/activist-org/activist",
  },
  {
    name: "_global.roadmap",
    isLocalePath: true,
    url: "/about/roadmap",
  },
];

const legalLinks = [
  {
    name: "_global.trademark_policy",
    url: "/legal/trademark-policy",
  },
  {
    name: "_global.privacy_policy",
    url: "/legal/privacy-policy",
  },
];

const links = {
  connectLinks,
  resourcesLinks,
  organizationLinks,
  platformLinks,
  legalLinks,
};
</script>
