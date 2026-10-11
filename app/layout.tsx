import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  metadataBase: new URL("https://www.ecekilikci.com"),
  title: "Ece Kılıkçı | Data × Product × AI",
  description: "Data engineer and technical project lead in Berlin. Building reliable data platforms, thoughtful products and applied AI experiments.",
  authors: [{ name: "Ece Kılıkçı" }],
  openGraph: {title:"Ece Kılıkçı | Data × Product × AI",description:"From complex data to something that matters. Explore my work in data architecture, product development and applied AI.",url:"https://www.ecekilikci.com",siteName:"Ece Kılıkçı Portfolio",images:[{url:"/avatar.jpg",alt:"Ece Kılıkçı"}],locale:"en_US",type:"website"},
  twitter:{card:"summary_large_image",title:"Ece Kılıkçı | Data × Product × AI",description:"Reliable data systems. Thoughtful products. Applied AI.",images:["/avatar.jpg"]}
};
export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){return <html lang="en" data-theme="light" suppressHydrationWarning><head><script dangerouslySetInnerHTML={{__html: `(function(){try{var t=localStorage.getItem('portfolio-theme');if(t==='dark'||t==='light')document.documentElement.dataset.theme=t}catch(e){}})();`}} /></head><body>{children}</body></html>}
