window.onload = () => {
const body = document.body;
function web(keys, style) {
  Object.entries(style).forEach(([props, value]) => {
 keys.style[props] = value;
});};
web(body, {
  height: "100vh",
  padding: "0",
  margin: "0",
});
const header = document.createElement("header");
web(header, {
  width: "100%",
  height: "25%",
  backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwS3W4wPFYeHw8GPR3gQOb0SttAIphcGdtGdXcuQ1vsg&s')",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover"
});
body.appendChild(header);
const subtitle = document.createElement("h2");
subtitle.innerText = "Developer MIMO";
web(subtitle, {
  margin: "0",
  fontWeight: "bold",
  textAlign: "center",
  color: "#FF00DD"
});
header.appendChild(subtitle);
const btn = document.createElement("button");
btn.innerHTML = "";
header.appendChild(btn);
const icon = document.createElement("i");
icon.className = "fa fa-bars";
web(icon, {
  fontSize: "38px"
});
btn.appendChild(icon);
web(btn, {
  backgroundColor: "transparent",
  color: "#fff",
  border: "none",
  transform: "translate(0px, 48px)"
});
const nav = document.createElement("nav");
const ul = document.createElement("ul");
const links = [
  {text: "Sobre", href: "#"},
  {text: "Página", href: "#"},
  {text: "Serviços", href: "#"}
];
links.forEach(link => {
const li = document.createElement("li");
const a = document.createElement("a");
a.textContent = link.text;
a.href = link.href;
ul.appendChild(li);
li.appendChild(a);
});
nav.appendChild(ul);
header.appendChild(nav);
nav.style.display = "none";
btn.addEventListener("click", function() {
if(nav.style.display === "none"){
nav.style.display = "block";
subtitle.style.color = "transparent";
}else{
nav.style.display = "none";
subtitle.style.color = "#ff00ff";
};
const links = nav.querySelectorAll("a");
links.forEach(a => {
  ul.style.listStyle = "none";
  ul.style.letterSpacing = "4px";
  a.style.textDecoration = "none";
  a.style.color = "#fff";
  a.style.fontWeight = "bold";
  a.style.position = "relative";
  a.style.right = "31px";
  a.style.bottom = "80px";
  a.style.fontSize = "18px";
});
});
const div = document.createElement("div");
body.appendChild(div);
web(div, {
  display: "flex",
  flexDirection: "column",
  padding: "20px"
});
const p0 = document.createElement("p");
p0.innerText = "JavaScript (frequentemente abreviado como JS) é uma linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma (protótipos, orientado a objeto, imperativo e funcional).";
const img0 = document.createElement("img");
img0.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFJ8J0K-LBNJTjPl3_38uzmNeGXtjuTPYoBjGTfKn97g&s";
div.appendChild(p0);
div.appendChild(img0);
web(p0, {
  padding: "80px 0 40px 0",
  fontFamily: "sans-serif"
});
web(img0, {
  height: "182px",
  width: "280px",
  borderRadius: "30px"
});
const p1 = document.createElement("p");
p1.innerText = "Os navegadores da Web possuem um mecanismo JavaScript dedicado que executa o código do cliente . Esses mecanismos também são utilizados em alguns servidores e em diversos aplicativos . O sistema de tempo de execução mais popular para uso fora do navegador é o Node.js";
const img1 = document.createElement("img");
img1.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbX-xroPK10xaLJP1JM6cSV3L5PvV98J4sSWlTKODRBQ&shttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbX-xroPK10xaLJP1JM6cSV3L5PvV98J4sSWlTKODRBQ&s";
div.appendChild(p1);
div.appendChild(img1);
web(p1, {
  padding: "80px 0 60px 0",
  fontFamily: "sans-serif"
});
web(img1, {
  borderRadius: "30px"
});
const footer = document.createElement("footer");
const pf =document.createElement("p");;
pf.innerText = "direitos reservados Dev Alexandre";
body.appendChild(footer);
footer.appendChild(pf);
web(pf, {
  paddingTop: "78px",
  textAlign: "center"
});
};