import { allusersvalue } from "@/lib/data";
import ViewDetailsClient from "./ViewDetailsClient";
import AdminLayout from "@/components/layout/AdminLayout";
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


ViewDetailsPage.getLayout = function getLayout(page) {
  return (
    <AdminLayout>
      {page}
    </AdminLayout>
  );
};
