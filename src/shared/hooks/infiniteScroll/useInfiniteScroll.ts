"use client";
import { useEffect, useRef } from "react";

import { UseInfiniteScrollOptions } from "./types";

export const useInfiniteScroll = ({ fetchNextPage, hasNextPage, isFetchingNextPage }: UseInfiniteScrollOptions) => {
  const observerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!hasNextPage) return; //  다음 페이지 없으면 감지하지 않음

    const observer = new IntersectionObserver(
      entries => {
        const [entry] = entries;

        if (entry.isIntersecting && !isFetchingNextPage) {
          // 화면에서 감지되었거나 데이터 페칭 중이 아니라면 다음 페이지 요청

          fetchNextPage();
          console.log("hasNextPage", hasNextPage, fetchNextPage());
        }
      },
      { threshold: 1.0 },
    );

    const current = observerRef.current;

    if (current) {
      observer.observe(current);
    }

    return () => {
      if (current) observer.unobserve(current);
    };
  }, [fetchNextPage, hasNextPage, isFetchingNextPage]);

  return observerRef;
};
