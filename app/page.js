import RecommendedPlan from "../components/RecommendedPlan";
import PlanGenerator from "../components/PlanGenerator";

export default function Page() {
  return (
    <div className="grid">
      <section className="card">
        <h2>Best Starter Blueprint</h2>
        <RecommendedPlan />
      </section>
      <section className="card">
        <h2>Customize Your Plan</h2>
        <PlanGenerator />
      </section>
    </div>
  );
}
