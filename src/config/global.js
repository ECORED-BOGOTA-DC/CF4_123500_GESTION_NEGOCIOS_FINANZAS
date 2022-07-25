export default {
  global: {
    componenteFormativo: 'Fundamentos de contabilidad y tributaria',
    descripcionCurso:
      'El manejo de la contabilidad es la base fundamental para el conocimiento financiero de las organizaciones. Además de dar cumplimiento a las Normas Internacionales de Información Financiera (NIIF), a su vez esta información, se convierte en la materia prima fundamental para la toma de decisiones por parte de los administradores de las compañías.',
    imagenBannerPrincipal: require('@/assets/curso/images/header/banner-principal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/images/header/fondo-banner-principal.png'),
    fondoBannerInterno: require('@/assets/curso/images/header/interno.svg'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Contabilidad',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Cuentas contables',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Principios de contabilidad',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Dinámica contable',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Instrumentos financieros',
            hash: 't_1_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.5',
            titulo: 'Documentación',
            hash: 't_1_5',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.6',
            titulo: 'Normativa',
            hash: 't_1_6',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Informes',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Estados financieros',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Hojas electrónicas financieras',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Tributaria',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Registro único tributario',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Impuestos',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Tasas y contribuciones',
            hash: 't_3_3',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Decreto 1625 de 2016 [Presidencia de la República de Colombia]. Por medio del cual se expide el Decreto Único Reglamentario en materia tributaria. Octubre 11 de 2016.',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=83233',
    },
    {
      referencia:
        'Decreto 410 de 1971. [Presidencia de la República de Colombia] (). Por el cual se expide el Código de Comercio.. Marzo 27 de 1971.',
      link: 'https://leyes.co/codigo_de_comercio/19.htm',
    },
    {
      referencia:
        'El contador básico. (s.f.). Relación entre activo, pasivo y patrimonio neto. ',
      link:
        'https://sites.google.com/site/elcontadorbasico/home/tipos-de-cuentas/activos/pasivos/activo-pasivo-patrimonio ',
    },
    {
      referencia:
        '(s.f.). Impuestos nacionales, departamentales y municipales. [Web log post]. Contabilidad de la Financiación.',
      link:
        'http://contaduriapublicatercero3841.blogspot.com/2017/06/impuestos-nacionales-departamentales-y.html',
    },
    {
      referencia:
        'Ley 1819 de 2016. Por medio de la cual se adopta una reforma tributaria estructural, se fortalecen los mecanismos para la lucha contra la evasión y la elusión fiscal, y se dictan otras disposiciones. Diciembre 29 de 2016',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=79140',
    },
  ],
  glosario: [
    {
      termino: 'Estatuto Tributario',
      significado:
        'El Estatuto Tributario se reconoce como la máxima autoridad en impuestos en Colombia, allí se reflejan la gran mayoría de normas relacionadas con el recaudo de tributos en Colombia.',
    },
    {
      termino: 'ICA',
      significado:
        'Conocido como Impuesto de Industria y Comercio es una obligación municipal que se genera a partir de la ejecución de labores de industria, comercio o servicios generados en Bogotá o cualquier ciudad del país donde aplique, en las que directa o indirectamente se desarrollan de manera continua o eventual, con o sin establecimiento comercial.',
    },
    {
      termino: 'Persona Natural',
      significado:
        'La persona natural es un ser humano que, desde el punto de vista tributario, es un contribuyente en ejercicio de una actividad comercial, profesional o de servicios y contrae obligaciones con el Estado a título personal.',
    },
    {
      termino: 'Persona Jurídica',
      significado:
        'Una persona jurídica es una organización o grupo de personas naturales a la que la ley reconoce personalidad independiente y diferenciada de la de cada uno de sus miembros o componentes, capaz de ejercer derechos y contraer obligaciones, y de ser representada judicial y extrajudicialmente.',
    },
    {
      termino: 'Retenciones',
      significado:
        'Es una cantidad de dinero que un pagador descuenta del importe total de una factura de compra de servicios profesionales, nóminas de trabajadores y otras operaciones a título de anticipo de impuesto, que la ley exige para las partes.',
    },
    {
      termino: 'RUT',
      significado:
        'Quiere decir registro único tributario, y se convierte en el documento de identificación de los contribuyentes',
    },
    {
      termino: 'Tributo',
      significado:
        'Corresponden a aportes que realizan los contribuyentes con destino al estado.',
    },
  ],
  complementario: [
    {
      tema: '1.6 Normativa',
      referencia:
        'Decreto 2420 de 2015. [Ministerio de Comercio, Industria y Turismo]. Normas de contabilidad, de información financiera y de aseguramiento de información. Diciembre 9 de 2021',
      tipo: 'Decreto',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=76745',
    },
    {
      tema: '1.6 Normativa',
      referencia:
        'Actualícese Video. (2021, 13 de septiembre). Nueva reforma tributaria de los colombianos: novedades.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=f2y8vKfyh0Q',
    },
    {
      tema: '1.6 Normativa',
      referencia:
        'DIAN Colombia. (2021, 14 de julio). REGISTRO ÚNICO TRIBUTARIO - RUT 1/2 – DIAN.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=Ltgyaxh0ga0',
    },
    {
      tema: '1.6 Normativa',
      referencia:
        'Correa Sánchez, D . (2019). Impuestos en Colombia. Nacionales y Municipales',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=-p6FCB0p3o0&t=268s',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'María Camila García Santamaría',
        cargo: 'Líder del equipo',
        centro: 'Dirección general',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Jair Yovanny Castro Morales',
        cargo: 'Experto temático',
        centro: 'Centro Agropecuario La Granja - Regional Tolima',
      },
      {
        nombre: 'Gloria Alexandra Orejarena Barrios',
        cargo: 'Diseñadora instruccional',
        centro:
          'Centro de la Industria, la Empresa y los Servicios - Regional Norte de Santander',
      },
      {
        nombre: 'Andrés Felipe Velandia Espitia',
        cargo: 'Asesor metodológico',
        centro: 'Centro de Diseño y metrología - Regional Distrito Capital',
      },
      {
        nombre: 'Jhon Jairo Rodríguez Pérez',
        cargo: 'Corrector de estilo ',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Pérez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Edison Eduardo Mantilla Cuadros ',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Gustavo Adolfo Marún Suárez',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodríguez Rodríguez',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Wilson Andrés Arenales Cáceres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Zuleidy María Ruíz Torres',
        cargo: 'Producción audiovisual',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'María Eugenia Mejía López',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
