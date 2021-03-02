document.addEventListener("click", () => {
    const box_asset = document.querySelector("#box-asset");
    if (box_asset.hasAttribute("animation-mixer")) {
        box_asset.removeAttribute("animation-mixer");
    }
    box_asset.setAttribute("animation-mixer", "loop:once; clampWhenFinished:true");
})