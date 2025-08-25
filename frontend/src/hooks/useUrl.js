import { useMutation, useQuery } from "@tanstack/react-query";
import { shortenUrl, fetchShortUrl } from "../api/urlApi";

export const useShortenUrl = () => {
  return useMutation({
    mutationFn: (originalUrl) => shortenUrl(originalUrl),
  });
};

export const useFetchShortUrl = (shortUrl, enabled = false) => {
  return useQuery({
    queryKey: ["shortUrl", shortUrl],
    queryFn: () => fetchShortUrl(shortUrl),
    enabled,
  });
};
