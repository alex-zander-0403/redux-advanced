import { useEffect } from "react";
import { postAPI } from "../../services/PostService";
import { PostItem } from "../PostItem/PostItem";

//
export function PostContainer() {
  const {
    data: posts,
    isLoading,
    error,
    refetch,
  } = postAPI.useFetchAllPostsQuery(5);

  return (
    <div>
      <button onClick={() => refetch()}>Refetch</button>

      {isLoading && <h3>Posts Loading...</h3>}

      {error && <h3>Ошибка загрузки постов!</h3>}

      {posts && posts.map((post) => <PostItem key={post.id} post={post} />)}
    </div>
  );
}
