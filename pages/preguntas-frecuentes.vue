<template>
  <div class="pf-container">
    <h2 class="pregunta">
      ¿Qué información nos aporta el recuento de mariposas?
    </h2>
    <p>
      Las mariposas son insectos muy sensibles a los cambios en sus hábitats, y su aparición o desaparición
      sirve como indicador del estado de conservación de un lugar y de su biodiversidad.<br/>
      Su presencia es clave dentro de los ecosistemas, como polinizadoras de plantas y también como alimento para sus depredadores.<br/>
      El hecho de que las diferentes especies de mariposas sean relativamente fáciles de identificar hace que sea más sencillo
      efectuar su seguimiento que el de otros órdenes de insectos (como hormigas, chinches, escarabajos, pulgones, moscas, abejas...).<br/>
      Así pues, contando las mariposas de diferentes especies que se ven en un mismo lugar año tras año, podemos hacernos
      una idea de la evolución de los ecosistemas, y en el caso de los parques urbanos, obtenemos datos que nos pueden ayudar a
      estudiar y a mejorar la gestión de su biodiversidad.
    </p>

    <h2 class="pregunta">
      ¿Desde cúando se cuentan mariposas?
    </h2>
    <p>
      En 1976 se estableció el UKBMS, el plan de seguimiento de mariposas en el Reino Unido.<br/>
      A partir de esta experiencia, se fueron estableciendo otros proyectos similares, entre ellos el CBMS (Catalan
      Butterfly Monitoring Scheme), el primero de la región mediterránea, iniciado en 1994. Desde 2008 la asociación
      ZERYNTHIA mantiene una red de seguimiento en diferentes puntos de la geografía española. El número de países con
      este tipo de proyectos de seguimiento sigue creciendo, y actualmente ya son una veintena.<br/>
      En 2018 se inauguró el uBMS (Urban Butterfly Monitoring Scheme, plan de seguimiento de mariposas urbanas), que sigue
      las poblaciones de estos insectos en Barcelona, Madrid, y, desde 2021, también en Sabadell. Paralelamente también
      se ha establecido el mBMS, que sigue la población de mariposas en otras ciudades del área metropolitana de Barcelona.
    </p>

    <h2 class="pregunta">
      ¿Yo también puedo contar mariposas?
    </h2>
    <p>
      ¡Claro que sí! Cualquier persona interesada puede formar parte de estos proyectos de ciencia ciudadana. Si vives en Madrid
      (o alrededores), puedes <a href="https://ubms.creaf.cat/participa/">inscribirte como voluntario del uBMS.</a><br/>
      Si quieres participar desde cualquier otro punto de España, puedes contactar con la <a href="https://www.asociacion-zerynthia.org/seguimiento-diurnas">
        asociación ZERYNTHIA</a>.<br/>
      Sólo es necesario que tengas disponibilidad para poder visitar tu parque o itinerario una vez a la semana de marzo
      a septiembre. Ambos proyectos organizan actividades para aprender a hacer los recuentos y a identificar las diferentes
      especies.
    </p>

    <h2 class="pregunta">
      ¿De dónde salen los datos de esta web?
    </h2>
    <p>
      Los recuentos de mariposas corresponden a las observaciones de los voluntarios del uBMS, tal y como se muestran
      en el <a href="https://ubms.creaf.cat/mis-observaciones/">mapa de su sitio web oficial</a>.<br/>
      Esta web donde estás ahora es creación personal de uno de los voluntarios de este proyecto de ciencia ciudadana,
      con la única intención de mostrar la información del mapa de otra manera, tal vez más fácil de navegar.<br/>
      La información sobre cada especie la he extraído principalmente de la <em>Guia de les papallones diürnes de Catalunya</em>,
      de Roger Vila, Constantí Stefanescu i José Manuel Sesma, y de <em>Las mariposas de España peninsular</em>, de
      Víctor Redondo, Javier Gastón y Juan Carlos Vicente. Las miniaturas están elaboradas a partir de fotos propias y de
      otras de Wikimedia Commons.<br/>
      En las fotografías de las fichas de cada especie se indica su autoría cuando se usan bajo licencia Creative Commons,
      DP en caso de fotos de dominio público, y, cuando no hay ningún texto, se trata de originales mías, la mayoría tomadas
      en los parques urbanos de Barcelona.<br/>
      El icono de la página es de <a href="http://www.onlinewebfonts.com/icon">Icon Fonts</a> y tiene licencia CC.
    </p>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
p {
  font-size: 1.08rem;
  line-height: 1.4;
}
a,
a:visited {
  color: #4747d1;
  text-decoration: none;
}
a:hover {
  text-decoration: underline;
}
.pf-container {
  width: 80vw;
  margin: auto;
  padding-top: 2vh;
}
.pregunta {
  font-size: 1.5rem;
  margin-bottom: 0;
}
@media (max-width: 520px) {
  .pregunta {
    font-size: 1.2rem;
  }
}
</style>
