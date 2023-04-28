import Head from "next/head";
import { ReactNode, createContext, useContext, useState } from "react";

export interface SeoContextType {
  setTitle: (title: string) => void;
  setDescription: (description: string) => void;
  setImage: (image: string) => void;
}
export const TitleContext = createContext<SeoContextType>({} as SeoContextType);

const HeadProvider = ({ children }: { children: ReactNode }) => {
  const [title, setTitle] = useState("Seo sample projec");
  const [description, setDescription] = useState(
    "Seo sample project description"
  );
  const [image, setImage] = useState(
    "https://mgl.gogo.mn/newsn/thumbnail/1000/images/c/2016/05/184878-13052016-1463096763-1137462275-181669-24032016-1458805397-88611317-zolbinnohoi1-181537-661949935.jpeg"
  );
  return (
    <TitleContext.Provider value={{ setTitle, setDescription, setImage }}>
      <>
        <Head>
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          <link rel="manifest" href="/site.webmanifest" />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
          <meta name="msapplication-TileColor" content="#da532c" />
          <meta name="theme-color" content="#ffffff" />
          <title>{title}</title>

          <meta name="description" content={description} />

          <meta name="og:url" content="seo-demo-three.vercel.app" />
          <meta name="og:title" content={title} />
          <meta name="og:description" content={description} />
          <meta name="og:image" content={image} />
        </Head>
        {children}
      </>
    </TitleContext.Provider>
  );
};

export const useHead = () => useContext(TitleContext);

export default HeadProvider;
