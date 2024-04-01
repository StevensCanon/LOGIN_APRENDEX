import React from 'react';
import Navbar from '@/components/Navbar';

function HomePage() {
  return (

    <div>
      <div className="text-center ">
        <h1 className="text-white text-5xl mt-20 mb-10 ">Bienvenido al Curso de Desarrollo de Software</h1>
        <p className="text-white text-lg mx-20">
          Aprende desarrollo de software con nuestro curso intensivo. Desde conceptos básicos hasta tecnologías avanzadas, te proporcionaremos los conocimientos y las habilidades necesarias para tener éxito en el mundo del desarrollo de software.
        </p>
        <div className="max-w-full mx-20 mb-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 pt-10">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden ">
              <img src="https://d2ms8rpfqc4h24.cloudfront.net/Guide_to_Full_Stack_Development_000eb0b2d0.jpg" alt="Curso 1" className="w-full h-64 object-cover object-center" />
              <div className="p-4">
                <h2 className="text-xl font-semibold text-black mb-2">Full Stack </h2>
                <p className="text-black mb-4">
                Aprende a construir aplicaciones web completas desde cero con nuestro curso full stack. Domina tanto el desarrollo del frontend como del backend utilizando las tecnologías más demandadas en la industria.
                </p>
                <button className="mt-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
                  Más información
                </button>
              </div>
            </div>
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img src="https://crehana-blog.imgix.net/media/filer_public/33/d7/33d7e960-d2e0-400e-a95b-e777d97b78cf/que-es-el-desarrollo-web.jpg" alt="Curso 2" className="w-full h-64 object-cover object-center" />
              <div className="p-4">
                <h2 className="text-xl font-semibold text-black mb-2">Desarrollo Web Avanzado</h2>
                <p className="text-black mb-4">
                Este curso te proporcionará las herramientas necesarias para convertirte en un desarrollador web competente y versátil, fundamentales para crear sitios web dinámicos e interactivos con HTML y CSS, 
                </p>
                <button className="mt-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
                  Más información
                </button>
              </div>
            </div>
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img src="https://image.coderslink.com/wp-content/uploads/2023/09/Best-Front-End-Frameworks-e1693945663785.png" alt="Curso 3" className="w-full h-64 object-cover object-center" />
              <div className="p-4">
                <h2 className="text-xl font-semibold text-black mb-2">FrameWorks</h2>
                <p className="text-black mb-4">
                Explora React, Angular, Laravel y Vue.js en nuestro curso intensivo de frameworks. Domina las herramientas esenciales para construir aplicaciones modernas y ágiles.
                </p>
                <button className="mt-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
                  Más información
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
