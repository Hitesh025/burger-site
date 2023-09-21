export function notNull(val: any) {
    return (val !== null && !Number.isNaN(val) && val !== undefined && val !== "NULL" && val !== "null" && val !== "undefined" && val !== "UNDEFINED" && (val + "").trim() !== "")
}

export function setTableSize() {
    let topBarH = Number(document.getElementById("top-bar")?.offsetHeight)
    let footerH = Number(document.getElementById("footer")?.offsetHeight)
    let f = (notNull(footerH)) ? footerH : 0
    let screenH = Number(window.innerHeight)
    let main = document.getElementById('main') as HTMLElement
    let extra = -2
    if (notNull(main)) {
        main.style.height = ((screenH) - (topBarH + f + extra)) + "px"
        console.log(main.style.height);
    }
}