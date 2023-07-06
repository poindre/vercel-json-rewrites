import NextLink from "next/link";
import type { NextPage } from "next";
import { useSearchParams, usePathname } from "next/navigation";

const User: NextPage = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const id = searchParams.get("id");

  return (
    <div>
      <h1>Blogs</h1>
      <p>userId: {id}</p>
      <p>path: {pathname}</p>
      <NextLink href="/">home</NextLink>
      <NextLink href="/users/">users page</NextLink>
      <NextLink href={`/users/${id}/`}>user page</NextLink>
      <NextLink href={`/users/${id}/blogs/`}>user blogs page</NextLink>
      <NextLink href={`/users/${id}/blogs/1/`}>user blog1 page</NextLink>
      <NextLink href={`/users/${id}/blogs/2/`}>user blog2 page</NextLink>
      <NextLink href={`/users/${id}/blogs/3/`}>user blog3 page</NextLink>
      <NextLink href={`/users/${id}/blogs/4/`}>user blog4 page</NextLink>
    </div>
  );
};

export default User;
