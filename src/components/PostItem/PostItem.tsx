import { IPost } from "../../models/IPost";

interface PostItemProps {
  post: IPost;
}

//
export function PostItem({ post }: PostItemProps) {
  return (
    <div className="post-item">
      <div>
        <h3>{post.id}</h3>
        <h3>{post.title}</h3>
      </div>

      <p>{post.body}</p>
      <button className="post-item-delete-button">Удалить пост</button>
    </div>
  );
}
