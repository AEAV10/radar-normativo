import React from 'react';

export const allNews = [
  {
    id: 1,
    title: "Nueva ayuda de 1.200€ para familias numerosas: requisitos y cómo solicitarla",
    date: "2025-08-04",
    isAlert: true,
    content: `
      <p>El Gobierno ha aprobado una nueva prestación económica de hasta 1.200€ anuales dirigida específicamente a familias numerosas, con el objetivo de apoyar a las familias con mayor número de hijos en el contexto económico actual.</p>
      <p>Para acceder a esta ayuda, las familias deben cumplir una serie de requisitos que garantizan que el apoyo llega a quienes más lo necesitan.</p>
      <h2 class="text-2xl font-bold mt-6 mb-3">¿Quién puede solicitar esta ayuda?</h2>
      <ul class="list-disc list-inside space-y-2">
        <li>Tener reconocida la condición de familia numerosa de categoría general o especial.</li>
        <li>Contar con tres o más hijos a cargo, o dos si uno de ellos tiene una discapacidad reconocida.</li>
        <li>No superar determinados umbrales de renta familiar, que se ajustarán según el número de miembros.</li>
      </ul>
       <h2 class="text-2xl font-bold mt-6 mb-3">Cómo solicitar la ayuda</h2>
      <p>El proceso de solicitud se ha simplificado y puede realizarse de forma telemática a través de la Sede Electrónica de la Seguridad Social o de forma presencial en las oficinas de registro.</p>
    `,
    officialLinks: [
      { title: "Ministerio de Derechos Sociales", url: "#" },
      { title: "Sede Electrónica - Solicitud", url: "#" }
    ]
  },
  {
    id: 2,
    title: "Cambios en el IRPF 2025: nuevas deducciones y tramos fiscales",
    date: "2025-08-03",
    isAlert: false,
    content: `
      <p>La reforma fiscal para 2025 introduce importantes modificaciones en el Impuesto sobre la Renta de las Personas Físicas (IRPF) que afectarán a millones de contribuyentes españoles.</p>
       <h2 class="text-2xl font-bold mt-6 mb-3">Nuevos tramos fiscales</h2>
      <p>Se han modificado los tramos del impuesto para hacer el sistema más progresivo. Los cambios principales afectan a las rentas medias y altas, con un ligero alivio para las rentas más bajas.</p>
       <h2 class="text-2xl font-bold mt-6 mb-3">Principales deducciones</h2>
       <ul class="list-disc list-inside space-y-2">
        <li>Ampliación de la deducción por maternidad.</li>
        <li>Nuevas deducciones por inversión en energías renovables en la vivienda habitual.</li>
        <li>Mejoras en la deducción por alquiler de vivienda para jóvenes.</li>
      </ul>
    `,
    officialLinks: [
      { title: "Agencia Tributaria", url: "#" }
    ]
  },
  {
    id: 3,
    title: "Subida del SMI: nuevo salario mínimo interprofesional para 2025",
    date: "2025-08-02",
    isAlert: true,
    content: `
      <p>El Consejo de Ministros ha aprobado la subida del Salario Mínimo Interprofesional (SMI) para el año 2025, situándolo en <strong>1.150€ brutos mensuales</strong> en 14 pagas.</p>
      <p>Este incremento beneficiará a más de 2.5 millones de trabajadores en España y entrará en vigor con carácter retroactivo desde el 1 de enero de 2025.</p>
    `,
    officialLinks: []
  },
   {
    id: 4,
    title: "Guía completa sobre la nueva cotización de autónomos por ingresos reales",
    date: "2025-08-01",
    isAlert: false,
    content: `
      <p>Desde el 1 de enero de 2025, el sistema de cotización para trabajadores autónomos se basa en sus ingresos reales. Esta guía desglosa los tramos, cómo calcular la cuota y las claves para adaptarse al nuevo modelo.</p>
      <h2 class="text-2xl font-bold mt-6 mb-3">Tramos de cotización</h2>
      <p>Existen 15 tramos de rendimientos netos que determinan la base de cotización y la cuota mensual a pagar a la Seguridad Social. Los autónomos deberán prever sus ingresos anuales para seleccionar su tramo correspondiente.</p>
    `,
    officialLinks: [
       { title: "Seguridad Social - Portal Importass", url: "#" }
    ]
  }
];
