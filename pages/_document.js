import Document, { Html, Head, Main, NextScript } from 'next/document'
import { useEffect } from 'react';


const Messenger = () =>{
    useEffect(()=>{


    })



    return(
        <>


        </>
    )
}

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  



  render() {
    // <!-- Messenger Wtyczka czatu Code -->
    // <div id="fb-root"></div>

    // <!-- Your Wtyczka czatu code -->
    // <div id="fb-customer-chat" class="fb-customerchat">
    // </div>



    return (
      <Html>
        <Head>
            <>
            <script dangerouslySetInnerHTML={{
                __html: `
                var chatbox = document.getElementById('fb-customer-chat');
                chatbox.setAttribute("page_id", "1626967450920148");
                chatbox.setAttribute("attribution", "biz_inbox");
                window.fbAsyncInit = function() {
                    FB.init({
                        xfbml            : true,
                        version          : 'v11.0'
                    });
                };
                
                (function(d, s, id) {
                    var js, fjs = d.getElementsByTagName(s)[0];
                    if (d.getElementById(id)) return;
                    js = d.createElement(s); js.id = id;
                    js.src = 'https://connect.facebook.net/pl_PL/sdk/xfbml.customerchat.js';
                    fjs.parentNode.insertBefore(js, fjs);
                }(document, 'script', 'facebook-jssdk'));
                `
                    }} />
                <title>lalalla</title>
            </>
        </Head>
        <body>
                <div id="fb-root"></div>
                <div id="fb-customer-chat" className="fb-customerchat"></div>
            
            <Main />
            <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument