import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://zekhoi.dev',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1
    },
    {
      url: 'https://zekhoi.dev/works',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8
    },
    {
      url: 'https://zekhoi.dev/services',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8
    },
    {
      url: 'https://zekhoi.dev/archive',
      lastModified: new Date(),
      changeFrequency: 'quarterly',
      priority: 0.6
    },
    {
      url: 'https://zekhoi.dev/contact',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.7
    }
  ];
}
