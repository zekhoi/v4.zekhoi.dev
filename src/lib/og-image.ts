/**
 * Utility to extract Open Graph image from a URL at runtime
 */
export async function getOgImage(url: string): Promise<string | null> {
  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 5000); // 5 second timeout

    const response = await fetch(url, {
      signal: controller.signal,
      headers: {
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
        Accept: 'text/html'
      }
    });

    clearTimeout(timeout);

    if (!response.ok) return null;

    const html = await response.text();

    // Extract og:image from meta tags
    const ogImageMatch = html.match(
      /<meta\s+property=["']og:image["']\s+content=["']([^"']+)["']/i
    );

    if (ogImageMatch?.[1]) {
      return ogImageMatch[1];
    }

    // Fallback: try twitter:image
    const twitterImageMatch = html.match(
      /<meta\s+name=["']twitter:image["']\s+content=["']([^"']+)["']/i
    );

    if (twitterImageMatch?.[1]) {
      return twitterImageMatch[1];
    }

    return null;
  } catch (error) {
    console.warn(`Failed to fetch og:image from ${url}:`, error);
    return null;
  }
}

/**
 * Default placeholder image URL
 */
export const DEFAULT_PLACEHOLDER =
  'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22800%22 height=%22450%22%3E%3Crect fill=%22%23f5f5f5%22 width=%22800%22 height=%22450%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 dominant-baseline=%22middle%22 text-anchor=%22middle%22 font-family=%22monospace%22 font-size=%2224%22 fill=%22%23999%22%3EProject Screenshot%3C/text%3E%3C/svg%3E';
