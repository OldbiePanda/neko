// InstagramService.ts
// Service to sync Instagram content (pinned reels/stories, recent posts)

export type InstagramMedia = {
  id: string;
  media_type: 'IMAGE' | 'VIDEO' | 'CAROUSEL_ALBUM';
  media_url: string;
  permalink: string;
  caption?: string;
  thumbnail_url?: string;
  timestamp: string;
};

export class InstagramService {
  // Optionally, set up a proxy endpoint to handle authentication securely
  static API_BASE = 'https://graph.instagram.com'; // or your proxy endpoint
  static ACCESS_TOKEN = 'YOUR_INSTAGRAM_ACCESS_TOKEN'; // Replace with real token or fetch from backend

  // Fetch recent media (posts, reels, etc.)
  static async fetchRecentMedia(limit = 10): Promise<InstagramMedia[]> {
    const fields = 'id,media_type,media_url,permalink,caption,thumbnail_url,timestamp';
    const url = `${this.API_BASE}/me/media?fields=${fields}&access_token=${this.ACCESS_TOKEN}&limit=${limit}`;
    const res = await fetch(url);
    if (!res.ok) throw new Error('Failed to fetch Instagram media');
    const data = await res.json();
    return data.data as InstagramMedia[];
  }

  // Fetch pinned reels/stories (requires proxy or backend, as Graph API does not expose "pinned" directly)
  static async fetchPinnedContent(): Promise<InstagramMedia[]> {
    // This is a placeholder. You may need to:
    // 1. Use a proxy server to call the Instagram API with elevated permissions
    // 2. Store pinned IDs in your backend and fetch them here
    // For now, just return an empty array or mock data
    return [];
  }

  // (Optional) Handle authentication/refresh token via proxy
  static async refreshAccessToken(): Promise<string> {
    // Implement token refresh logic or call your backend
    return this.ACCESS_TOKEN;
  }
} 