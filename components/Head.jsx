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
        content="Web developer, javascript,next.js,brayam ricardo"
      />
      <meta property="og:title" content="Brayam Ricardo Portafolio." />
      <meta
        property="og:description"
        content="Brayam Ricardo Portafolio."
      />
      <meta property="og:image" content="" />
      <meta property="og:url" content="https://portafolio-eight-psi.vercel.app/" />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
};

export default CustomHead;

CustomHead.defaultProps = {
  title: 'Brayam Ricardo',
};
