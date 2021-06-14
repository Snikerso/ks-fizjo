import Document, { Html, Head, Main, NextScript } from 'next/document'
import { useEffect } from 'react';


const Messenger = () =>{
    useEffect(()=>{
        window.fbAsyncInit = function() {
            FB.init({
              xfbml            : true,
              version          : 'v10.0'
            })
          };
        (function(d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) return;
            js = d.createElement(s); js.id = id;
        js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
        fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));

    },[])



    return(
        <>
            <div id="fb-customer-chat" className="fb-customerchat"></div>
            <div id="fb-root"></div>

        </>
    )
}

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  



  render() {


    return (
      <Html>
        <Head>
            <>
            <Messenger/>
            <title>lalalla</title>
            </>
        </Head>
        <body>
        <div id="fb-root"></div>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument