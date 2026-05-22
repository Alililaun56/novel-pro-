const episodes = [
  {title:"قسط 1", link:"https://www.mediafire.com/file/k61400p37y79b14/Qist_number_1_05-22-2026_01.26.pdf/file"},
  {title:"قسط 2", link:"https://www.mediafire.com/file/xn2a78qjz9l0tel/qist_number_2.warishanovel.pdf/file"},
  {title:"قسط 3", link:"https://www.mediafire.com/file/7dp1r1rg9xx66bu/qist_number_3.warishanovels.pdf/file"}
];

const grid = document.getElementById("episodes");

episodes.forEach(ep=>{
  const div = document.createElement("div");
  div.className="card";

  div.innerHTML=`
    <h3>${ep.title}</h3>
    <p>🔒 Login required to unlock</p>
    <a href="login.html" class="btn">Unlock</a>
  `;

  grid.appendChild(div);
});
