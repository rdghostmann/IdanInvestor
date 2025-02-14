// Investment.jsx (Server Component)
import InvestForm from "./InvestForm";
import { getUserFromSession, getUserBalance } from "@/lib/actions";
import { getServerSession } from "next-auth";

const Investment = async () => {
  
  const session = await getServerSession();
  if (!session?.user?.email) return <p>Please log in to invest.</p>;

  const user = await getUserFromSession();
  const { balance } = await getUserBalance(session.user.email);

  return <InvestForm user={user} balance={balance} />;
};

export default Investment;
