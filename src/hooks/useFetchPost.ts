"use client";

import { useState, useEffect } from "react";
import { Post } from "@/interfaces/PostInterface";

export function useFetchPost(id: string) {
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        setLoading(true);
        setError(null);

        // Fetch individual post and image data
        const [response, imageResponse] = await Promise.all([
          fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
            next: { revalidate: 3600 }, // Revalidate every hour
          }),
          fetch(`https://picsum.photos/v2/list?page=${id}&limit=1`, {
            next: { revalidate: 3600 },
          }),
        ]);

        if (!response.ok) {
          throw new Error("Failed to fetch post data");
        }

        if (!imageResponse.ok) {
          throw new Error(`Failed to fetch image: ${imageResponse.status}`);
        }

        const postData = await response.json();

        const imageData = await imageResponse.json();

        // Combine post with image
        const postWithImage = {
          ...postData,
          image: imageData[0].download_url,
        };

        setPost(postWithImage);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchPost();
    }
  }, [id]);

  return { post, loading, error };
}
