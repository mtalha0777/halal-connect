import { allUsersData } from "@/lib/report-data";
import UserDetailsClient from "./UserDetailsClient";
import AdminLayout from "@/components/layout/AdminLayout";
export async function getStaticProps({ params }) {
  const { id } = params;

  const matchedUser = allUsersData.find((u) => String(u.id) === id);

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
  const paths = allUsersData.map((user) => ({
    params: { id: String(user.id) },
  }));

  return { paths, fallback: false };
}

export default function UserDetailsPage({ user }) {
  return <UserDetailsClient user={user} />;
}

UserDetailsPage.getLayout = function getLayout(page) {
  return <AdminLayout>{page}</AdminLayout>;
};
