import { pdfjs, Document, Page, PDFDownloadLink } from 'react-pdf'
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`
const myResume = './Resume.pdf';

const AboutPage = () => {
  return (
    <>
      <h3>Acerca de Mi</h3><br/>
      <ul>
        <li><span role="img" aria-label="book">📖</span> Buscando ser desarrollador <b>Full Stacks</b> - <b>Cientifico de Datos</b> </li>
        <li><span role="img" aria-label="graduate-hat">🎓</span> Realización de Diplomado de <b>Machine Learning con Python</b> @ <a href='https://corhuila.edu.co'>Corporación Universitaria del Huila</a>.</li>
        <li><span role="img" aria-label="light-bulb">💡</span> Abierto a colaborar en proyectos e ideas innovadoras. </li>
        <li><span role="img" aria-label="laptop">💻</span> Actualmente trabajando en soporte tecnico. </li>
      </ul>
      <br/>
      <center>
        <h3>Hoja de Vida (<a href={myResume} download="Resume-KonstantinosGeorgiou.pdf">Descargar</a>)</h3>
        <br />
        <Document file={myResume}>
          <Page pageIndex={0} />
          <Page pageIndex={1} />
        </Document>
      </center>
    </>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'About' },
  };
}

export default AboutPage;
