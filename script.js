function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
async function loadAnimation() {
    const loading = document.querySelector(".loading-background")
    loading.classList.add("show")
    await sleep(2000)
    loading.classList.remove("show")
}

document.getElementById("loading-button").addEventListener("click", () => {
    loadAnimation()
})
