import Head from 'next/head'
import { useEffect } from 'react';
import styles from '../styles/Home.module.css'
import Box from './components/Box'

export default function Home() {
  useEffect(() => {
    const script = document.createElement("script");

    const scriptText = document.createTextNode(`(function(h,o,t,j,a,r){
      h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
      h._hjSettings={hjid:2117664,hjsv:6};
      a=o.getElementsByTagName('head')[0];
      r=o.createElement('script');r.async=1;
      r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
      a.appendChild(r);
  })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');`);

    script.appendChild(scriptText);
    document.head.appendChild(script);
  });
  return (
    <>
    <Head>
      <script>

      </script>

    </Head>
    <div className={styles.container}>
      <Box primary>Box 1</Box>
      <Box>Box 2</Box>
    </div>
    </>
  )
}
