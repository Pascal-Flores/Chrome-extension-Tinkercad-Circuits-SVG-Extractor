function downloadSVG() {
    const SVGName = document.querySelector("nav > div:first-child > div:nth-child(2) > a > span")!.textContent;
    const SVGCopy = document.querySelector(".hasSVG > svg")!.cloneNode(true) as SVGSVGElement;
    const SVG = document.querySelector(".hasSVG > svg")!;
    
    SVG.parentElement!.appendChild(SVGCopy);
    cropSVG(SVGCopy);
    
    const svgData = new XMLSerializer().serializeToString(SVGCopy);
    const blob = new Blob([svgData], {type: "image/svg+xml;charset=utf-8"});
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `${SVGName}.svg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    SVG.parentElement!.removeChild(SVGCopy);
}

function cropSVG(svgEl : SVGSVGElement) {
    const bbox = svgEl.getBBox();
    svgEl.setAttribute("viewBox", `${bbox.x} ${bbox.y} ${bbox.width} ${bbox.height}`);
    return svgEl;
}

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    switch (message.type) {
        case 'can_download':
            if (document.querySelector("#CIRCUITS_VIEW_ID") !== null)
                sendResponse(true);
            else
                sendResponse(false);
            break;
        case 'download':
            downloadSVG();
            break;
    }
});