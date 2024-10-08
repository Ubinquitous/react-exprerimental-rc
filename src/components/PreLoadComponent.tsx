import { prefetchDNS, preconnect, preload, preinit } from "react-dom";

const PreLoadComponent = () => {
  preinit("https://.../path/to/some/script.js", { as: "script" });
  preload("https://.../path/to/font.woff", { as: "font" });
  preload("https://.../path/to/stylesheet.css", { as: "style" });
  prefetchDNS("https://...");
  preconnect("https://...");

  return <div></div>;
};

export default PreLoadComponent;
