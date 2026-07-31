export const APP_URL = 'https://app.timetracker.io.vn';
export const SITE_URL = 'https://timetracker.io.vn';
export const CONTACT = 'hello@timetracker.io.vn';
/** Written once, shown on every legal page. */
export const LAST_UPDATED = '30/07/2026';

/**
 * The date the content last changed, for `sitemap.xml`.
 *
 * Hardcoded rather than `new Date()`: the sitemap is generated at build time, so
 * a live clock would claim every page changed on every deploy, and a crawler
 * that has been told that a few times stops believing the field.
 */
export const CONTENT_UPDATED = '2026-07-31';

/**
 * Search Console's HTML-tag verification token.
 *
 * Only needed for a URL-prefix property. Verifying the domain over DNS covers
 * the apex and every subdomain at once and leaves this unset, which is why it
 * reads from the environment instead of being committed.
 */
export const GOOGLE_SITE_VERIFICATION = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION;
