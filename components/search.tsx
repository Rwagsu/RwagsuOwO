"use client";
import { useSearch } from "basehub/react-search";
import type { SortedResult } from "fumadocs-core/server";
import {
  SharedProps,
  SearchDialog,
} from "fumadocs-ui/components/dialog/search";
import { useMemo } from "react";

export function Search({
  _searchKey,
  ...props
}: SharedProps & { _searchKey: string }) {
  const search = useSearch({
    _searchKey,
    queryBy: ["_title", "richText", "category", "slug"],
  });

  const results = useMemo(() => {
    if (!search.result || !search.result.found) return "empty";

    return search.result.hits.flatMap((hit) => {
      const items: SortedResult[] = [];
      const url = hit.document.slug ? `/docs/${hit.document.slug}` : "/docs";

      items.push({
        id: hit._key,
        content: (
          <span className="font-medium">
            {hit.highlight?._title ? (
              <span
                dangerouslySetInnerHTML={{
                  __html: hit.highlight._title.snippet as string,
                }}
              />
            ) : (
              hit.document._title
            )}
          </span>
        ) as unknown as string,
        type: "page",
        url,
      });

      for (const h of hit.highlights) {
        if (!h.snippet || h.fieldPath === "title") continue;

        items.push({
          id: `${hit._key}-${h.fieldPath}`,
          type: "text",
          content: (
            <span
              dangerouslySetInnerHTML={{
                __html: h.snippet as string,
              }}
            />
          ) as unknown as string,
          url,
        });
      }

      return items;
    });
  }, [search.result]);

  return (
    <SearchDialog
      {...props}
      onSearchChange={search.onQueryChange}
      search={search.query}
      isLoading={search.query.length > 0 && search.result === undefined}
      results={results}
    />
  );
}
