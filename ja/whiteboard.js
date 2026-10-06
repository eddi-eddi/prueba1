/* =========================================================
   MATE FÁCIL V3.3 — PIZARRÓN
   ========================================================= */

"use strict";

(function() {
    /* =========================================================
       ELEMENTOS
       ========================================================= */

    const canvas = document.getElementById("blackboardCanvas");
    const pencilTool = document.getElementById("pencilTool");
    const eraserTool = document.getElementById("eraserTool");
    const blackColor = document.getElementById("blackColor");
    const redColor = document.getElementById("redColor");
    const blueColor = document.getElementById("blueColor");
    const brushSize = document.getElementById("brushSize");
    const clearBoardBtn = document.getElementById("clearBoardBtn");

    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    /* =========================================================
       ESTADO
       ========================================================= */

    let isDrawing = false;
    let lastX = 0;
    let lastY = 0;
    let currentTool = "pencil";
    let currentColor = "#111827";
    let currentSize = 3;
    let isCanvasReady = false;

    /* =========================================================
       INICIALIZACIÓN DEL CANVAS
       ========================================================= */

    function resizeCanvas() {
        const wrapper = canvas.parentElement;
        const rect = wrapper.getBoundingClientRect();

        if (rect.width === 0 || rect.height === 0) {
            return;
        }

        canvas.width = rect.width;
        canvas.height = rect.height;

        ctx.lineCap = "round";
        ctx.lineJoin = "round";
        ctx.strokeStyle = currentColor;
        ctx.lineWidth = currentSize;

        isCanvasReady = true;
    }

    function tryInitCanvas() {
        if (isCanvasReady) return;

        const wrapper = canvas.parentElement;
        const rect = wrapper.getBoundingClientRect();

        if (rect.width > 0 && rect.height > 0) {
            resizeCanvas();
        }
    }

    resizeCanvas();

    const observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if (mutation.attributes && mutation.attributeName === "class") {
                tryInitCanvas();
            }
        });
    });

    const practiceSection = document.getElementById("practica");
    if (practiceSection) {
        observer.observe(practiceSection, { attributes: true });
    }

    window.addEventListener("resize", function() {
        if (isCanvasReady) {
            resizeCanvas();
        }
    });

    /* =========================================================
       FUNCIONES DE DIBUJO
       ========================================================= */

    function getCoordinates(event) {
        const rect = canvas.getBoundingClientRect();
        let clientX, clientY;

        if (event.touches && event.touches.length > 0) {
            clientX = event.touches[0].clientX;
            clientY = event.touches[0].clientY;
        } else {
            clientX = event.clientX;
            clientY = event.clientY;
        }

        return {
            x: clientX - rect.left,
            y: clientY - rect.top
        };
    }

    function startDrawing(event) {
        if (!isCanvasReady) {
            tryInitCanvas();
            if (!isCanvasReady) return;
        }

        event.preventDefault();
        isDrawing = true;
        const coords = getCoordinates(event);
        lastX = coords.x;
        lastY = coords.y;
    }

    function draw(event) {
        if (!isDrawing || !isCanvasReady) return;
        event.preventDefault();

        const coords = getCoordinates(event);

        ctx.beginPath();
        ctx.moveTo(lastX, lastY);
        ctx.lineTo(coords.x, coords.y);

        if (currentTool === "eraser") {
            ctx.strokeStyle = "#ffffff";
            ctx.lineWidth = currentSize * 3;
        } else {
            ctx.strokeStyle = currentColor;
            ctx.lineWidth = currentSize;
        }

        ctx.stroke();

        lastX = coords.x;
        lastY = coords.y;
    }

    function stopDrawing() {
        isDrawing = false;
    }

    /* =========================================================
       EVENTOS DEL MOUSE
       ========================================================= */

    canvas.addEventListener("mousedown", startDrawing);
    canvas.addEventListener("mousemove", draw);
    canvas.addEventListener("mouseup", stopDrawing);
    canvas.addEventListener("mouseout", stopDrawing);

    /* =========================================================
       EVENTOS TÁCTILES
       ========================================================= */

    canvas.addEventListener("touchstart", startDrawing, { passive: false });
    canvas.addEventListener("touchmove", draw, { passive: false });
    canvas.addEventListener("touchend", stopDrawing);
    canvas.addEventListener("touchcancel", stopDrawing);

    /* =========================================================
       HERRAMIENTAS
       ========================================================= */

    function setActiveTool(tool) {
        currentTool = tool;

        if (pencilTool) {
            pencilTool.classList.toggle("active", tool === "pencil");
        }
        if (eraserTool) {
            eraserTool.classList.toggle("active", tool === "eraser");
        }
    }

    if (pencilTool) {
        pencilTool.addEventListener("click", () => setActiveTool("pencil"));
    }

    if (eraserTool) {
        eraserTool.addEventListener("click", () => setActiveTool("eraser"));
    }

    /* =========================================================
       COLORES
       ========================================================= */

    function setActiveColor(color) {
        currentColor = color;

        if (blackColor) blackColor.classList.toggle("active", color === "#111827");
        if (redColor) redColor.classList.toggle("active", color === "#dc2626");
        if (blueColor) blueColor.classList.toggle("active", color === "#2563eb");
    }

    if (blackColor) {
        blackColor.addEventListener("click", () => setActiveColor("#111827"));
    }

    if (redColor) {
        redColor.addEventListener("click", () => setActiveColor("#dc2626"));
    }

    if (blueColor) {
        blueColor.addEventListener("click", () => setActiveColor("#2563eb"));
    }

    /* =========================================================
       TAMAÑO DEL PINCEL
       ========================================================= */

    if (brushSize) {
        brushSize.addEventListener("input", () => {
            currentSize = parseInt(brushSize.value, 10);
        });
    }

    /* =========================================================
       LIMPIAR PIZARRÓN
       ========================================================= */

    if (clearBoardBtn) {
        clearBoardBtn.addEventListener("click", () => {
            if (isCanvasReady) {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
            }
        });
    }

    /* =========================================================
       ESTADO INICIAL
       ========================================================= */

    setActiveTool("pencil");
    setActiveColor("#111827");
})();
