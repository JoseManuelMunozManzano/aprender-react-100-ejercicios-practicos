import { useState } from 'react';

interface PostProps {
  useId?: number;
  id?: number;
  title?: string;
  body?: string;
}

export const Post = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [post, setPost] = useState<PostProps>({});
  const [error, setError] = useState<boolean>(false);

  // To-do funciona correctamente, pero tenemos 6 setStates en una función.
  // Cuando en una función dos o más estados cambian juntos, es mejor usar useReducer.
  const handleFetch = () => {
    setLoading(true);
    setError(false);

    fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then((res) => {
        return res.json();
      })
      .then((data: PostProps) => {
        setPost(data);
        setLoading(false);
      })
      .catch((err: Error) => {
        setError(true);
        setLoading(false);
      });
  };

  return (
    <div>
      <button onClick={handleFetch}>{loading ? 'Wait' : 'Fetch the post'}</button>
      <p>{post?.title}</p>
      <span>{error && 'Something went wrong!'}</span>
    </div>
  );
};
