import NextLink from "next/link";
import type { NextPage } from "next";

const Home: NextPage = () => (
  <div>
    <h1>Home</h1>
    <NextLink href="/users">users page</NextLink>
    <NextLink href="/users/1">user1 page</NextLink>
    <NextLink href="/users/2">user2 page</NextLink>
    <NextLink href="/users/3">user3 page</NextLink>
    <NextLink href="/redirect">redirect page</NextLink>
  </div>
);

export default Home;
