"use client";

import { cn } from "@/lib/utils";
import { ChevronRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

type BreadCrumbType = {
  title: string;
  link: string;
};

function generateBreadcrumbs(pathname: string): BreadCrumbType[] {
  const segments = pathname.split("/").filter((segment) => segment);

  return segments.map((segment, index) => {
    const link = "/" + segments.slice(0, index + 1).join("/");
    const title = segment.charAt(0).toUpperCase() + segment.slice(1);
    return { title, link };
  });
}

export default function BreadCrumb() {
  const pathname = usePathname();

  const items = generateBreadcrumbs(pathname);

  return (
    <div className="mb-4 flex items-center space-x-1 text-sm text-muted-foreground">
      {items?.map((item: BreadCrumbType, index: number) => (
        <React.Fragment key={item.title}>
          <Link
            href={item.link}
            className={cn(
              "font-medium",
              index === items.length - 1
                ? "pointer-events-none text-foreground"
                : "text-muted-foreground"
            )}
          >
            {item.title}
          </Link>
          {index < items.length - 1 && <ChevronRightIcon className="h-4 w-4" />}
        </React.Fragment>
      ))}
    </div>
  );
}
