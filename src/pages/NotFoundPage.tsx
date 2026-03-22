import { Link } from "react-router-dom";
import { SectionHeader } from "../components/common/States";

export function NotFoundPage() {
  return (
    <div>
      <SectionHeader title="Not Found" subtitle="The requested page does not exist." />
      <Link to="/">Back to home</Link>
    </div>
  );
}
