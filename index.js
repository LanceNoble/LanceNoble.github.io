window.onload = (event) => {
    const h1 = document.body.querySelector("header>h1")
    const h1Words = h1.innerHTML.split(" ")
    const verbs = ["code", "hoop", "travel", "collaborate"]
    let i = 0
    // setInterval(() => {
    //     const final = verbs[++i].concat('.')
    //     if (i == verbs.length - 1) {
    //         i = -1
    //     }
    //     h1Words[h1Words.length - 1] = final
    //     h1.innerHTML = h1Words.join(" ");
    // }, 4000)
}