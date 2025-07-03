// import { featureSubscriptionUsers } from "@/lib/subscription-data";
// import FeatureSubscriptionClient from "./FeatureSubscriptionClient";

// export async function getStaticProps({ params }) {
//   const { id } = params;
//   const matchedUser = featureSubscriptionUsers.find((u) => String(u.userId) === id);

//   if (!matchedUser) {
//     return {
//       notFound: true,
//     };
//   }
//   return {
//     props: {
//       user: matchedUser,
//     },
//   };
// }
// export async function getStaticPaths() {
//   const paths = featureSubscriptionUsers.map((user) => ({
//     params: { id: String(user.userId) }, 
//   }));

//   return { paths, fallback: false };
// }
// export default function FeatureSubscriptionDetailsPage({ user }) {
//   return <FeatureSubscriptionClient user={user} />;
// }


// File: pages/subscription/details/[id].js


import { featureSubscriptionUsers } from "@/lib/subscription-data";
import FeatureSubscriptionClient from "./FeatureSubscriptionClient";

// ... getStaticProps function waisa hi rahega ...
export async function getStaticProps({ params }) {
  const { id } = params;
  const matchedUser = featureSubscriptionUsers.find((u) => String(u.userId) === id);
  if (!matchedUser) {
    return { notFound: true, };
  }
  return { props: { user: matchedUser, }, };
}


// Is function ko change karein
export async function getStaticPaths() {
  const paths = featureSubscriptionUsers.map((user) => ({
    params: { id: String(user.userId) }, 
  }));

  // YEH LINE ADD KAREIN
  console.log("Building subscription detail pages for these IDs:", paths);

  return { paths, fallback: false };
}

// ... Default page component waisa hi rahega ...
export default function FeatureSubscriptionDetailsPage({ user }) {
  return <FeatureSubscriptionClient user={user} />;
}