import 'antd/dist/antd.css';
import PropTypes from "prop-types";
import Head from 'next/head';
import wrapper from "../store/configureStore";

const MyApp = ({ Component }) => {
  return (
      <>
        <Head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <script src="https://developers.kakao.com/sdk/js/kakao.js"></script>
          <title>운동 같이할래?!</title>
        </Head>

        <Component />
      </>
  )
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
}

export default wrapper.withRedux(MyApp);
