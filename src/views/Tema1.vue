<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero 
        span 1
      h1 Contabilidad

    p.mb-3 Llevar la contabilidad en Colombia además de ser una responsabilidad legal, también es fundamental para el análisis de la continuidad del negocio. 

    .row.justify-content-center.align-items-center
      .col-lg-12
        .bloque-texto-g.color-custom-2.p-3.p-sm-4.p-md-5.mb-5.d-none.d-lg-block
          .bloque-texto-g__img(data-aos="fade-right")(
            :style="{'background-image': `url(${require('@/assets/curso/images/tema1/img_1.png')})`}"
          )
          .bloque-texto-g__texto.p-5.m-right(data-aos="fade-left")
            p.mb-0 El Código del Comercio en el numeral 3, del artículo 19, establece la obligación de registrar la contabilidad en los negocios, por parte de los comerciantes de conformidad con las instrucciones legales en la materia, esta información debe permitir a los administradores de las compañías, realizar seguimiento permanente a todas las actuaciones contables, como también poder elaborar los balances y demás información financiera necesaria para sustentar o fundamentar la toma de decisiones en las empresas (ver figura 1).

    .bloque-texto-a.color-custom.p-md-0.mb-5.d-block.d-lg-none
      .row.m-4.align-items-center.justify-content-between
        .col-lg-9(data-aos="fade-right")
          .bloque-texto-a__texto.p-5.my-5
            p El Código del Comercio en el numeral 3, del artículo 19, establece la obligación de registrar la contabilidad en los negocios, por parte de los comerciantes de conformidad con las instrucciones legales en la materia, esta información debe permitir a los administradores de las compañías, realizar seguimiento permanente a todas las actuaciones contables, como también poder elaborar los balances y demás información financiera necesaria para sustentar o fundamentar la toma de decisiones en las empresas (ver figura 1).
        .col-lg-3.mb-3.mb-lg-0(data-aos="fade-left")
          figure
            img(src='@/assets/curso/images/tema1/img_1.png' alt='', style="width:400px; display:block; margin:-1rem 0 ;").mb-3

    .titulo-sexto.color-acento-contenido.mb-3(data-aos="zoom-in-right")
      h5 Figura 1
      span  Importancia de la contabilidad en la estabilidad financiera.
    
    .row.aling.my-5 
      .col-lg-10(data-aos="fade-left") 
          img.mt-3(src='@/assets/curso/images/tema1/fig_1.svg')


    Separador

    #t_1_1.titulo-segundo
      .h2 1.1 Cuentas contables

    p.mb-3 Estos registros se deben realizar en los momentos en que se presenten; es decir, en orden cronológico y siguientes a las regulaciones establecidas por el gobierno nacional, para el caso de Colombia el marco normativo establecido se estipula en el decreto único reglamentario 1625 de 2016 y las Normas Internacionales de Información Financiera. La contabilidad llevada en debida forma permite una herramienta clave en pro de obtener mejores resultados financieros y mejoras en la gestión de los administradores.

    .row.justify-content-center.align-items-center
      .col-lg-12
        .bloque-texto-g.color-custom-2.p-3.p-sm-4.p-md-5.mb-5.d-none.d-lg-block
          .bloque-texto-g__img(data-aos="fade-right")(
            :style="{'background-image': `url(${require('@/assets/curso/images/tema1/img_2.png')})`}"
          )
          .bloque-texto-g__texto.p-5.m-right(data-aos="fade-left")
            p.mb-0 Se conocen como cuentas contables, al grupo de registros de tipo contable que se realiza en las organizaciones, en la medida en que van ocurriendo las operaciones del ente económico. Estas transacciones pueden ser de naturaleza débito o crédito según cada caso, esto depende de la razón que motiva el asiento contable. A continuación, se clasifican algunas partes de las cuentas contables: 

    .bloque-texto-a.color-custom.p-md-0.mb-5.d-block.d-lg-none
      .row.m-4.align-items-center.justify-content-between
        .col-lg-9(data-aos="fade-right")
          .bloque-texto-a__texto.p-5.my-5
            p Se conocen como cuentas contables, al grupo de registros de tipo contable que se realiza en las organizaciones, en la medida en que van ocurriendo las operaciones del ente económico. Estas transacciones pueden ser de naturaleza débito o crédito según cada caso, esto depende de la razón que motiva el asiento contable. A continuación, se clasifican algunas partes de las cuentas contables: 
        .col-lg-3.mb-3.mb-lg-0(data-aos="fade-left")
          figure
            img(src='@/assets/curso/images/tema1/img_2.png' alt='', style="width:400px; display:block; margin:-1rem 0 ;").mb-3

    .row.align-items-center.justify-content-center.mb-3
      .col-lg-5(data-aos="fade-right") 
        .list
          .list__item
            .list__item__icon
              img.img-a(src="@/assets/curso/images/tema2/folder.svg").img-fluid  
          .list__txt    
            p.m-top <b>Nombre:</b> corresponde al nombre asignado a la cuenta contable que se utiliza para cada registro.
        .list
          .list__item
            .list__item__icon
              img.img-a(src="@/assets/curso/images/tema2/folder.svg").img-fluid  
          .list__txt    
            p.m-top <b>Detalle:</b> hace referencia a la clase de movimiento que se registra para cada movimiento, este puede ser débito o crédito según cada caso, para el caso de los débitos y se registran al lado izquierdo de la cuenta y principalmente en este se contemplan lo que entra a la organización; por su parte los movimientos créditos se registran al lado derecho de la cuenta y en este se consideran los movimientos de salida de las empresas para cada situación.
        .list
          .list__item
            .list__item__icon
              img.img-a(src="@/assets/curso/images/tema2/folder.svg").img-fluid  
          .list__txt    
            p.m-top <b>Saldo:</b> este corresponde al neto que resulte entre los movimientos débitos y los movimientos créditos del negocio.
        
   
      .col-lg-5(data-aos="fade-left") 
        img.mt-3(src='@/assets/curso/images/tema1/img_3.png')

    .row.align-items-center.justify-content-center.mb-5
      .col-lg-5(data-aos="fade-left") 
        img.mt-3(src='@/assets/curso/images/tema1/img_4.png')

      .col-lg-5(data-aos="fade-right") 

          p.mb-0 Cuando se habla de la naturaleza de las cuentas contables, se considera la forma habitual en que se incrementa el saldo de esta según su clase y tipo de cuenta, es decir, las cuentas de naturaleza débito siempre aumentan por la columna izquierda y disminuye por el lado derecho de esta, de tal forma que al neto de estos movimientos finalmente debe preservar un mayor valor por el lado izquierdo. Tales cuentas son los activos, los gastos, los costos (de venta, de producción o de operación) y si se manejaran las cuentas de orden acreedoras en la contabilidad de las empresas. Por su parte, las cuentas de naturaleza crédito, aumentan siempre por la columna derecha y disminuyen por el lado izquierdo, conservando siempre un mayor valor en el costado derecho, en este grupo encontramos, los pasivos, las cuentas de capital o patrimonio y dado el caso las cuentas de orden deudoras
    

    p.mb-3 Un ejemplo muy sencillo de cuentas de naturaleza debito es el siguiente:

    ul.lista-ul--color.mb-5
      li 
        i.fas.fa-circle.c-check
        p.mb-0 La empresa “XYZ”, vende mercancías a crédito por valor de $200.000 pesos.

    .tabla-a.color-acento-contenido.mb-5 
      table
        thead
          tr
            th Nombre de la cuenta
            th Debito
            th Crédito
        tbody
          tr
            td Caja
            td 100.000
            td 
          tr
            td Muebles y enseres
            td
            td 100.000

    p.mb-5 En este ejemplo se encuentran dos cuentas del activo de naturaleza débito, la caja aumenta debido a que ingreso dinero a la cuenta. Por su parte la cuenta muebles y enseres disminuye debido a que el escritorio sale del inventario de la compañía.

    ul.lista-ul--color.mb-5
      li 
        i.fas.fa-circle.c-check
        p.mb-0 La empresa “XYZ”, vende mercancías a crédito por valor de $200.000 pesos.
      
    .tabla-a.color-acento-contenido.mb-5 
      table
        thead
          tr
            th Nombre de la cuenta
            th Debito
            th Crédito
        tbody
          tr
            td Ingresos
            td 
            td 200.000
          tr
            td Cuentas por cobrar
            td 200.000
            td 

    p.mb-3 En este ejemplo se puede revisar cómo se comporta la cuenta ingresos por ventas la cual corresponde al estado integral de resultados y es de naturaleza crédito. Se ve como al generarse la venta aumenta por su derecha. 

    p.mb-5 Estimado aprendiz, se le invita a revisar en el siguiente recurso, la clasificación de las cuentas contables:

    TabsC.color-acento-contenido.mb-5(data-aos="zoom-in-down")
      .py-4.py-md-4(titulo="Clasificación de las cuentas:")
        .row.justify-content-center.p-5
          .col-12.col-md-5.mb-3.mb-md-0
            img(src="@/assets/curso/images/tema1/img_5.png").m-auto
          .col-12.col-md-7.mb-3.mb-md-0
            p.mb-0 En primer lugar, están las cuentas reales y de balance, se les llama así porque son cuentas por medio de las cuales se realiza el estado de situación financiera o balance general de las compañías. Estas son los activos, los pasivos y el patrimonio.

      .py-3.py-md-4(titulo="Cuentas reales y de balance")
        .row.justify-content-center.align-items-center.p-4
          .col-12.col-md-7.mb-3.mb-md-0
            img(src="@/assets/curso/images/tema1/img_6.svg").m-auto
          .col-12.col-md-5.mb-3.mb-md-0
            p.mb-0 Por su parte, las cuentas nominales que integran el estado de resultado integral, se consideran así, porque se cierran cada año al final del periodo contable, de igual manera al inicio del nuevo periodo, estas cuentas se inician con saldo cero y así sucesivamente durante la totalidad de los periodos en que opere la compañía. En este grupo encontramos los ingresos, los costos y los gastos.

      .py-3.py-md-4(titulo="Estado de Resultado Integral")
        .row.justify-content-center.align-items-center.p-4
          .col-12.col-md-8.mb-3.mb-md-0
            img.mt-3(src="@/assets/curso/images/tema1/img_7.svg").m-auto
        

      .py-3.py-md-4(titulo="Otros Resultados Integrales")
        .row.justify-content-center.align-items-center.p-4
            .col-12.col-md-7.mb-3.mb-md-0
              img.mt-3(src="@/assets/curso/images/tema1/img_8.svg").m-auto
            .col-12.col-md-5.mb-3.mb-md-0
              .jumbotron-1.p-5
                p.mb-0 Inversiones en asociada (en asociada, es una entidad donde el inversor posee influencia significativa).


    Separador

    #t_1_2.titulo-segundo
      .h2 1.2 Principios de contabilidad
    

    .row.justify-content-center.align-items-center
      .col-lg-12
        .bloque-texto-g.color-custom-2.p-3.p-sm-4.p-md-5.mb-5.d-none.d-lg-block
          .bloque-texto-g__img(data-aos="fade-right")(
            :style="{'background-image': `url(${require('@/assets/curso/images/tema1/img_2.png')})`}"
          )
          .bloque-texto-g__texto.p-5.m-right(data-aos="fade-left")
            p.mb-0 Los Principios de Contabilidad Generalmente Aceptados en Colombia (PCGA), corresponden a las instrucciones que se dictan en la materia contable, para cuantificar e informar todo lo relacionado con la información financiera de las personas naturales o jurídicas, obligadas a llevar la contabilidad. En otras palabras, se puede decir que son las leyes o reglas establecidas para que se lleve la contabilidad por parte de las empresas. A continuación, se compila los principios de contabilidad establecidos para Colombia, de conformidad con las Normas Internacionales de Información Financiera (NIIF) (ver figura 2):

    .bloque-texto-a.color-custom.p-md-0.mb-5.d-block.d-lg-none
      .row.m-4.align-items-center.justify-content-between
        .col-lg-9(data-aos="fade-right")
          .bloque-texto-a__texto.p-5.my-5
            p Los Principios de Contabilidad Generalmente Aceptados en Colombia (PCGA), corresponden a las instrucciones que se dictan en la materia contable, para cuantificar e informar todo lo relacionado con la información financiera de las personas naturales o jurídicas, obligadas a llevar la contabilidad. En otras palabras, se puede decir que son las leyes o reglas establecidas para que se lleve la contabilidad por parte de las empresas. A continuación, se compila los principios de contabilidad establecidos para Colombia, de conformidad con las Normas Internacionales de Información Financiera (NIIF) (ver figura 2):
        .col-lg-3.mb-3.mb-lg-0(data-aos="fade-left")
          figure
            img(src='@/assets/curso/images/tema1/img_2.png' alt='', style="width:400px; display:block; margin:-1rem 0 ;").mb-3


    .titulo-sexto.color-acento-contenido.mb-3(data-aos="zoom-in-right")
      h5 Figura 2. 
      span  Principios de Contabilidad
    

    .tarjeta.bg_grad-02.p-4.mb-5(data-aos="zoom-in-up")
      SlyderA
        .row.justify-content-center.align-items-center.p-5
          .col-12.col-md-3.mb-3.mb-md-0
            img.mt-3(src="@/assets/curso/images/tema1/ico_1.svg",  alt='', style="width:100px; display:block; margin:auto 0 ;").mb-3
          .col-12.col-md-9.mb-3.mb-md-0
            p.mb-3 <b>Entidad:</b> La entidad o ente, contiene derechos y obligaciones que se encuentran detalladas en el marco normativo contable (NIIF) y que son reconocidos por los organismos de control. Por tal razón, la empresa debe ser tratada como un ente independiente, en donde incluso a sus propietarios se les reconoce como terceros.
          hr
          .col-12.col-md-3.mb-3.mb-md-0
            img.mt-3(src="@/assets/curso/images/tema1/ico_2.svg",  alt='', style="width:100px; display:block; margin:auto 0 ;").mb-3
          .col-12.col-md-9.mb-3.mb-md-0
            p.mb-3 <b>Equidad:</b> Teniendo en cuenta que dentro de las compañías se manejan múltiples intereses, entre ellos se tiene por ejemplo los dueños, los proveedores, acreedores, deudores, sector financiero, administradores, el estado, los organismos de control, entre otros. En ese sentido, la equidad establece que se debe reflejar la información financiera de las compañías sin ningún tipo de sesgo que pudiera favorecer a algún tercero; es decir, que se reflejan todos los intereses relacionados con el desarrollo de la económica.dos por los organismos de control. Por tal razón, la empresa debe ser tratada como un ente independiente, en donde incluso a sus propietarios se les reconoce como terceros.
          hr
          .col-12.col-md-3.mb-3.mb-md-0
            img.mt-3(src="@/assets/curso/images/tema1/ico_3.svg",  alt='', style="width:100px; display:block; margin:auto 0 ;").mb-3
          .col-12.col-md-9.mb-3.mb-md-0
            p.mb-3 <b>Partida doble:</b> La base fundamental de la partida doble, indica que en la contabilidad no puede haber un movimiento que afecte dos cuentas de la misma naturaleza (debito, o crédito), el ejercicio consiste en registrar algún valor en al menos dos cuentas, una de cada naturaleza para conservar el equilibrio de la partida doble.

        .row.justify-content-center.align-items-center.p-5
          .col-12.col-md-3.mb-3.mb-md-0
            img.mt-3(src="@/assets/curso/images/tema1/ico_4.svg",  alt='', style="width:100px; display:block; margin:auto 0 ;").mb-3
          .col-12.col-md-9.mb-3.mb-md-0
            p.mb-3 <b>Bienes económicos:</b> La contabilidad se lleva de conformidad en movimientos económicos realizadas por los entes, todos estos con conservando un sentido económico. Es decir, que en todo registro se debe asignar determinar un valor monetario, el cual debe tener relación con el mercado en que la empresa funciona.
          hr
          .col-12.col-md-3.mb-3.mb-md-0
            img.mt-3(src="@/assets/curso/images/tema1/ico_5.svg",  alt='', style="width:100px; display:block; margin:auto 0 ;").mb-3
          .col-12.col-md-9.mb-3.mb-md-0
            p.mb-3 <b>Moneda común denominador:</b> Las operaciones que realiza una empresa pueden realizarse en distintas monedas. Sin embargo, es la empresa quien está obligada a determinar el tipo de moneda en la que presentará su información financiera. 
          hr
          .col-12.col-md-3.mb-3.mb-md-0
            img.mt-3(src="@/assets/curso/images/tema1/ico_6.svg",  alt='', style="width:100px; display:block; margin:auto 0 ;").mb-3
          .col-12.col-md-9.mb-3.mb-md-0
            p.mb-3 <b>Negocio en marcha:</b> Cuando se constituye una empresa, se determina la duración en años de la misma, sin embargo, este tiempo establecido para que perdure la empresa, está condicionado a que la información financiera arrojada año tras año en las empresas, muestre una proyección a la misma. De lo contrario, se deberán tomar decisiones que pueden ir hasta la liquidación o extinción de las compañías.
         

        .row.justify-content-center.align-items-center.p-5
          .col-12.col-md-3.mb-3.mb-md-0
            img.mt-3(src="@/assets/curso/images/tema1/ico_7.svg",  alt='', style="width:100px; display:block; margin:auto 0 ;").mb-3
          .col-12.col-md-9.mb-3.mb-md-0
            p.mb-3 <b>Valuación al costo:</b> Lo que nos indica este principio de contabilidad, es que se debe valuar al costo o al valor del costo de adquisición o producción, al momento de reconocer las operaciones financieras del negocio.
          hr
          .col-12.col-md-3.mb-3.mb-md-0
            img.mt-3(src="@/assets/curso/images/tema1/ico_8.svg",  alt='', style="width:100px; display:block; margin:auto 0 ;").mb-3
          .col-12.col-md-9.mb-3.mb-md-0
            p.mb-3 <b>Periodo:</b> Los analistas de la información financiera de las compañías deben conocer el periodo o la fecha en que se presentan los estados financieros, esta puede ser mensual para efectos de seguimientos de resultados de la administración, sin embargo al final de cada año se deben presentar ante el máximo órgano para ser aprobados.  
          hr
          .col-12.col-md-3.mb-3.mb-md-0
            img.mt-3(src="@/assets/curso/images/tema1/ico_9.svg",  alt='', style="width:100px; display:block; margin:auto 0 ;").mb-3
          .col-12.col-md-9.mb-3.mb-md-0
            p.mb-3 <b>Devengado:</b> El principio devengado determina el momento o la fecha en la que nace una obligación o un derecho para la organización.

        .row.justify-content-center.align-items-center.p-5
          .col-12.col-md-3.mb-3.mb-md-0
            img.mt-3(src="@/assets/curso/images/tema1/ico_10.svg",  alt='', style="width:100px; display:block; margin:auto 0 ;").mb-3
          .col-12.col-md-9.mb-3.mb-md-0
            p.mb-3 <b>Objetividad:</b> El registro contable de las transacciones económicas del ente, deber manejasen en los libros de contabilidad, libres de intereses de un particular. Este principio, implica reconocer las operaciones lo más ajustadas a la realidad posibles, de tal forma, que no existan favorecimientos a ningún tercero.
          hr
          .col-12.col-md-3.mb-3.mb-md-0
            img.mt-3(src="@/assets/curso/images/tema1/ico_11.svg",  alt='', style="width:100px; display:block; margin:auto 0 ;").mb-3
          .col-12.col-md-9.mb-3.mb-md-0
            p.mb-3 <b>Realización:</b> Todo hecho económico conlleva a un registro contable, en donde se reconoce o una obligación o un derecho para la compañía. La realización de estos, implica reconocer o realizar un ingreso, costo o gasto, tal es el caso de los anticipos. 
          hr
          .col-12.col-md-3.mb-3.mb-md-0
            img.mt-3(src="@/assets/curso/images/tema1/ico_12.svg",  alt='', style="width:100px; display:block; margin:auto 0 ;").mb-3
          .col-12.col-md-9.mb-3.mb-md-0
            p.mb-3 <b>Prudencia:</b> Este principio aplica en los casos en que se debe reconocer un hecho económico, pero no se puede medir con fiabilidad. Para dar una solución al tema, lo más conveniente es encontrar un mecanismo que permita encontrar un valor razonable, de conformidad la realidad económica del mercado.

        .row.justify-content-center.align-items-center.p-5
          .col-12.col-md-3.mb-3.mb-md-0
            img.mt-3(src="@/assets/curso/images/tema1/ico_13.svg",  alt='', style="width:100px; display:block; margin:auto 0 ;").mb-3
          .col-12.col-md-9.mb-3.mb-md-0
            p.mb-3 <b>Uniformidad:</b> El registro de las operaciones de la compañía se debe realizar respetando el método usado en operaciones similares, el cual debe conservar relación los marcos normativos adoptados en el país. 
          hr
          .col-12.col-md-3.mb-3.mb-md-0
            img.mt-3(src="@/assets/curso/images/tema1/ico_14.svg",  alt='', style="width:100px; display:block; margin:auto 0 ;").mb-3
          .col-12.col-md-9.mb-3.mb-md-0
            p.mb-3 <b>Materialidad:</b> El principio de materialidad o importancia relativa hace referencia al manejo flexible y práctico para el registro en la contabilidad, de las operaciones en aras de dirimir cualquier situación de conflicto al momento de incluirse en la contabilidad.
          

    p.mb-3 Con la aplicación de estos Principios de Contabilidad Generalmente Aceptados, en el manejo de la contabilidad en Colombia, se obtendrá una información financiera objetiva, de tal forma que las cifras sean consecuentes con los resultados económicos de las empresas; es decir, que, si la empresa generó pérdidas, se reflejen pérdidas y viceversa, para con base en esta información, tomar las decisiones a que hubiere lugar.


    Separador

    #t_1_3.titulo-segundo
      .h2 1.3 Dinámica contable
    


    .bloque-texto-g.color-custom.p-3.p-sm-4.p-md-5.mb-5.d-none.d-lg-block
      .bloque-texto-g__img.m-left(data-aos="fade-left")(
    :style="{'background-image': `url(${require('@/assets/curso/images/tema1/img_9.svg')})`}"
    )
      .bloque-texto-g__texto.p-5(data-aos="fade-right")
        p.mb-3 Las políticas son implementadas para dar cumplimiento a los procesos misionales de la organización; es decir, deben estar conectados con la misión de la empresa y sirven de apoyo para lograrlo de una manera adecuada y sin ningún percance.

    .bloque-texto-a.color-custom-2.p-md-0.mb-5.d-block.d-lg-none
      .row.m-4.align-items-center.justify-content-between
        .col-lg-9(data-aos="fade-right")
          .bloque-texto-a__texto.p-5.my-5
            p Las políticas son implementadas para dar cumplimiento a los procesos misionales de la organización; es decir, deben estar conectados con la misión de la empresa y sirven de apoyo para lograrlo de una manera adecuada y sin ningún percance.
        .col-lg-3.mb-3.mb-lg-0(data-aos="fade-left")
          figure
            img(src='@/assets/curso/images/tema1/img_9.svg' alt='', style="width:400px; display:block; margin:-1rem 0;") 
    
    p.mb-5 Sin embargo, en el activo también se encuentran algunas cuentas que su dinámica contable es a la inversa de lo aquí manifestado, tales como las amortizaciones, las depreciaciones, el deterioro, entre otras que en esencia son de naturaleza crédito y que su efecto es disminuir el valor del activo, hasta llevarlo a reflejar un valor neto del mismo. Estas cuentas son de naturaleza inversa a las cuentas del activo (debito), básicamente por que cumplen una función de disminuir una cuenta principal del activo en cada caso y finalmente generar un saldo neto de las cuentas A continuación se puede revisar cómo funciona cada una de ellas:

    .tarjeta--container.row.mb-5
      .col-md.tarjeta.color-custom-3.p-5
        .row.justify-content-center.mb-4
          .col-4
            figure
              img(src='@/assets/curso/images/tema1/ico_15.svg', alt='', style="width:100px; display:block; margin:auto 0 ;")
          
        h2.text-center Las amortizaciones
        p Como primera medida dejemos en claro, que las amortizaciones se aplican a las cuentas del activo intangibles y diferidos. Ahora bien, podemos definir las amortizaciones, como la forma de dividir un gasto que realiza hoy la empresa, pero del cual se va a beneficiar en el futuro. Por ejemplo, si una empresa compra y paga un software contable, el año uno, pero su cobertura de servicio se establece para tres años, el gasto se llevaría gradualmente al estado de resultado durante los 36 meses y no en un solo momento.

      .col-md.tarjeta.color-custom-4.p-5
        .row.justify-content-center.mb-4
          .col-4
            figure
              img(src='@/assets/curso/images/tema1/ico_16.svg', alt='', style="width:100px; display:block; margin:auto 0 ;")
          
        h2.text-center Las depreciaciones
        p Es un mecanismo contable y financiero, por medio del cual se reconoce en los estados financieros, el desgaste o pérdida del valor que sufre un activo (propiedad planta y equipo, muebles y enseres, equipos de oficina, entre otros) por el uso con el paso del tiempo. En la práctica, este desgaste va afectando la vida útil de los activos, hasta convertirse en inservibles u obsoletos, por ello, la función de la depreciación es generar un gasto por ese concepto y que a su vez va disminuyendo con el pasar del tiempo el valor del activo, de tal forma que no se muestren cifras sobreestimadas en la información financiera.

     
      .col-md.tarjeta.color-custom-3.p-5
        .row.justify-content-center.mb-4
          .col-4
            figure
              img(src='@/assets/curso/images/tema1/ico_17.svg', alt='', style="width:100px; display:block; margin:auto 0 ;")
          
        h2.text-center El deterioro
        p Este se aplica en la información financiera de las organizaciones sobre la cuenta cartera y corresponde a la pérdida del valor de las ventas a crédito, en virtud, a que los clientes no las pagaron en los plazos acordados, o que definitivamente no las paguen. Desde el punto de vista fiscal y contable, las empresas deben estimar unos porcentajes de la cartera para llevarse a la cuenta deterioro, a manera de estimación para proteger a la compañía de un impacto más fuerte, financieramente hablando.
    
    Separador

    #t_1_4.titulo-segundo
      .h2 1.4 Instrumentos financieros
    
    p.mb-5 Un instrumento financiero es un tratado que da lugar a un activo financiero de una entidad y a un pasivo financiero o a un instrumento de patrimonio en otra entidad. Las Normas Internacionales de Información Financiera, en su NIIF 9 (instrumentos financieros) indica la forma en que se debe reconocer y medir los activos financieros, los pasivos financieros, como también hace referencia a contratos de compra venta de activos no financieros. La NIIF 9 reemplaza a la NIC 39 llamada: Reconocimiento y medición. A continuación, se mencionan los instrumentos financieros más comunes en la contabilidad de las empresas:

    .tarjeta.bg_grad-03.p-4.mb-5(data-aos="zoom-in-up")
      SlyderA(tipo="b")
        .row.justify-content-center.align-items-star.p-5
          .col-lg-4
            h3.mb-5 Efectivo o sus equivalentes
            p.mb-3 Es una partida contable perteneciente al grupo de activos corrientes, del estado de situación financiera, que representa los valores disponibles de la compañía, es decir, los valores en caja, bancos y los activos de corto plazo con inmediata convertibilidad en efectivo.
          .col-lg-8
            img(src="@/assets/curso/images/tema1/img_10.png").mb-3
        .row.justify-content-center.align-items-star.p-5
          .col-lg-4
            h3.mb-5 Cartera o cuentas por cobrar a clientes
            p.mb-3 Corresponden a los cupos de créditos otorgados a clientes y empleados de la compañía.
          .col-lg-8
            img(src="@/assets/curso/images/tema1/img_11.png").mb-3

        .row.justify-content-center.align-items-star.p-5
          .col-lg-4
            h3.mb-5 Inversiones de títulos participativos
            p.mb-3 corresponden a las inversiones realizadas en acciones de otras compañías.
          .col-lg-8
            img(src="@/assets/curso/images/tema1/img_12.png").mb-3
        .row.justify-content-center.align-items-star.p-5
          .col-lg-4
            h3.mb-5 Inversiones de título de deuda
            p.mb-3 en este grupo encontramos las inversiones en CDT, los bonos, entre otros.
          .col-lg-8
            img(src="@/assets/curso/images/tema1/img_13.png").mb-3
        .row.justify-content-center.align-items-star.p-5
          .col-lg-4
            h3.mb-5 Derivados financieros
            p.mb-3 Estos tienen origen en otro activo relacionado como instrumento financiero, por ejemplo, las acciones o los bonos, los cuales eventualmente generaran comportamientos positivos (dividendos), o negativos (pérdida de valor de la inversión) en la compañía.
          .col-lg-8
            img(src="@/assets/curso/images/tema1/img_14.png").mb-3
        .row.justify-content-center.align-items-star.p-5
          .col-lg-4
            h3.mb-5 Inversiones en asociadas
            p.mb-3 En donde se tiene influencia significativa o control, es decir que se tenga una participación accionaria importante, entre otros.
          .col-lg-8
            img(src="@/assets/curso/images/tema1/img_15.png").mb-3

    
    Separador

    #t_1_5.titulo-segundo
      .h2 1.5 Documentación
    
    .row.justify-content-center.align-items-center
      .col-lg-12
        .bloque-texto-g.color-custom-2.p-3.p-sm-4.p-md-5.mb-5.d-none.d-lg-block
          .bloque-texto-g__img(data-aos="fade-right")(
            :style="{'background-image': `url(${require('@/assets/curso/images/tema1/img_10_1.png')})`}"
          )
          .bloque-texto-g__texto.p-5.m-right(data-aos="fade-left")
            p.mb-0 Los documentos contables corresponden a los soportes físicos que respaldan o evidencian los registros contables que se realicen en una empresa. La diversidad de estos documentos, dependerá de los tipos de transacciones que se realicen, de acuerdo con las necesidades tanto internas en su gran mayoría como medidas del control interno o políticas contables de la organización, como externas, principalmente con destino a los terceros, como clientes, proveedores u organismos reguladores. A nivel general los documentos contables resultan ser muy importantes para las compañías (ver figura 3).

    .bloque-texto-a.color-custom.p-md-0.mb-5.d-block.d-lg-none
      .row.m-4.align-items-center.justify-content-between
        .col-lg-9(data-aos="fade-right")
          .bloque-texto-a__texto.p-5.my-5
            p Los documentos contables corresponden a los soportes físicos que respaldan o evidencian los registros contables que se realicen en una empresa. La diversidad de estos documentos, dependerá de los tipos de transacciones que se realicen, de acuerdo con las necesidades tanto internas en su gran mayoría como medidas del control interno o políticas contables de la organización, como externas, principalmente con destino a los terceros, como clientes, proveedores u organismos reguladores. A nivel general los documentos contables resultan ser muy importantes para las compañías (ver figura 3).
        .col-lg-3.mb-3.mb-lg-0(data-aos="fade-left")
          figure
            img(src='@/assets/curso/images/tema1/img_10_1.png' alt='', style="width:400px; display:block; margin:-1rem 0 ;").mb-3
    
    .row.justify-content-center.align-items-center
      .col-lg-10
        .titulo-sexto.color-acento-contenido.mb-3(data-aos="zoom-in-right")
          h5 Figura 3
          span  Importancia de la contabilidad en la estabilidad financiera
    
    .row.aling.my-5 
      .col-lg-10(data-aos="fade-left") 
          img.mt-3(src='@/assets/curso/images/tema1/fig_2.svg')
    
    p.mb-5 En las empresas se encuentra una variedad de documentos contables de acuerdo a sus necesidades, sin embargo, se puede definir algunos de estos que son considerados los más comunes o habituales en las organizaciones:

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-2
        a.botom-1.boton.color-acento-botones.indicador__container.botom(@click="modal1 = true")
          span <i>1. Factura de venta</i> 
          .indicador--click(v-if="mostrarIndicador")
          .col
            a.lnk(@click="modal1 = true") 

        
        ModalA(:abrir-modal.sync="modal1")
          .row.align-items-center
            .col-md-6.mb-4.mb-md-0
              h3 1. Factura de venta
              p Es un documento que respalda las actividades comerciales de la empresa, puede ser #[span.color-text venta] de productos y/o servicios y es expedida por parte del vendedor a sus clientes.
          
            .col-md-6
              figure
                img(src='@/assets/curso/images/tema1/img_20.png', alt='Texto que describa la imagen')
      .col-lg-2
        a.botom-1.boton.color-acento-contenido.indicador__container.botom(@click="modal2 = true")
          span <i>2. Cuenta de cobro</i> 
          .indicador--click(v-if="mostrarIndicador")
          .col
            a.lnk(@click="modal1 = true") 

        
        ModalA(:abrir-modal.sync="modal2")
          .row.align-items-center
            .col-md-6.mb-4.mb-md-0
              h3 2. Cuenta de cobro
              p Una #[span.color-text cuenta de cobro] es un documento contable, expedido por las personas naturales, no obligadas a expedir factura de venta, con el fin de evidenciar sus actividades comerciales.
            .col-md-6
              figure
                img(src='@/assets/curso/images/tema1/img_21.png', alt='Texto que describa la imagen')
      .col-lg-2
        a.botom-1.boton.color-acento-botones.indicador__container.botom(@click="modal3 = true")
          span <i>3. Recibos de caja</i> 
          .indicador--click(v-if="mostrarIndicador")
          .col
            a.lnk(@click="modal1 = true") 

        
        ModalA(:abrir-modal.sync="modal3")
          .row.align-items-center
            .col-md-6.mb-4.mb-md-0
              h3 3. Recibos de caja
              p Los recibos de caja son los documentos que sustentan las entradas de dinero a la compañía. Cada vez que se configure un Ingreso, como por ejemplo en el pago de una factura de venta o por otros ingresos operacionales o no operacionales, se deberá registrar un recibo de caja para respaldar dicho dinero recibido.
          
            .col-md-6
              figure
                img(src='@/assets/curso/images/tema1/img_22.png', alt='Texto que describa la imagen')
      .col-lg-2
        a.botom-1.boton.color-acento-contenido.indicador__container.botom(@click="modal4 = true")
          span <i>4. Presupuestos</i> 
          .indicador--click(v-if="mostrarIndicador")
          .col
            a.lnk(@click="modal1 = true") 

        
        ModalA(:abrir-modal.sync="modal4")
          .row.align-items-center
            .col-md-6.mb-4.mb-md-0
              h3 4. Presupuestos
              p Herramienta financiera que le permite saber a los administradores, cuáles son los ingresos y gastos en un determinado tiempo, conocer cuánto puede destinar a invertir, tener conocimiento sobre en qué está gastando el dinero, cuánto se necesita para operar en las compañías, a nivel general; estos permiten proyectar los ingresos y egresos de las empresas para la toma de decisiones.
            .col-md-6
              figure
                img(src='@/assets/curso/images/tema1/img_23.png', alt='Texto que describa la imagen')
      .col-lg-2
        a.botom-1.boton.color-acento-botones.indicador__container.botom(@click="modal5 = true")
          span.text <i>5. Comprobante de ingreso</i> 
          .indicador--click(v-if="mostrarIndicador")
          .col
            a.lnk(@click="modal1 = true") 

        
        ModalA(:abrir-modal.sync="modal5")
          .row.align-items-center
            .col-md-6.mb-4.mb-md-0
              h3 5. Comprobante de ingreso
              p Es el documento que comprueba el origen y la cantidad de los ingresos. Juega un papel importante para determinar la base gravable en materia de impuestos.
          
            .col-md-6
              figure
                img(src='@/assets/curso/images/tema1/img_24.png', alt='Texto que describa la imagen')

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-2
        a.botom-1.boton.color-acento-contenido.indicador__container.botom(@click="modal6 = true")
          span.text-small <i>6. Comprobante de egreso</i> 
          .indicador--click(v-if="mostrarIndicador")
          .col
            a.lnk(@click="modal1 = true") 

        
        ModalA(:abrir-modal.sync="modal6")
          .row.align-items-center
            .col-md-6.mb-4.mb-md-0
              h3 6. Comprobante de egreso
              p Es un documento contable que permite soportar el registro del pago o abono en cuenta, de las diferentes obligaciones que suscribe una empresa.
          
            .col-md-6
              figure
                img(src='@/assets/curso/images/tema1/img_25.png', alt='Texto que describa la imagen')
      .col-lg-2
        a.botom-1.boton.color-acento-botones.indicador__container.botom(@click="modal7 = true")
          span.text-1 <i>7. Consignaciones bancarias</i> 
          .indicador--click(v-if="mostrarIndicador")
          .col
            a.lnk(@click="modal1 = true") 

        
        ModalA(:abrir-modal.sync="modal7")
          .row.align-items-center
            .col-md-6.mb-4.mb-md-0
              h3 7. Consignaciones bancarias
              p Las consignaciones bancarias son los depósitos de dinero que realiza una persona natural o jurídica en cuentas de ahorro, cuentas corrientes, entre otros. Hoy en día estas consignaciones también se realizan mediante transferencia electrónica de banco a banco, esta práctica permite realizar pagos de cuentas por pagar, compras, etc.
            .col-md-6
              figure
                img(src='@/assets/curso/images/tema1/img_26.png', alt='Texto que describa la imagen')
      .col-lg-2
        a.botom-1.boton.color-acento-contenido.indicador__container.botom(@click="modal8 = true")
          span.text <i>8. Facturas de compra</i> 
          .indicador--click(v-if="mostrarIndicador")
          .col
            a.lnk(@click="modal1 = true") 

        
        ModalA(:abrir-modal.sync="modal8")
          .row.align-items-center
            .col-md-6.mb-4.mb-md-0
              h3 8. Facturas de compra
              p La factura de compra es un documento soporte que sirve de respaldo para las prácticas comerciales encaminadas a ejecutar el objeto social de las compañías. Pueden ser compra de productos y/o servicios y se expide por parte de quien genera la venta a sus clientes.
          
            .col-md-6
              figure
                img(src='@/assets/curso/images/tema1/img_27.png', alt='Texto que describa la imagen')
      .col-lg-2
        a.botom-1.boton.color-acento-botones.indicador__container.botom(@click="modal9 = true")
          span <i>9. Notas debito</i> 
          .indicador--click(v-if="mostrarIndicador")
          .col
            a.lnk(@click="modal1 = true") 

        
        ModalA(:abrir-modal.sync="modal9")
          .row.align-items-center
            .col-md-6.mb-4.mb-md-0
              h3 9. Notas debito
              p La nota débito es un comprobante que una empresa envía a su cliente, por medio del cual se le informa el haber cargado o debitado en su cuenta un valor determinado, por el concepto que se indica en la misma nota.
            .col-md-6
              figure
                img(src='@/assets/curso/images/tema1/img_28.png', alt='Texto que describa la imagen')
      .col-lg-2
        a.botom-1.boton.color-acento-contenido.indicador__container.botom(@click="modal10 = true")
          span.text <i>10. Notas crédito</i> 
          .indicador--click(v-if="mostrarIndicador")
          .col
            a.lnk(@click="modal1 = true") 

        
        ModalA(:abrir-modal.sync="modal10")
          .row.align-items-center
            .col-md-6.mb-4.mb-md-0
              h3 10. Notas crédito
              p La nota crédito es el documento o comprobante que una persona natural o jurídica obligada a llevar contabilidad, envía a sus clientes, con el propósito de informar la acreditación de un rubro o valor en su cuenta, por el concepto que motivara dicha nota.
          
            .col-md-6
              figure
                img(src='@/assets/curso/images/tema1/img_29.png', alt='Texto que describa la imagen')
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-2
        a.botom-1.boton.color-acento-contenido.indicador__container.botom(@click="modal11 = true")
          span.text-small <i>11. Pagos de nómina</i> 
          .indicador--click(v-if="mostrarIndicador")
          .col
            a.lnk(@click="modal1 = true") 

        
        ModalA(:abrir-modal.sync="modal11")
          .row.align-items-center
            .col-md-6.mb-4.mb-md-0
              h3 11. Pagos de nómina
              p Este soporte contable, evidencia los pagos mensuales o quincenales que el empleador o empresa responsable, debe realizar a los trabajadores que tiene vinculados mediante contrato de trabajo. Dichos pagos que corresponden a salarios, comisiones, bonificaciones, horas extras, recargos nocturnos, dominicales, descuentos de nómina por distintos motivos, entre otros.
          
            .col-md-6
              figure
                img(src='@/assets/curso/images/tema1/img_30.png', alt='Texto que describa la imagen')
      .col-lg-2
        a.botom-1.boton.color-acento-botones.indicador__container.botom(@click="modal12 = true")
          span.text-1 <i>12. Pago de seguridad social</i> 
          .indicador--click(v-if="mostrarIndicador")
          .col
            a.lnk(@click="modal1 = true") 

        
        ModalA(:abrir-modal.sync="modal12")
          .row.align-items-center
            .col-md-6.mb-4.mb-md-0
              h3 12. Pago de seguridad social
              p Es el documento por medio del cual se soporta el pago de la seguridad social que realizan tanto las empresas por cada uno de sus empleados a cargo, como también los trabajadores independientes.
            .col-md-6
              figure
                img(src='@/assets/curso/images/tema1/img_31.png', alt='Texto que describa la imagen')
      .col-lg-2
        a.botom-1.boton.color-acento-contenido.indicador__container.botom(@click="modal13 = true")
          span.text-1 <i>13. Declaraciones tributarias</i> 
          .indicador--click(v-if="mostrarIndicador")
          .col
            a.lnk(@click="modal1 = true") 

        
        ModalA(:abrir-modal.sync="modal13")
          .row.align-items-center
            .col-md-6.mb-4.mb-md-0
              h3 13. Declaraciones tributarias
              p Este documento contable, resulta ser muy importante para los intereses de la persona natural o jurídica, que realiza los pagos de impuestos al fisco, y que sirven para confirmar los pagos realizados por conceto de cualquier tributo, cuando cualquier entidad de la orden nacional encargada de auditar en la materia, así lo requiera.
          
            .col-md-6
              figure
                img(src='@/assets/curso/images/tema1/img_32.png', alt='Texto que describa la imagen')

    p.my-5 A nivel general se mencionaron algunos documentos de carácter obligatorio que se utilizan de forma cotidiana en las empresas; sin embargo, es importante tener en cuenta, que dependiendo del tipo de sociedad, si es productora, comercializadora, prestadora de servicios, como también para empresas de gran tamaño o por políticas propias de la compañía, se encuentra  en la práctica que cada administración es libre de establecer los procesos y procedimientos de las empresas, y que pueden documentar de manera voluntaria esos procesos como se estime conveniente.
    
    Separador

    #t_1_6.titulo-segundo
      .h2 1.6 Normativa
    
    p.mb-5 En Colombia, lo que corresponde a las Normas de Contabilidad y de Información Financiera aceptadas o lo que se considera como el marco normativo regulatorio de la contabilidad, se consagra en la Ley 1314 de 2009  #[span.color-text “por la cual se regulan los principios y normas de contabilidad e información financiera y de aseguramiento de información aceptados en Colombia, se señalan las autoridades competentes, el procedimiento para su expedición y se determinan las entidades responsables de vigilar su cumplimiento”.] Se invita a ver el siguiente recurso para conocer los aspectos destacados de la normativa:

    .row.aling.my-5 
      .col-lg-10
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--gris")(data-aos="fade-up")
          div(titulo="La ley 1314 de 2009")
            .row.align-items-star.justify-content-center.p-4
              .col-lg-4
                img(src='@/assets/curso/images/tema1/img_16.png')
              .col-lg-6
                p.mb-0 Y sus Decretos Reglamentarios (Decreto Único Reglamentario 2420 de 2015 expedido por el Ministerio de Comercio, Industria y Turismo), el cual compila los decretos relacionados con las Normas de Información Financiera, de Aseguramiento de la Información y de Contabilidad.
              
          div(titulo="La ley 1314 de 2009")
            .row.align-items-star.justify-content-center.p-4
              .col-lg-4
                img(src='@/assets/curso/images/tema1/img_17.png')
              .col-lg-6
                p.mb-3 En ese momento la intención del legislador, era simplificar la búsqueda de las consideraciones que en materia de impuestos existían, pues existían múltiples normas que regulaban la materia, y podría generar confusión para los contribuyentes.
                p.mb-0 Ahora bien, recientemente se expidieron otras normativas en materia contable que tratan temas relacionados con el marco técnico de los grupos que deben aplicar los estándares internacionales de información financiera. 

          div(titulo="El decreto 938 de 2021")
            .row.align-items-star.justify-content-center.p-4
              .col-lg-4
                img(src='@/assets/curso/images/tema1/img_18.png')
              .col-lg-6
                p.mb-0 “Por el cual se modifica el marco técnico de las Normas de Información Financiera para el Grupo 1 del Decreto Único Reglamentario de las Normas de Contabilidad, de Información Financiera y de Aseguramiento de la Información”.
          
          div(titulo="Decreto 2420 de 2015")
            .row.align-items-star.justify-content-center.p-4
              .col-lg-4
                img(src='@/assets/curso/images/tema1/img_33.png')
              .col-lg-6
                p.mb-0 Y se dictan otras disposiciones”, y el decreto 1670 de 2021 “Por el cual se modifica el Decreto 2420 de 2015, Decreto Único Reglamentario de las Normas de Contabilidad, de Información Financiera y de Aseguramiento de la Información, en relación con la simplificación contable y se dictan otras disposiciones” mediante este decreto se establecen los nuevos criterios de clasificación de las entidades de los grupos 2 y 3 para efectos de la aplicación de las NIIF.

          div(titulo="Modificación de Decretos")
            .row.align-items-star.justify-content-center.p-4
              .col-lg-4
                img(src='@/assets/curso/images/tema1/img_19.png')
              .col-lg-6
                p.mb-0 Claramente estos decretos modifican lo establecido en el Decreto Único Reglamentario 2420 del año 2015 y que, según lo estipulado en estos decretos, su aplicación será obligatoria a partir del año 2023.


    .row.aling.my-5   
      .col-lg-12(data-aos="zoom-in-down")
        .cajon.color-custom-5.p-4.mb-4.p-4
          .row.justify-content-around.align-items-center
            .col-lg-12
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  p.mb-0 Hasta aquí se ha tratado las temáticas referentes a los temas de contabilidad, en donde  se abordan uno a uno temas tanto contables, como tributarios, que nos permitieron hacer claridad sobre generalidades importantes para las personas naturales y jurídicas que están obligados o por voluntad propia a llevar contabilidad y a tributar en Colombia.






















    
    
   
  
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    modal1: false,
    modal2: false,
    modal3: false,
    modal4: false,
    modal5: false,
    modal6: false,
    modal7: false,
    modal8: false,
    modal9: false,
    modal10: false,
    modal11: false,
    modal12: false,
    modal13: false,
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
