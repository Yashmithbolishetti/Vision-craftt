/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface ServiceItem {
  id: string;
  title: string;
  teluguTitle: string;
  description: string;
  teluguDescription: string;
  iconName: string;
  features: string[];
  teluguFeatures: string[];
  bannerImage: string;
  badge?: string;
}

export interface DemoWebsite {
  id: string;
  title: string;
  teluguTitle: string;
  industry: string;
  badge: string;
  description: string;
  statusText: string;
  previewUrl: string;
  accentColor: string;
  mockContent: {
    heroTitle: string;
    heroSubtitle: string;
    ctaText: string;
    sections: { title: string; items: string[] }[];
  };
}

export interface PortfolioProject {
  id: string;
  name: string;
  teluguName: string;
  industry: string;
  description: string;
  teluguDescription: string;
  image: string;
  tags: string[];
  whatsappLeadText: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  teluguName: string;
  description: string;
  teluguDescription: string;
  badge?: string;
  features: string[];
  teluguFeatures: string[];
  isPopular?: boolean;
  idealFor: string;
  teluguIdealFor: string;
}

export interface BlogPost {
  id: string;
  title: string;
  teluguTitle: string;
  summary: string;
  teluguSummary: string;
  content: string;
  teluguContent: string;
  readTime: string;
  date: string;
  category: string;
  image: string;
}
