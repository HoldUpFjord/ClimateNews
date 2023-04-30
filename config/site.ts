import { NavItem } from "@/types/nav"

interface SiteConfig {
  name: string
  description: string
  mainNav: NavItem[]
  links: {
    twitter: string
    github: string
    docs: string
  }
}

export const siteConfig: SiteConfig = {
  name: "The Climate Update",
  description:
    "Your source for the latest news and updates involving Climate Change.",
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
  ],
  links: {
    twitter: "https://twitter.com/JackMonaco1",
    github: "https://github.com/HoldUpFjord",
    docs: "https://ui.shadcn.com",
  },
}
