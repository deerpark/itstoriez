import { ReactElement } from 'react'
import { Route, heroString, nav } from '~/lib/config'
import { Header } from '~/components/Header'
import { Hero } from '~/components/Hero'
import { Nav } from '~/components/Nav'
import { Footer } from '~/components/Footer'
import { Banner, Promotion } from '~/components/Banner'

type LayoutProps = Route & {
  children: ReactElement | ReactElement[],
  promotion?: Promotion,
  prevRoute?: string,
  pathname?: string,
  cover?: JSX.Element,
  date?: JSX.Element,
  categoryId?: string,
  isWide?: boolean,
}

type RootLayoutProps = {
  children: ReactElement | ReactElement[],
  pathname?: string,
  isRoot: boolean,
  sidebar: boolean,
  categoryId?: string,
}

export function SiteMeta() {
  return (
    <>
      <meta charSet='utf-8' />
      <meta name='viewport' content='width=device-width,initial-scale=1' />
      <link rel='manifest' href='/site.webmanifest?v=20220321' />
      <link rel='mask-icon' href='/images/safari-pinned-tab.svg?v=20220321' color='#65a30d' />
      <link rel='shortcut icon' href='/favicon.ico?v=20220321' />
      <meta name='apple-mobile-web-app-title' content='itStoriez' />
      <meta name='application-name' content='itStoriez' />
      <meta name='msapplication-TileColor' content='#7c3aed' />
      <meta name='theme-color' content='#f8fafc' />
      {/* <script
        async
        src='https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1315238860718549'
        crossOrigin='anonymous'
      ></script> */}
      {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
      {/* <script async src='https://www.googletagmanager.com/gtag/js?id=G-NTZDCTHDX5'></script>
      <script
        dangerouslySetInnerHTML={{
          __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-NTZDCTHDX5');
      `,
        }}
      ></script> */}
      {/* <!-- Channel Plugin Scripts --> */}
      {/* <script
        dangerouslySetInnerHTML={{
          __html: `(function() {
          var w = window;
          if (w.ChannelIO) {
            return (window.console.error || window.console.log || function(){})('ChannelIO script included twice.');
          }
          var ch = function() {
            ch.c(arguments);
          };
          ch.q = [];
          ch.c = function(args) {
            ch.q.push(args);
          };
          w.ChannelIO = ch;
          function l() {
            if (w.ChannelIOInitialized) {
              return;
            }
            w.ChannelIOInitialized = true;
            var s = document.createElement('script');
            s.type = 'text/javascript';
            s.async = true;
            s.src = 'https://cdn.channel.io/plugin/ch-plugin-web.js';
            s.charset = 'UTF-8';
            var x = document.getElementsByTagName('script')[0];
            x.parentNode.insertBefore(s, x);
          }
          if (document.readyState === 'complete') {
            l();
          } else if (window.attachEvent) {
            window.attachEvent('onload', l);
          } else {
            window.addEventListener('DOMContentLoaded', l, false);
            window.addEventListener('load', l, false);
          }
        })();
        ChannelIO('boot', {
          "pluginKey": "baffea9f-5cfd-4d5d-935a-73409641e1f6"
        });`,
        }}
      ></script> */}
      {/* <!-- End Channel Plugin --> */}
      {/* <script async src='https://developers.kakao.com/sdk/js/kakao.min.js'></script> */}
    </>
  )
}

export function Layout({
  children,
  title,
  Icon,
  desc,
  promotion,
  prevRoute,
  cover,
  date,
  isWide,
  sidebar,
}: LayoutProps) {
  return (
    <div className={`bx-page ${isWide ? 'bx-page-wide' : ''}`}>
      {/* <div className='preview'>
          {previewEnabled ? (
            <Form method='post' action='/posts/preview/stop'>
              This is page is showing draft content. <button>Click here</button> to exit preview mode.
            </Form>
          ) : (
            <Form method='post' action='/posts/preview/start'>
              This is page is showing published content. <button>Click here</button> to enter preview mode!
            </Form>
          )}
        </div> */}
      <Header {...{ title, Icon, desc, prevRoute, cover, date, isWide, sidebar }} />
      {promotion && <Banner {...promotion} />}
      <div className='bx-contents'>{children}</div>
      <section className='section flex md:hidden'>
        <Footer />
      </section>
    </div>
  )
}

export function RootLayout({ isRoot, children, pathname, sidebar }: RootLayoutProps) {
  return (
    <div className='bx-container'>
      {sidebar && (
        <div className={`bx-page bx-page-root ${isRoot ? '' : 'hidden md:flex'}`}>
          <Hero
            isRoot={isRoot}
            heroString={heroString}
            desc='더 나은 사용자 경험을 생각하며 꼼꼼하게 만들어 드려요.'
            links={[
              { url: '/contact', label: '무료 상담' },
              {
                url: '/plan',
                label: '요금표 확인',
              },
            ]}
          />
          <Nav {...{ nav, pathname }} />
          <div className={`${isRoot ? 'px-3 md:px-0' : ''}`}>
            <Footer />
          </div>
        </div>
      )}
      {children}
    </div>
  )
}