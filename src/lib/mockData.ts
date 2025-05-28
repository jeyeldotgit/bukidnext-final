import type { Module } from '../types/Module';

export const featuredModules: Module[] = [
  {
    id: 1,
    title: 'Rice Farming Techniques',
    progress: 60,
    thumbnail: 'https://readdy.ai/api/search-image?query=Filipino%20farmer%20working%20in%20lush%20green%20rice%20fields%20with%20traditional%20farming%20techniques%2C%20bright%20sunlight%2C%20clear%20blue%20sky%2C%20terraced%20rice%20paddies%2C%20rural%20Philippine%20countryside%20landscape&width=400&height=250&seq=1&orientation=landscape',
    language: 'English',
    duration: '2 hours',
    isDownloaded: true
  },
  {
    id: 2,
    title: 'Financial Literacy for Farmers',
    progress: 30,
    thumbnail: 'https://readdy.ai/api/search-image?query=Filipino%20farmer%20calculating%20finances%20on%20a%20simple%20calculator%20with%20farming%20ledger%20book%2C%20sitting%20under%20a%20mango%20tree%2C%20rural%20farm%20setting%2C%20warm%20sunlight%2C%20simple%20wooden%20table%2C%20Philippine%20countryside%20in%20background&width=400&height=250&seq=2&orientation=landscape',
    language: 'English',
    duration: '1.5 hours',
    isDownloaded: false
  },
  {
    id: 3,
    title: 'Climate Resilient Farming',
    progress: 0,
    thumbnail: 'https://readdy.ai/api/search-image?query=Filipino%20farmer%20implementing%20climate%20resilient%20farming%20techniques%2C%20drought%20resistant%20crops%2C%20water%20conservation%20methods%2C%20sustainable%20agriculture%20practices%2C%20rural%20Philippine%20farm%20with%20mountains%20in%20background%2C%20warm%20sunset%20lighting&width=400&height=250&seq=3&orientation=landscape',
    language: 'English',
    duration: '3 hours',
    isDownloaded: false
  }
];

export const recommendedModules: Module[] = [
  {
    id: 4,
    title: 'Livestock Management',
    progress: 0,
    thumbnail: 'https://readdy.ai/api/search-image?query=Filipino%20farmer%20tending%20to%20livestock%20on%20a%20small%20rural%20farm%2C%20native%20carabao%20and%20chickens%2C%20traditional%20Filipino%20farm%20structures%2C%20lush%20tropical%20vegetation%2C%20golden%20hour%20lighting%2C%20mountains%20in%20background&width=400&height=250&seq=4&orientation=landscape',
    language: 'English',
    duration: '2.5 hours',
  },
  {
    id: 5,
    title: 'Organic Pest Control',
    progress: 0,
    thumbnail: 'https://readdy.ai/api/search-image?query=Filipino%20farmer%20applying%20natural%20pest%20control%20methods%20in%20vegetable%20garden%2C%20using%20traditional%20techniques%2C%20rural%20farm%20setting%2C%20diverse%20crops%2C%20bright%20daylight%2C%20mountains%20in%20background%2C%20traditional%20Filipino%20farming%20tools&width=400&height=250&seq=5&orientation=landscape',
    language: 'English',
    duration: '1 hour',
  }
];

export const weatherData = {
  temperature: 32,
  condition: 'Sunny',
  alert: 'Heat advisory in effect',
};

export const blogs = [
  {
    id: 1,
    title: '5 Tips for a Bountiful Rice Harvest',
    summary: 'Discover practical tips to increase your rice yield this season.',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
    date: '2024-06-01',
    author: 'AgriSagip Team',
  },
  {
    id: 2,
    title: 'Organic Pest Control Methods',
    summary: 'Learn how to protect your crops using natural pest control techniques.',
    image: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80',
    date: '2024-05-20',
    author: 'AgriSagip Team',
  },
];

export const govAids = [
  {
    id: 1,
    title: 'Rice Competitiveness Enhancement Fund',
    summary: 'Financial and training support for rice farmers nationwide.',
    image: 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=400&q=80',
    agency: 'Department of Agriculture',
    link: '#',
  },
  {
    id: 2,
    title: 'Free Crop Insurance Program',
    summary: 'Get your crops insured for free under the government program.',
    image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80',
    agency: 'Philippine Crop Insurance Corporation',
    link: '#',
  },
]; 