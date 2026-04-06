import { postAPI } from "../services/PostService";

export function PostContainer() {
  const { data: posts, isLoading, error } = postAPI.useFetchAllPostsQuery(5);

  return (
    <div>
      {isLoading && <h3>Posts Loading...</h3>}

      {error && <h3>Ошибка загрузки постов!</h3>}

      {posts &&
        posts.map((post) => {
          return (
            <div key={post.id}>
              <h3>{post.title}</h3>
              <p>{post.body}</p>
            </div>
          );
        })}
    </div>
  );
}
