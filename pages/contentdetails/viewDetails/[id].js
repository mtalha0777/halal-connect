import { allusersvalue } from "@/lib/data";
import ViewDetailsClient from "./ViewDetailsClient";

export async function getStaticProps({ params }) {
  const { id } = params;
  const matchedUser = allusersvalue.find((u) => String(u.id) === id);

  if (!matchedUser) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      user: matchedUser,
    },
  };
}

export async function getStaticPaths() {
  const paths = allusersvalue.map((user) => ({
    params: { id: String(user.id) },
  }));

  return { paths, fallback: false };
}

export default function ViewDetailsPage({ user }) {
  return <ViewDetailsClient user={user} />;
}