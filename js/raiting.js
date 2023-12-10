const ratingHtml = document.querySelector('.rating-html')
const blockHtml = document.getElementsByClassName("block_html");
const htmlCounter = ".counter-html"
const htmlBlockClass = "block_html"

const ratingJs = document.querySelector('.rating-js')
const blockJs = document.getElementsByClassName("block_js");
const jsCounter = ".counter-js"
const jsBlockClass = "block_js"

const ratingTs = document.querySelector('.rating-ts')
const blockTs = document.getElementsByClassName("block_ts");
const tsCounter = ".counter-ts"
const tsBlockClass = "block_ts"

const ratingRe = document.querySelector('.rating-re')
const blockRe = document.getElementsByClassName("block_re");
const reCounter = ".counter-re"
const reBlockClass = "block_re"

const ratingRed = document.querySelector('.rating-red')
const blockRed = document.getElementsByClassName("block_red");
const redCounter = ".counter-red"
const redBlockClass = "block_red"


const ratingNode = document.querySelector('.rating-node')
const blockNode = document.getElementsByClassName("block_node");
const nodeCounter = ".counter-node"
const nodeBlockClass = "block_node"

const raitingFunc = () => {
showRaiting(ratingHtml,blockHtml, htmlCounter, htmlBlockClass)
showRaiting(ratingJs,blockJs, jsCounter, jsBlockClass)
showRaiting(ratingTs,blockTs, tsCounter,tsBlockClass)
showRaiting(ratingRe,blockRe, reCounter,reBlockClass)
showRaiting(ratingRed,blockRed, redCounter,redBlockClass)
showRaiting(ratingNode,blockNode, nodeCounter,nodeBlockClass)

};
raitingFunc();

async function showRaiting (rating, block,countName, blockClass) {
    for (let i = 1; i < 100; i++) {
        rating.innerHTML += `<div class="block  ${blockClass}"></div>`;
        block[i].style.transform = "rotate(" + 3.6 * i + "deg)";
        block[i].style.animationDelay = `${i / 40}s`;
      }
    
      const counter = document.querySelector(countName);
      counter.innerText = 0;
      const target = +counter.getAttribute("data-target");
    
      const numberCounter = () => {
        const value = +counter.innerText;
        if (value < target) {
          counter.innerText = Math.ceil(value + 1);
    
          setTimeout(() => {
            numberCounter();
          }, 20);
        }
      };
      numberCounter();
}