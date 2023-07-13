import { useRouter } from "next/router"
import CompA from "@/components/CompA";

export default function MySlug(props) {
    const router = useRouter();

    // slug 和 query string 都放在 router.query
  return (
    <>
   <CompA />
    <div>{ JSON.stringify(router.query) }</div>
    </>
  )
}