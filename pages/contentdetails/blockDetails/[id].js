import { blockedUsers } from "@/lib/blocked-data";
import BlockDetailsClient from "./BlockDetailsClient";
import AdminLayout from "@/components/layout/AdminLayout";
export async function getStaticProps({ params }) {
  const { id } = params;
  const matchedUser = blockedUsers.find((u) => String(u.banId) === id);

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
  const paths = blockedUsers.map((user) => ({
    params: { id: String(user.banId) },
  }));

  return { paths, fallback: false };
}

export default function BlockDetailsPage({ user }) {
  return <BlockDetailsClient user={user} />;
}

BlockDetailsPage.getLayout = function getLayout(page) {
  return <AdminLayout>{page}</AdminLayout>;
};
