export const OG: React.FC = () => {
  return (
    <>
      <meta property="og:title" content="Resultados das Loterias" />
      <meta property="og:site_name" content="Loterias" />
      <meta property="og:url" content={process.env.PAGEHOST_URL} />
      <meta
        property="og:description"
        content="Abiu Loterias e mídias digitais"
      />
      <meta property="og:type" content="website" />
      <meta
        property="og:image"
        content={`${process.env.PAGEHOST_URL}/api/og`}
      />
      <meta
        name="description"
        content="Atuamos na área de comunicação, prestando serviços em diversos segmentos do ramo, oferecendo ao nosso cliente ações de mídias flexíveis e direcionadas, com um custo baixíssimo e grande impacto visual."
      />
      <meta
        name="keywords"
        content="mídia digital caxias do sul, mídia indoor caxias, propaganda nas padarias caxias do sul,propaganda na farmácia caxias do sul, mídia no edifício estrela caxias do sul, busdoor ônibus, busdoor, mídia indoor, comunicação rápida, midia prédios, mídias centro, mídia"
      />
      <meta name="robots" content="index, follow" />
    </>
  );
};
