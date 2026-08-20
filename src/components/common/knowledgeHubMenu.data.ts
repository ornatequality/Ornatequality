export type KnowledgeHubMenuItem = {
  title: string;
  description: string;
  href: string;
};

export const knowledgeHubMenuItems: KnowledgeHubMenuItem[] = [
  {
    title: "Latest News/Updates",
    description: "Breaking news and announcements",
    href: "/news",
  },
  {
    title: "Blogs & Articles",
    description: "Expert insights and guides",
    href: "/blog",
  },
];

export const KNOWLEDGE_HUB_HREF = "/blog";


