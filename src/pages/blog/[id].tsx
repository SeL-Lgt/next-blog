import { useRouter } from "next/router";

export default function BlogPage() {
  const router = useRouter();

  return <p>Post:{router.query.id}</p>;
}
