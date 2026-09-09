import { useState, useEffect } from "react";

function ContadorCurtidas() {
  const [curtidas, setCurtidas] = useState(0);

  useEffect(() => {
    if (curtidas >= 5) {
      alert("Curtidas em alta!");
    }
  }, [curtidas]);

  return (
    <div className="contador">
      <h1> Curtidas</h1>

      <p>{curtidas} curtidas</p>

      <button onClick={() => setCurtidas(curtidas + 1)}>
        Curtir
      </button>
    </div>
  );
}

export default ContadorCurtidas;