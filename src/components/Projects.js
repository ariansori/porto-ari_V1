import React from 'react';
import Card from './Card';
import EnergiQ from '../assets/images/EnergiQ.png';
import educartgassin from '../assets/images/educartgassin.png'
import fpnode from '../assets/images/fpnode.png';
import fpreact from '../assets/images/fpreact.png';
import duplikatfex from '../assets/images/duplikatfex.png';
import Lokerkuy from '../assets/images/lokerkuy.png';
import Pdmlibrary from '../assets/images/pdmlibrary.jpg';
import Library from '../assets/images/library.png';


const Projects = () => {
  return (
    <div className="projects">
      <div className="card-container">
        <Card
          title="EnergiQ"
          image={EnergiQ}
          link="https://github.com/ariansori/fp-ai-powered"
        />
        <Card
          title="Educartgassin"
          image={educartgassin}
          link="https://github.com/ariansori/educart-gassin"
        />
        <Card
          title="Web Dasar Nodejs"
          image={fpnode}
          link="https://github.com/ariansori/project-web-dasar"
        />
         <Card
          title="Web React Dasar"
          image={fpreact}
          link="https://github.com/ariansori/reactjs-studentportal-finalproject"
        />
         <Card
          title="Duplikat FE Apk X"
          image={duplikatfex}
          link="https://github.com/ariansori/duplikat-fex"
        />
         <Card
          title="Loker-Kuy"
          image={Lokerkuy}
          link="https://github.com/ariansori/loker-kuy"
        />
         <Card
          title="Library Database PostgreSQL"
          image={Pdmlibrary}
          link="https://github.com/ariansori/library-database-postgresql"
        />
         <Card
          title="Library Database Ms.Access"
          image={Library}
          link="https://github.com/ariansori/library-database-ms.acces"
        />
        {/* Tambahkan lebih banyak proyek jika perlu */}
      </div>
    </div>
  );
};

export default Projects;
