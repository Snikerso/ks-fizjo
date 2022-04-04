import { useEffect } from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";

const Messenger = () => {
  useEffect(() => {});
  return <></>;
};

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
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
            <meta
              name="google-site-verification"
              content="smm-fyI5xNBqpuIgeKXH9Lj4A_oSn01-qVHW4Vc1nZA"
            />
            <meta
              name="google-site-verification"
              content="smm-fyI5xNBqpuIgeKXH9Lj4A_oSn01-qVHW4Vc1nZA"
            />
            <title>Kamila Spłocharska - Fizjoterapia</title>
          </>
        </Head>
        <body>
          <div id="fb-root"></div>
          <div id="fb-customer-chat" className="fb-customerchat"></div>

          <script
            dangerouslySetInnerHTML={{
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
                `,
            }}
          />

          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
