let meni = document.querySelector("#meni");
let links = ["index.html","author.html"];
let linksName = ["Početna","Autor"];
let listTag = ""
for(let i in links){
    listTag+="<li class='nav-item'><a href=" + links[i] + ">"+ linksName[i] + "</a></li>";
}
meni.innerHTML = listTag;



let linksFooter = ["https://www.facebook.com/","https://www.instagram.com/","sitemap.xml"];
let linksIcons = ["fa-brands fa-facebook","fa-brands fa-instagram","fa-solid fa-sitemap"]
let div1 = document.getElementById("div1");
let div1Content="";
for(let i = 0; i<linksFooter.length; i++){
  div1Content+= `<a href="${linksFooter[i]}"><i class="${linksIcons[i]} icon"></i></a>`
}
div1.innerHTML = div1Content;

let div2 = document.getElementById("div2");
let div2Content = `<h3 id="footerTitle">&copyUP CONSTRUCTION</h3>
                    <a id= "document" href="dokumentacija.pdf">Dokumentacija</a>`
div2.innerHTML = div2Content;

let div3 = document.getElementById("div3");
let div3Content = "";
for(let i in links){
  div3Content+="<li class='nav-items'><a href=" + links[i] + ">"+ linksName[i] + "</a></li>";
}
div3.innerHTML = div3Content;

$(window).scroll(function(){
  let top = $(this)[0].scrollY;
  if(top>300){
    $("#backToTop").show();
  }else{
    $("#backToTop").hide();
  }
})

$("#backToTop").click(function(){
  $("html").animate({
    scrollTop: 0
  }, 0)
})