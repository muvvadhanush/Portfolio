import { MetadataRoute } from 'next';
import { projectsData } from '@/data/projects';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://muvvadhanush.com';
    const lastModified = new Date();

    const staticRoutes: MetadataRoute.Sitemap = [
        {
            url: baseUrl,
            lastModified,
            changeFrequency: 'weekly',
            priority: 1.0,
        },
        {
            url: `${baseUrl}/projects`,
            lastModified,
            changeFrequency: 'weekly',
            priority: 0.9,
        },
    ];

    const projectRoutes: MetadataRoute.Sitemap = projectsData.map((project) => ({
        url: `${baseUrl}/projects/${project.id}`,
        lastModified,
        changeFrequency: 'monthly',
        priority: 0.8,
    }));

    return [...staticRoutes, ...projectRoutes];
}