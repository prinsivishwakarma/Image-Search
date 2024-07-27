const accesskey="N5oh1L9VN-rYMHqvyvR9Ps5W9dRs9in1kRQvWAnFZAM";

const searchform=document.getElementById("search-form");
const searchbox=document.getElementById("search-box");
const searchResult=document.getElementById("search-result");
const seemorebtn=document.getElementById("see-more-btn");

let keywords='';
let page=1;

async function searchImages(){
  keywords=searchbox.value;
  const url=`https://api.unsplash.com/search/photos?page=${page}&query=${keywords}&client_id=${accesskey}&per_page=12`;
  const response=await fetch(url);
  const data=await response.json();

  if(page===1){
    searchResult.innerHTML="";
  }
  
  const results=data.results;

  results.map((result)=>{
    const image=document.createElement("img");
    image.src=result.urls.small;
    const imagelink=document.createElement("a");
    imagelink.href=result.links.html;
    imagelink.target="_blank";
    imagelink.appendChild(image);
    searchResult.appendChild(imagelink);
  })
  seemorebtn.style.display="block";

}
searchform.addEventListener("submit",(e)=>{
  e.preventDefault();
  page=1;
  searchImages();
});

seemorebtn.addEventListener("click",()=>{
  page++;
  searchImages();
})
