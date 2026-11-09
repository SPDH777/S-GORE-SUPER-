# SM GORE SUPER · ARSENAL+

Juego de plataformas 2D en canvas (sin librerías externas). Sin build obligatorio: abre `index.html` con un servidor local.

## Estructura

```
index.html                 HTML + carga de CSS y JS
style.css                  Estilos
01-base-controles.js       Configuración, audio, controles táctiles/teclado, menús y pausa
02-niveles-mundos.js       Mundos, modificadores, PLANIFICADOR de niveles, tramos, cuevas, jefes (arena)
03-fisica-enemigos.js      Física del jugador, daño, tuberías, IA de enemigos
04-tienda-seleccion.js     Power-ups, tienda y pantalla de selección de nivel
05-armas-gore.js           Armas, sangre/gore, disparos, ítems
06-interfaz-dibujo.js      Texto, botones, logo e iconos
07-fondos.js               Fondos, agua, tiles
08-dibujo-criaturas.js     Dibujo de enemigos comunes, castillo y bandera
09-jefes-logica.js         Lógica de los 12 jefes y enemigos voladores
10-jefes-dibujo.js         Dibujo de los jefes y barra de vida
11-personaje.js            Dibujo del personaje (Bino)
12-render-bucle.js         HUD, render y bucle principal
build.py                   Junta todo en un solo HTML
```

## Ejecutar

```bash
python3 -m http.server 8000
# abre http://localhost:8000
```

## Reglas importantes

- El **orden** de los `<script>` en `index.html` importa: no lo cambies.
- Los archivos comparten el ámbito global (igual que el HTML original).
- `python3 build.py` genera `dist/SM_GORE_SUPER_ARSENAL.html` (un solo archivo).

## Niveles (02-niveles-mundos.js)

- Hay **15 tipos de tramo** (`CH` dentro de `build0`). `CHW` define cuánto aparece cada tipo en cada mundo.
- `planLv` decide la secuencia de tramos de cada nivel y `allPlans` comprueba que la **firma** (secuencia) no se parezca a la de otro nivel (máx. ~34 % de coincidencia). Para ver la firma de un nivel: `LVSIG(25)` en la consola.
- `MKT` da a cada mundo 20 combinaciones de modificadores **distintas**, de menos a más difíciles. El nivel 1 no tiene modificadores.
- Para añadir un tramo nuevo: añade su función al final de `CH`, una fila en `CHW` (6 pesos, uno por mundo) y cambia `15` por el nuevo total si lo usas en alguna cuenta.
- Reglas para que sea superable: fosos de 2 a 5 casillas, saltos entre plataformas de máx. 3 casillas, escalones de +1 casilla.

## Novedades (v3)

- **Checkpoints** (`03`): uno cada ~1/3 del nivel (mín. 100 casillas); se usan al reintentar tras Game Over. Jefes y cuevas no tienen.
- **Variedad de niveles** (`02`):
  - Cada nivel tiene un **perfil de relieve** propio (llano, colinas, subida, valle, olas): sube de 1 en 1 y baja hasta 2. Parámetros `PRF`, `AMP`, `shp` en `build0`.
  - **Cuevas**: 15 diseños de terreno × 10 modalidades. `cvPlan(lv)` reparte pares (diseño, modalidad) **distintos** a los 108 niveles con cueva, sin repetir diseño en los 6 anteriores ni modalidad en los 4 anteriores.
  - **Mecánica por mundo** (`03`, al final): bosque = trampolines (`SPR`), invierno = carámbanos, infierno = meteoros, alcantarilla = goteo ácido (`wxStep`, reutiliza `BP` con aviso rojo), cielo = viento (`windF`), mar = corrientes.
  - El **viento** (modificador 4) ya funciona y entra en los modificadores de invierno y cielo.
- **Rendimiento** (`05`, `12`): tope de partículas/manchas más bajo en móvil (`FXMAX`, `DCMAX`); resolución adaptable (2 → 1,5 → 1 si hay menos de ~40 FPS sostenidos); **F3** muestra los FPS.
- **Pausa automática** al cambiar de pestaña/app (`01`).
- **Audio** (`01`): música distinta por mundo (tono, timbre y ritmo; jefes más rápidos, cuevas una octava más grave) con interruptor propio, separado de los efectos.
- **Mando** (`01`): stick/cruceta mover, A saltar, X/RT/RB disparar, Y/LB cambiar arma, B recoger, Start pausa.
- **Pisotón** (`03`): el rebote crece con el combo.
