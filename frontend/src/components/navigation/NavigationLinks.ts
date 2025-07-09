// src/components/navigation/NavigationLinks.ts
// This File will Contain Links to sub modules of Top and Side navigations. So for not listing every link in each file separately, we will use it all in one file

export type MenuGroup = {
    title: string;
    icon?: string;          // Optional emoji/icon
    links: {
        label: string;
        href: string;
        icon?: string;
    }[];
};

export const menuGroups: MenuGroup[] = [
    {
        title: "Data Access & Import",
        icon: "📂",
        links: [
            { label: "Import Files", href: "/import" },
            { label: "Database Connect", href: "/db-connect" },
            { label: "NoSQL Connect", href: "/nosql" },
            { label: "Cloud Storage", href: "/cloud" },
            { label: "Google Sheets", href: "/sheets" },
            { label: "API / Web Scraping", href: "/api" },
            { label: "Streaming Sources", href: "/streaming" },
        ],
    },
    {
        title: "Data Management",
        icon: "🗃️",
        links: [
            { label: "Table & View Manager", href: "/tables" },
            { label: "Schema Editor", href: "/schema" },
            { label: "Type Inference", href: "/type-inference" },
            { label: "Sampling", href: "/sampling" },
            { label: "Dataset Versioning", href: "/versioning" },
            { label: "Column Tags", href: "/tags" },
        ],
    },
];