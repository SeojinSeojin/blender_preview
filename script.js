document.addEventListener("click", () => {
    const box_asset = document.querySelector("#box-asset");
    box_asset.setAttribute("animation-mixer", "loop:once; clampWhenFinished:true");
})