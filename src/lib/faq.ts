import type { Key } from '@/lib/i18n';

/**
 * The question list, in the order it is read.
 *
 * One array feeds both the rendered section and the `FAQPage` JSON-LD. Keeping
 * them on the same source is the point: structured data that disagrees with the
 * visible answer is what Google treats as a reason to ignore all of it.
 */
export const FAQ: { q: Key; a: Key }[] = [
  { q: 'faq.q1', a: 'faq.a1' },
  { q: 'faq.q2', a: 'faq.a2' },
  { q: 'faq.q3', a: 'faq.a3' },
  { q: 'faq.q4', a: 'faq.a4' },
  { q: 'faq.q5', a: 'faq.a5' },
  { q: 'faq.q6', a: 'faq.a6' },
  { q: 'faq.q7', a: 'faq.a7' },
  { q: 'faq.q8', a: 'faq.a8' },
  { q: 'faq.q9', a: 'faq.a9' },
  { q: 'faq.q10', a: 'faq.a10' },
];
