import { cacheLife } from "next/cache";
import { connection } from "next/server";
import { Suspense } from "react";

async function UniqueContent() {
  "use cache";
  //   await connection();
  cacheLife({
    stale: 3600,
    revalidate: 7200,
    expire: 86400,
  });
  const uuid = crypto.randomUUID();
  return <p>Request ID: {uuid}</p>;
}

export default function Page() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <UniqueContent />
    </Suspense>
  );
}
