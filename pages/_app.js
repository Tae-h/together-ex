import '../styles/globals.css';
import 'antd/dist/antd.css';
import PropTypes from "prop-types";
import Head from 'next/head';

const MyApp = ({ Component }) => {
  return (
      <>
        <Head>
          <meta charSet="utf-8" />
          <title>노드버드</title>
        </Head>
        <Component />
      </>
  )
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
}

export default MyApp;
