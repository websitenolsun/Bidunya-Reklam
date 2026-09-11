import { siteConfig } from "@/data/site";

export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function absoluteUrl(path: string) {
  if (path.startsWith("http")) {
    return path;
  }

  return `${siteConfig.url}${path}`;
}

export function formatSpec(label: string, value: string | null) {
  if (!value) {
    return null;
  }

  return `${label}: ${value}`;
}
