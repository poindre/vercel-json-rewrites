import NextLink from "next/link";
import type { NextPage } from "next";
import { useSearchParams, usePathname } from "next/navigation";

const User: NextPage = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const id = searchParams.get("id");
  console.log(id);

  return (
    <div>
      <h1>User</h1>
      <p>id: {id}</p>
      <p>path: {pathname}</p>
      <NextLink href="/">home</NextLink>
      <NextLink href="/users">users page</NextLink>
    </div>
  );
};

export default User;
