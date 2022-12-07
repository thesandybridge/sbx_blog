"use client";
import { useEffect, useState } from "react";
export default function Banner() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, 10000);
  });
  return (
    <>
      {show && (
        <pre className="banner">
          ███╗&nbsp;&nbsp;&nbsp;███╗&nbsp;█████╗&nbsp;████████╗████████╗&nbsp;&nbsp;&nbsp;&nbsp;███╗&nbsp;&nbsp;&nbsp;███╗██╗██╗&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;██╗&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;███████╗██████╗&nbsp;
          <br />
          ████╗&nbsp;████║██╔══██╗╚══██╔══╝╚══██╔══╝&nbsp;&nbsp;&nbsp;&nbsp;████╗&nbsp;████║██║██║&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;██║&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;██╔════╝██╔══██╗
          <br />
          ██╔████╔██║███████║&nbsp;&nbsp;&nbsp;██║&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;██║&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;██╔████╔██║██║██║&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;██║&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;█████╗&nbsp;&nbsp;██████╔╝
          <br />
          ██║╚██╔╝██║██╔══██║&nbsp;&nbsp;&nbsp;██║&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;██║&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;██║╚██╔╝██║██║██║&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;██║&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;██╔══╝&nbsp;&nbsp;██╔══██╗
          <br />
          ██║&nbsp;╚═╝&nbsp;██║██║&nbsp;&nbsp;██║&nbsp;&nbsp;&nbsp;██║&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;██║&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;██║&nbsp;╚═╝&nbsp;██║██║███████╗███████╗███████╗██║&nbsp;&nbsp;██║
          <br />
          ╚═╝&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;╚═╝╚═╝&nbsp;&nbsp;╚═╝&nbsp;&nbsp;&nbsp;╚═╝&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;╚═╝&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;╚═╝&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;╚═╝╚═╝╚══════╝╚══════╝╚══════╝╚═╝&nbsp;&nbsp;╚═╝
          <br />
        </pre>
      )}
      {!show && <div className="animation"></div>}
    </>
  );
}
