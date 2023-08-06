interface Props {
  postTitle: string;
  author: string;
  children: string;
}

export const Post = ({ postTitle, author, children }: Props) => {
  return (
    <>
      <h2>{postTitle}</h2>
      <p>{author}</p>
      <p>{children}</p>
    </>
  );
};
