import NextLink from "next/link";
import type { NextPage } from "next";
import { useSearchParams, usePathname } from "next/navigation";

const Blog: NextPage = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const id = searchParams.get("id");
  const blogId = searchParams.get("blogId");

  return (
    <div>
      <h1>Blog</h1>
      <p>userId: {id}</p>
      <p>blogId: {blogId}</p>
      <p>path: {pathname}</p>
      <NextLink href="/">home</NextLink>
      <NextLink href="/users/">users page</NextLink>
      <NextLink href={`/users/${id}/`}>user page</NextLink>
      <NextLink href={`/users/${id}/blogs`}>user blog page</NextLink>
    </div>
  );
};

export default Blog;
