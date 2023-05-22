const loadingBarEl = document.querySelector(".loading-bar")
const percentEl = document.querySelector(".bottom-container>span")

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
};

async function main() {
  for (let i = 0; i <= 100; i++) {
    percentEl.innerText = `${i}%`;
    loadingBarEl.style.width = `${i * 3.5}px`
    await sleep(30);
  };
};

main();