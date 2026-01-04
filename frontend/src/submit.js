// submit.js
import { useStore } from "./store";

export const SubmitButton = () => {
  const nodes = useStore((state) => state.nodes);
  const edges = useStore((state) => state.edges);

  const handleSubmit = async () => {
    const payload = {
      nodes,
      edges,
    };

    const res = await fetch("http://127.0.0.1:8000/pipelines/parse", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const data = await res.json();

    alert(
      `Nodes: ${data.num_nodes}\nEdges: ${data.num_edges}\nIs DAG: ${data.is_dag}`
    );
  };

  return (
    <div className="flex justify-center">
      <button
        onClick={handleSubmit}
        className="p-2 bg-blue-500 hover:bg-blue-700 text-white rounded-lg"
      >
        Submit
      </button>
    </div>
  );
};
