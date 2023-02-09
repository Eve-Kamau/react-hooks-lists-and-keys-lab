import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
 
  const pageLinks=links.map(link => < a key={link} href={link}>{link}</a>);
  console.log(pageLinks);

  return (
     <nav>
      {pageLinks}
    </nav>
   );
}
export default NavBar;


 //{/* display an <a> tag for each link here */}

  // {/* <a key="name" href="#home">home</a>
    //<a key="name" href="#about">about</a>
    //<a key="name" href="#projects">projects</a>

  