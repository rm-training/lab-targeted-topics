function findTheFlags() {

  const bucket = document.getElementById("bucket");
  const bucketList = bucket.querySelector("ul");

  const flag1 = document.querySelector(".main li.foo");
  // the flag is already an LI so we do not need to recreate it...
  bucketList.appendChild(flag1);

  const flag2 = document.querySelector("article a span");
  let newLi = document.createElement("li");
  newLi.appendChild(flag2);
  bucketList.appendChild(newLi);

  const flag3 = document.querySelector(".footer div div div div:first-child");
  newLi = document.createElement("li");
  newLi.appendChild(flag3);
  bucketList.appendChild(newLi);

  const flag4 = document.querySelector("#article-3 p span");
  newLi = document.createElement("li");
  newLi.appendChild(flag4);
  bucketList.appendChild(newLi);

  const flag5 = document.querySelector("#article-3 p:nth-child(4)");
  newLi = document.createElement("li");
  newLi.appendChild(flag5);
  bucketList.appendChild(newLi);
}

function bonus() {
  const q = [];

  q.push(document);

  while (q.length) {
    const next = q.pop();

    Array.from(next.children).map((el) => {
      if (el.innerText.match(/flag #/i)) {
        if (el.children.length) {
          q.push(el);
        } else {
          console.log("match found:", el, el.innerText);
        }
      }
    });
  }
};

export default findTheFlags;
export { bonus };
