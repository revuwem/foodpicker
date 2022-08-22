import fs from "fs";
import matter from "gray-matter";
import { join } from "path/posix";
import { remark } from "remark";
import html from "remark-html";

export function getPolicyContent() {
  const dir = join(process.cwd(), "");
  const fullPath = join(dir, "policy.md");
  const fileContents = fs.readFileSync(fullPath, "utf-8");
  const { content } = matter(fileContents);

  return content;
}

export default async function markdownToHtml(md: string) {
  const result = await remark().use(html).process(md);
  return result.toString();
}
