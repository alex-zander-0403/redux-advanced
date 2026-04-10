import { postAPI } from "../../services/PostService";
import { PostItem } from "../PostItem/PostItem";
import { IPost } from "../../models/IPost";

//
export function PostContainer() {
  const {
    data: posts,
    isLoading,
    error,
    refetch,
  } = postAPI.useFetchAllPostsQuery(5);

  const [createPost, {}] = postAPI.useCreatePostMutation();

  const handleCreate = async () => {
    const title = prompt();
    await createPost({ title, body: title } as IPost);
  };

  return (
    <div>
      {isLoading && <h3>Posts Loading...</h3>}
      {error && <h3>Ошибка загрузки постов!</h3>}

      <button onClick={() => refetch()}>Refetch</button>

      <button onClick={handleCreate}>Добавить пост</button>
      {posts && posts.map((post) => <PostItem key={post.id} post={post} />)}
    </div>
  );
}
