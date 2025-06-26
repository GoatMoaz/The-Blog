"use client";

import { useState, useEffect } from "react";
import { Post } from "@/interfaces/PostInterface";

export function useFetchPosts() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        setError(null);

        // Fetch posts and images from the APIs
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );

        const imagesResponse = await fetch(
          "https://picsum.photos/v2/list?page=1&limit=100"
        );

        if (!response.ok || !imagesResponse.ok) {
          throw new Error(
            `Failed to fetch posts: ${response.status || imagesResponse.status}`
          );
        }

        const data = await response.json();
        const imagesUrls = await imagesResponse.json();

        // Combine posts with images
        const postsWithImages = data.map((post: Post, index: number) => ({
          ...post,
          image: imagesUrls[index].download_url,
        }));

        setPosts(postsWithImages);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return { posts, loading, error };
}
