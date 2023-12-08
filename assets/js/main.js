//dynamic menu start
let meni = document.querySelector("#meni");
let links = ["index.html","#text-banners","#aboutUsDiv","#gallery","#ourTeamDiv","#formDiv","author.html"];
let linksName = ["Početna","Usluge","O nama","Galerija","Naš Tim","Kontakt","Autor"];
let listTag = ""
for(let i in links){
    listTag+="<li class='nav-item'><a href=" + links[i] + ">"+ linksName[i] + "</a></li>";
}
meni.innerHTML = listTag;

//dynamic menu end


//dynmaic banners start
let banners = document.getElementById("rowBn");
let imageLocation = ["fa-solid fa-trowel-bricks","fa-solid fa-hammer","fa-solid fa-plug"];
let bannerPasus = ["Izgradnja objekata","Rekonstrukcija","Elektro radovi"];
let bannerItem = "";

for(let i = 0; i<imageLocation.length; i++){
  bannerItem+=`

  <div class="items col-sm-3 col-10 " id="item${i}">
                <i class ="${imageLocation[i]} iconsStyle"></i>
                <p class="bannerPasus">${bannerPasus[i]}</p>
                <h5 class="readMore${i} mt-2">Pročitaj više</h5>
                </div>`  
                        
}

banners.innerHTML = bannerItem;

let bannerClass = document.getElementsByClassName("items")
let moreTxt0 = document.createElement("p");
moreTxt0.setAttribute("class","moreTxt0");
moreTxt0.textContent = "Izgradnja novih objekata iz temelja, sa vašim ili našim planom"

let moreTxt1 = document.createElement("p");
moreTxt1.setAttribute("class","moreTxt1");
moreTxt1.textContent = "Rekonstrukcija postojećih objekata, od starog pravimo novo"

let moreTxt2 = document.createElement("p");
moreTxt2.setAttribute("class","moreTxt2");
moreTxt2.textContent = "Sve vrste elektro radova, unutar objekta ili van objekta";

bannerClass[0].appendChild(moreTxt0);
bannerClass[1].appendChild(moreTxt1);
bannerClass[2].appendChild(moreTxt2);

//dynamic banners end


//dynamic works start
let abt = document.getElementById("abt1");
let abtContent1 = `
        <h3>Naša vizija</h3>
        <p>Naša vizija je stvoriti prostor u kojem se vaše ideje pretletaju u stletnost. 
        Bez obzira da li gradimo vašu porodičnu kuću, stambeni kompleks ili poslovnu zgradu, 
        trudimo se da premašimo očekivanja i stvorimo prostor koji odražava vaš stil i funkcionalne potrebe.</p>
`

abt.innerHTML = abtContent1;
let abt2 = document.getElementById("abt2");
let abtContent2 = `
<img src="assets/img/slika4.jpg" alt="slika4" id="slika4"/>
`;
abt2.innerHTML = abtContent2;
document.getElementById("slika4").classList.add("slika4Style");
abt2.addEventListener("mouseover",function(){
  abt2.classList.add("abt2")
})

let abt1Title = document.createElement("h5");
abt1Title.setAttribute("id","abt1Title");
abt1Title.textContent = "Vrste radova koje izvodimo su:"
abt.appendChild(abt1Title);
let btn1 = document.createElement("button");
btn1.textContent = "Pročitaj više"
btn1.setAttribute("value","Pročitaj više");
btn1.setAttribute("id","dugme1");
btn1.classList.add("dugme1")
abt.appendChild(btn1);

btn1.addEventListener("mouseover",function(){
   btn1.style.backgroundColor = "red";
})
btn1.addEventListener("mouseout",function(){
  btn1.style.backgroundColor = "orangered";
})

let vrsteUsluga = ["Individualne kuće prilagođene vašim potrebama.","Kvalitetni materijali i savremeni dizajn.",
"Planiranje i izvođenje stambenih projekata visokog standarda.","Inovativna rešenja za zajedničke prostorije."
,"Funkcionalni poslovni prostori prilagođeni vašem biznisu.","Energetski efikasne i održive konstrukcije."]
let abt1List = document.createElement("ul");
abt1List.setAttribute("class","listWork");
for(let i = 0; i<vrsteUsluga.length; i++){
  let abt1ListContent = document.createElement("li");
  abt1ListContent.setAttribute("class","listStyle mt-2");
  abt1ListContent.innerHTML = vrsteUsluga[i];
  abt1List.appendChild(abt1ListContent);
}
abt.appendChild(abt1List);

//dynamic works end

//dynamic about-us start

let aboutUsContent = document.getElementById("aboutUsContent");
let aboutTitle = document.createElement("h2");
aboutTitle.setAttribute("id","aboutTitle")
aboutTitle.textContent = "Ko smo mi";
aboutUsContent.appendChild(aboutTitle);
let aboutUsText = document.createElement("p")
aboutUsText.setAttribute("id","aboutText");
aboutUsText.textContent = "UP Construction je dinamična i inovativna građevinska kompanija koja se ponosi dugogodišnjim iskustvom u izgradnji kvalitetnih kuća i zgrada. Naš tim stručnjaka čini mrežu posvećenih inženjera, arhitekata, majstora i stručnjaka za planiranje, čija je misija stvoriti prostor koji nadmašuje očekivanja i odražava visoke standarde kvaliteta."
aboutUsContent.appendChild(aboutUsText);

let aboutUsImage = document.getElementById("aboutUsImage");
let aboutUsImg = document.createElement("img");
aboutUsImg.setAttribute("src","assets/img/aboutUsImage.jpg");
aboutUsImg.setAttribute("alt","aboutUs");
aboutUsImg.setAttribute("id","aboutImg");
aboutUsImage.appendChild(aboutUsImg);
aboutUsImage.addEventListener("mouseover",function(){
  aboutUsImage.classList.add("aboutImage");
})
aboutUsImage.addEventListener("mouseout",function(){
  aboutUsImage.classList.remove("aboutImage");
})

//dynamic about-us end

//dynamic gallery start

let galleryImg = ["assets/img/gallery1.jpg","assets/img/gallery2.jpg","assets/img/gallery3.jpg","assets/img/gallery4.jpg",
"assets/img/gallery5.jpg","assets/img/gallery6.jpg"]
let galleryImgAlt = ["house1","house2","house3","house4","house5","house6"]
let galleryP = ["Zgrada1","Zgrada2","Zgrada3","Zgrada4","Zgrada5","Zgrada6"]
let projectName = ["Projekat1","Projekat2","Projekat3","Projekat4","Projekat5","Projekat6"]
let projectContent = [];


let project1 = "Cena: 225.000,00$";
let project2 = "Cena: 375.000,00$";
let project3 = "Cena: 465.000,00$";
let project4 = "Cena: 405.000,00$";
let project5 = "Cena: 285.000,00$";
let project6 = "Cena: 525.000,00$";

projectContent.push(project1);
projectContent.push(project2);
projectContent.push(project3);
projectContent.push(project4);
projectContent.push(project5);
projectContent.push(project6);



let galleryDiv = document.getElementById("galleryDiv");
let galleryContent = "";
for(let i = 0; i<galleryImg.length; i++){
  galleryContent+=`<div class="itemGallery col-md-4 col-sm-5 col-10">
  <img src ="${galleryImg[i]}" alt="${galleryImgAlt[i]}" class="galleryImg" />
  <div class="opacity">
  <h3 class="galleryTitle">${projectName[i]}</h3>
  <p class="galleryPasus">${projectContent[i]}</p>
  </div>
  </div>`
}

galleryDiv.innerHTML = galleryContent;


//dynamic our team start
let ourTeamBox = ["assets/img/worker1.jpg","assets/img/architect.jpg","assets/img/electrical.jpg"]
let altImage = ["worker1","worker2","worker3"];
let teamContent = [];
let teamPasus0Content = "Zidarski majstor, poput Ivana Zidara, predstavlja neizostavan stub svakog gradilišta. Njegova veština u oblikovanju sirovih materijala poput cigle, betona i kamena transformira pustoš gradilišta u čvrste i funkcionalne konstrukcije."
let teamPasus1Content = "Arhitekti, poput Aleksa Arhitekta, nisu samo tvorci građevinskih planova; oni su umetnici koji oblikuju naš sviet svojom vizijom i kreativnošću. Aleksa nije samo stručnjak u postavljanju zidova, on je arhitekta čije ideje postaju stletnost."
let teamPasus2Content = "Električar, kao što je Marko Električar, nije samo radnik sa žicama i prekidačima; on je inženjer struje čija veština osvetljava put napred. Marko nije samo majstor za postavljanje žica; on je stručnjak čija strast prema električnim sistemima čini moderni svet mogućim."
teamContent.push(teamPasus0Content);
teamContent.push(teamPasus1Content);
teamContent.push(teamPasus2Content);
let teamTitle=[];
let teamTitle0 = "Ivan Zidar";
let teamTitle1 = "Aleksa Arhitekta";
let teamTitle2 = "Marko Električar";
teamTitle.push(teamTitle0);
teamTitle.push(teamTitle1);
teamTitle.push(teamTitle2);

let ourTeam = document.getElementById("ourTeam");
let ourTeamContent = "";
for(let i = 0; i<ourTeamBox.length; i++){
  ourTeamContent+= `<div class="items-team col-sm-3 col-10">
  <img src ="${ourTeamBox[i]}" alt="${altImage[i]}" class="ourTeamImage" />
  <h4 class="teamTitle${i}">${teamTitle[i]}<i class="fa-solid fa-arrow-left"></i></h4>
  <p3 class="teamPasus" id="teamPasus${i}">${teamContent[i]}</p>
  </div>
  `
}
ourTeam.innerHTML = ourTeamContent;


//dynamic our team end

//RegEx start

let imeInput = document.getElementById("fName");
let prezimeInput = document.getElementById("lName");
let emailInput = document.getElementById("email");
let sendButton = document.getElementById("send");
let radioButton = document.getElementsByName("radioBtn");
let cekirano = false;
let radioTekst = document.getElementById("radio");
var imeCheckboxGrupe = 'opcija';
let checkboxButtons = document.getElementsByName("opcija");
let porukaElement = document.getElementById('porukaCheck');
function provera(){

  const ime = imeInput.value.trim();
  // Regularni izraz za proveru ispravnosti imena (slova, razmaci, i druge dozvoljene znakove)
  const regexIme = /^[A-ZŠĐŽĆČ][a-zšđžćč]+$/;

  if (!regexIme.test(ime)) {
    document.getElementById("fName").classList.add("red")
    document.getElementById("imeSpan").innerHTML ='Pogrešno ime. Molimo unesite ispravno ime. Ime mora početi velikim slovom';
  } else {
    document.getElementById("fName").classList.remove("red");
    document.getElementById("fName").classList.add("green")
    document.getElementById("imeSpan").innerHTML = ""

}



  const prezime = prezimeInput.value.trim();
  // Regularni izraz za proveru ispravnosti prezimena (slova, razmaci, i druge dozvoljene znakove)
  const regexPrezime = /^[A-ZŠĐŽĆČ][a-zšđžćč]+(\s[A-ZŠĐŽĆČ][a-zšđžćč]+)*$/;

  if (!regexPrezime.test(prezime)) {
    document.getElementById("lName").classList.add("red")
    document.getElementById("prezimeSpan").innerHTML ='Pogrešno prezime. Molimo unesite ispravno prezime. Prezime mora početi velikim slovom';
  } else {
    document.getElementById("lName").classList.remove("red");
    document.getElementById("lName").classList.add("green")
    document.getElementById("prezimeSpan").innerHTML = ""


 for (var i = 0; i < radioButton.length; i++) {
  if (radioButton[i].checked) {
      cekirano = true;
      break;
  }
}

if (cekirano) {
  // Ako je bilo koji radio button čekiran, obriši poruku
  radioTekst.textContent ="";
} else {
  // Ako nijedan radio button nije čekiran, prikaži poruku
  radioTekst.textContent = 'Molimo vas da izaberete jednu od opcija.';
}
}
var brojCekiranih = 0;

            for (var i = 0; i < checkboxButtons.length; i++) {
                if (checkboxButtons[i].checked) {
                    brojCekiranih++;
                }
            }

            if (brojCekiranih === 1) {
                
                porukaElement.textContent = '';
            } else {
                
                porukaElement.textContent = 'Molimo vas da čekirate tačno jednu opciju.';
            }


  const email = emailInput.value.trim();
  // Regularni izraz za proveru ispravnosti  (slova, razmaci, i druge dozvoljene znakove)
  let regexEmail = /^[a-z]+([\.]?[a-z]*[0-9]*)*@[a-z]+([\.]?[a-z]+)+(\.[a-z]{2,4})+$/;

  if (!regexEmail.test(email)) {
    document.getElementById("email").classList.add("red")
    document.getElementById("emailSpan").innerHTML ='Pogrešan mail. Molimo unesite ispravan email. email mora početi malim slovom';
  } else {
    document.getElementById("email").classList.remove("red");
    document.getElementById("email").classList.add("green");
    document.getElementById("emailSpan").innerHTML = ""
  
}
}

//RegEx end

//footer start
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


//footer end


//jQuery

$(document).ready(function(){
  $(".readMore0").click(function(){
    $(".moreTxt0").toggle("fast");
    if($(".readMore0").text()=="Pročitaj više"){
        $(".readMore0").html("Pročitaj manje")
    }
    else{
        $(".readMore0").html("Pročitaj više")
    }

  })

  $(".readMore1").click(function(){
    $(".moreTxt1").toggle("fast");
    if($(".readMore1").text()=="Pročitaj više"){
        $(".readMore1").html("Pročitaj manje")
    }
    else{
        $(".readMore1").html("Pročitaj više")
    }

  })

  $(".readMore2").click(function(){
    $(".moreTxt2").toggle("fast");
    if($(".readMore2").text()=="Pročitaj više"){
        $(".readMore2").html("Pročitaj manje")
    }
    else{
        $(".readMore2").html("Pročitaj više")
    }
  })
  $(".dugme1").click(function(){
    $(".listWork").toggle("slow");
    if($(".dugme1").text()=="Pročitaj više"){
      $(".dugme1").html("Pročitaj manje")
    }
    else{
      $(".dugme1").html("Pročitaj više")
  }
  })

  $(".teamTitle0").click(function(){
    $("#teamPasus0").toggle(600)

  })
  $(".teamTitle1").click(function(){
    $("#teamPasus1").toggle(600);
  })
  $(".teamTitle2").click(function(){
    $("#teamPasus2").toggle(600);
  })

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

  })



