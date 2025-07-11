import { featureSubscriptionUsers } from "@/lib/subscription-data";
import FeatureSubscriptionClient from "./FeatureSubscriptionClient";
import AdminLayout from "@/components/layout/AdminLayout";
export async function getStaticProps({ params }) {
  const { id } = params;
  const matchedUser = featureSubscriptionUsers.find(
    (u) => String(u.userId) === id
  );

  if (!matchedUser) {
    return { notFound: true };
  }
  return { props: { user: matchedUser } };
}
export async function getStaticPaths() {
  const paths = featureSubscriptionUsers.map((user) => ({
    params: { id: String(user.userId) },
  }));

  return { paths, fallback: "blocking" };
}

export default function FeatureSubscriptionDetailsPage({ user }) {
  return <FeatureSubscriptionClient user={user} />;
}

FeatureSubscriptionDetailsPage.getLayout = function getLayout(page) {
  return <AdminLayout>{page}</AdminLayout>;
};
