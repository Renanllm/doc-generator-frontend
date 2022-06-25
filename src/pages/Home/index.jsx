import { useState } from "react";
import { api } from "../../services/client";
import { replacements } from "../../utils/data";
import { downloadFile, getUrlFromBase64 } from "../../utils/file";

export const Home = () => {
  const [template, setTemplate] = useState("modelo-de-contrato-de-aluguel");

  const handleGenerateDocument = async () => {
    const response = await api.post("/generate", {
      template,
      params: replacements,
    });

    const base64File = response.data;
    const url = await getUrlFromBase64(base64File);

    downloadFile(url);
  };

  return (
    <div>
      <h1>Home Page</h1>
      <button type="button" onClick={handleGenerateDocument}>
        Generate!
      </button>
    </div>
  );
};
