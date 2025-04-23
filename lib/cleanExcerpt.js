// lib/cleanExcerpt.js
export function cleanExcerpt(htmlString) {
  return htmlString
    .replace(/<[^>]*>/g, "") // remove HTML tags
    .replace(/\[&hellip;\]/g, "") // remove [&hellip;]
    .replace(/\[…\]/g, "") // remove […]
    .replace(/\[\.\.\.\]/g, "") // remove [...]
    .replace(/&hellip;/g, "…") // decode &hellip;
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&#8217;/g, "’")
    .trim();
}
