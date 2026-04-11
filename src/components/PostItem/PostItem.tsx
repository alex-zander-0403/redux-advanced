import React from "react";
import { IPost } from "../../models/IPost";

interface PostItemProps {
  post: IPost;
  update: (post: IPost) => void;
  remove: (post: IPost) => void;
}

//
export function PostItem({ post, update, remove }: PostItemProps) {
  //
  const handleUpdate = (event: React.MouseEvent) => {
    const title = prompt() || "";
    update({ ...post, title });
  };

  const handleRemove = (event: React.MouseEvent) => {
    event.stopPropagation();
    remove(post);
  };

  return (
    <div className="post-item" onClick={handleUpdate}>
      <div>
        <h3>{post.id}</h3>
        <h3>{post.title}</h3>
      </div>

      <p>{post.body}</p>
      <button className="post-item-delete-button" onClick={handleRemove}>
        Удалить пост
      </button>
    </div>
  );
}
