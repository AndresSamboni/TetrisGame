# <FONT COLOR = "blue">***LEARNING JAVASCRIPT***</FONT>

> [!NOTE]
> To create a game is important the game loop, then I use the function requestAnimationFrame() like in my script the function that generate the loop is called **update()**, then inside this I put the function **requestAnimationFrame()**.

> ```
>function update () {
>    draw ();
>    requestAnimationFrame(update);
>}
> ```

> [!IMPORTANT]
> If I need refer to the element in the HTML file I use the sentence **document** to refer the HTML and in this point I can find an specific element by id or class or name.

> [!NOTE]
> If I want activate the events by keyboard, then I need use an **addEventListener()** with the event name and the function that execute the actions. 

>document.addEventListener("keydown", event =>{
>    switch (event.key){
>        case "ArrowRight":
>            console.log("Mover la ficha hacia derecha");
>            break;
>        case "ArrowDown":
>            console.log("Mover la ficha hacia abajo");
>            break;
>        case "ArrowLeft":
>            console.log("Mover la ficha hacia izquierda");
>            break;
>    }
>});
