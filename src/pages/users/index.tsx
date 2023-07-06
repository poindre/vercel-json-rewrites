import NextLink from "next/link";
import type { NextPage } from "next";

const Users: NextPage = () => (
  <div>
    <h1>Users</h1>
    <NextLink href="/">home</NextLink>
    <NextLink href="/users/1">user1 page</NextLink>
    <NextLink href="/users/2">user2 page</NextLink>
    <NextLink href="/users/3">user3 page</NextLink>
  </div>
);

export default Users;
