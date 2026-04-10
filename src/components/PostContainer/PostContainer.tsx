import { postAPI } from "../../services/PostService";
import { PostItem } from "../PostItem/PostItem";

export function PostContainer() {
  const { data: posts, isLoading, error } = postAPI.useFetchAllPostsQuery(5);

  return (
    <div>
      {isLoading && <h3>Posts Loading...</h3>}

      {error && <h3>Ошибка загрузки постов!</h3>}

      {posts && posts.map((post) => <PostItem key={post.id} post={post} />)}
    </div>
  );
}
