export interface UseInfiniteScrollOptions {
  fetchNextPage: () => void;
  hasNextPage?: boolean;
  isFetchingNextPage?: boolean;
}
