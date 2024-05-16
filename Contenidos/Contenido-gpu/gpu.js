let pContenido = document.querySelector(".section1")

pContenido.innerHTML = 

`
    <h1 class="titContenido">GPU</h1>

    <div class="defini">
    
        <p>La unidad de procesamiento de gráficos (GPU) es un circuito electrónico que puede realizar cálculos matemáticos a alta velocidad. Algunas tareas de computación, como la renderización de gráficos, el machine learning (ML) y la edición de videos, requieren la aplicación de operaciones matemáticas similares en un conjunto de datos grande. El diseño de una GPU le permite realizar la misma operación en varios valores en paralelo. Esto vuelve más eficiente el procesamiento de muchas tareas que requieren mucha capacidad de cómputo. <br> <br> Las GPU son la opción ideal para realizar procesamiento paralelo de uso general, pero históricamente no siempre fue así. Como el nombre indica, las GPU se diseñaron inicialmente para una tarea específica: controlar la visualización de imágenes. </p>

    

        <div class="cajonImg">
            <img src="https://signal.avg.com/hs-fs/hubfs/Blog_Content/Avg/Signal/AVG%20Signal%20Images/cpu_vs_gpu_whats_the_difference_signal/Signal-cpu-vs-gpu-comparison-Hero.jpg?width=1200&name=Signal-cpu-vs-gpu-comparison-Hero.jpg" alt="" class="imgDefin">
        </div>
    </div>

    <h1 class="titCarac">Características</h1>
    <div class="pList">
        
        <table>
            <tr>
                <td class="subtitTab">Procesador de Comandos</td>
                <td> Lee la lista de pantalla o de instrucciones que le envía la CPU, tanto para generar gráficos como para hacer cálculos complejos.</td>
            </tr>
            <tr>
                <td class="subtitTab">Unidad de Rasterizado</td>
                <td>Unidad que realiza la transformación del espacio tridimensional basado en vertices a uno bidimensional basado en píxeles.</td>
            </tr>
            <tr>
                <td class="subtitTab">Unidad de Texturizado</td>
                <td>Se encarga de aplicar una imagen sobre una superficie para simular textura o color en la vida real.</td>
            </tr>
            <tr>
                <td class="subtitTab">Raster Output</td>
                <td>Unidad encargada de dibujar los pixeles finales sobre el búfer de imagen. Es junto a la Cache de último nivel la única pieza que tiene permisos de escritura sobre la VRAM.</td>
            </tr>
            <tr>
                <td class="subtitTab">CODEC de Vídeo</td>
                <td>Procesador independiente que descodifica vídeo en varios formatos multimedia y los reproduce, así como se encarga de generar vídeo e incluso pasar de un formato a otro.</td>
            </tr>


        </table>
  
    </div>`;


        //   <ul>
        //     <li>Procesador de comandos. </li>
        //     <li>Unidad de Texturizado.</li>
        //     <li>DMA.</li>
        // </ul>

        // <ul>
        //     <li>Raster Output.</li>
        //     <li>Unidad Shader.</li>
        // </ul>
