import { useState } from "react";

function App() {
  const [color, setColor] = useState("cadetblue");

  return (
    <div className="w-full h-screen duration-200" style={{ background: color }}>
      <div style={{ background: "white", width: "320px", borderRadius: "10px", padding: "20px 15px", marginLeft: "auto", marginRight: "auto" }} className="fixed flex flex-wrap justify-center top-12 inset-x-0 px-2">

        <button
          class="rounded-md bg-yellow-600 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-yellow-700 focus:shadow-none active:bg-yellow-700 hover:bg-yellow-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2"
          type="button"
          onClick={() => setColor("#CA8A04")}
        >
          Gold
        </button>
        <button
          class="rounded-md bg-blue-600 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-blue-700 focus:shadow-none active:bg-blue-700 hover:bg-blue-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2"
          type="button"
          onClick={() => setColor("#0071fc")}
        >
          Blue
        </button>
        <button
          class="rounded-md bg-red-600 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-red-700 focus:shadow-none active:bg-red-700 hover:bg-red-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2"
          type="button"
          onClick={() => setColor("red")}
        >
          Red
        </button>
        <button
          class="rounded-md bg-green-600 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-green-700 focus:shadow-none active:bg-green-700 hover:bg-green-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2"
          type="button"
          onClick={() => setColor("#00ba00")}
        >
          Green
        </button>
      </div>
    </div>
  );
}

export default App;
