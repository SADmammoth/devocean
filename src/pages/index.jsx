import { Link } from "umi";

export default function IndexPage() {
  return (
    <div>
      <h1 className="title">Page index</h1>
      <div>
        <Link to="another">Go to another</Link>
      </div>
    </div>
  );
}
