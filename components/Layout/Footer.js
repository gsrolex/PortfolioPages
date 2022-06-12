import React from "react";
import Image from "next/image";
import github from "../../public/GitHub-Mark-Light-32px.png";
import Link from "next/link";

export default function Footer() {
  const hrefGit = "https://github.com/gsrolex";
  return (
    <footer
      className="container-fluid footer_style text-light d-flex flex-wrap justify-content-center align-items-center"
      style={{ Hight: "100px" }}
    >
      <div className="here" style={{ Hight: "100px" }}>
        <div className="col-md-12 d-flex align-items-center">
          <span className="text-muted">&copy; 2022 NoDesign</span>
          <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>

          <Link href={hrefGit}>
            <Image className="icon " src={github}></Image>
          </Link>
        </div>
      </div>
    </footer>
  );
}
