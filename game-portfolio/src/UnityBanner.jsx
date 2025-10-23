import { useEffect, useRef, useState } from "react";

export default function UnityBanner() {
  const unityContainerRef = useRef(null);
  // Usamos uma ref para guardar a instância do Unity e poder limpá-la depois
  const unityInstanceRef = useRef(null);

  useEffect(() => {
    // Flag para evitar múltiplas execuções se o componente for montado/desmontado rapidamente
    let isMounted = true; 
    
    const script = document.createElement("script");
    script.src = "/unity-build/Build/MicroGameWebgl.loader.js";
    
    script.onload = () => {
      // Garante que o código só rode se o componente ainda estiver montado
      if (!isMounted || typeof createUnityInstance === "undefined") {
        return;
      }

      const canvas = document.createElement("canvas");
      canvas.id = "unity-canvas";
      canvas.style.width = "100%";
      canvas.style.height = "100%";
      
      // Limpa o container antes de adicionar o novo canvas
      if (unityContainerRef.current) {
        unityContainerRef.current.innerHTML = "";
        unityContainerRef.current.appendChild(canvas);
      }

      createUnityInstance(canvas, {
        dataUrl: "/unity-build/Build/MicroGameWebgl.data",
        frameworkUrl: "/unity-build/Build/MicroGameWebgl.framework.js",
        codeUrl: "/unity-build/Build/MicroGameWebgl.wasm",
        streamingAssetsUrl: "StreamingAssets",
        companyName: "DefaultCompany",
        productName: "MicroGameWebgl",
        productVersion: "2.0",
      }).then((unityInstance) => {
        if (isMounted) {
          console.log("✅ Unity build loaded successfully");
          // Salva a instância na ref para usar na limpeza
          unityInstanceRef.current = unityInstance;
        }
      }).catch((err) => {
        console.error("❌ Unity load error:", err);
      });
    };
    
    document.body.appendChild(script);

    // Função de limpeza (cleanup)
    return () => {
      isMounted = false;

      // 1. Encerra a instância do Unity para liberar memória
      if (unityInstanceRef.current) {
        unityInstanceRef.current.Quit(() => {
            console.log("✅ Unity instance quit successfully.");
        }).catch((err) => {
            console.error("❌ Error quitting Unity instance:", err);
        });
        unityInstanceRef.current = null;
      }
      
      // 2. Remove o script do corpo do documento
      document.body.removeChild(script);

      // 3. Limpa o conteúdo do container
      if (unityContainerRef.current) {
        unityContainerRef.current.innerHTML = "";
      }
    };
  }, []); // O array vazio garante que o useEffect rode apenas na montagem/desmontagem

  return (
   
    <div
      ref={unityContainerRef}
      id="unity-container"
      style={{
        width: "100%",
        height: "70vh",
        background: "#111",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    />
  );
}