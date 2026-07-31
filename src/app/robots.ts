import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/site';

/**
 * The answer-engine crawlers are named explicitly.
 *
 * `User-Agent: *` already allows them, so these rules change nothing today —
 * that is the point. They are here so the next person to tighten the wildcard
 * has to decide about these agents deliberately, instead of locking the product
 * out of AI answers as a side effect. The ones that matter most are those that
 * fetch a page in order to cite it in a live answer rather than to train on it:
 * OAI-SearchBot and ChatGPT-User for ChatGPT, Claude-SearchBot and Claude-User
 * for Claude, Perplexity-User for Perplexity.
 */
const ANSWER_ENGINES = [
  'OAI-SearchBot',
  'ChatGPT-User',
  'GPTBot',
  'Claude-SearchBot',
  'Claude-User',
  'ClaudeBot',
  'PerplexityBot',
  'Perplexity-User',
  'Google-Extended',
  'Applebot',
  'Applebot-Extended',
  'Bingbot',
  'DuckAssistBot',
  'MistralAI-User',
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: '*', allow: '/' },
      { userAgent: ANSWER_ENGINES, allow: '/' },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    // Names the canonical host for crawlers that honour the directive, pointing
    // away from the deploy-preview domains that serve the same build.
    host: SITE_URL,
  };
}
