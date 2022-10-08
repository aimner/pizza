import React from "react";
import ContentLoader, { IContentLoaderProps } from "react-content-loader";

const MyLoader = (props: JSX.IntrinsicAttributes & IContentLoaderProps) => (
  <ContentLoader
    speed={2}
    width={280}
    height={441}
    viewBox="0 0 280 441"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}>
    <circle cx="130" cy="130" r="130" />
    <rect x="0" y="269" rx="3" ry="3" width="280" height="19" />
    <rect x="0" y="297" rx="10" ry="10" width="280" height="81" />
    <rect x="0" y="399" rx="3" ry="3" width="62" height="19" />
    <rect x="122" y="387" rx="0" ry="0" width="155" height="42" />
  </ContentLoader>
);

export default MyLoader;
