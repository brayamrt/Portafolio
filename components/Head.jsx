import Head from 'next/head';

const CustomHead = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="description"
        content="Brayam Ricardo Portafolio."
      />
      <meta
        name="keywords"
        content="kostas georgiou, kostas, georgiou, data scientist portfolio, machine learning engineer, kostas georgiou portfolio, vscode-portfolio"
      />
      <meta property="og:title" content="Brayam Ricardo Portafolio." />
      <meta
        property="og:description"
        content="Brayam Ricardo Portafolio."
      />
      <meta property="og:image" content="https://imgur.com/YTNNknY.png" />
      <meta property="og:url" content="https://gkos.tech" />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
};

export default CustomHead;

CustomHead.defaultProps = {
  title: 'Brayam Ricardo',
};
