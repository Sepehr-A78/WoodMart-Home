function eu(){
  document.getElementById("eu-set").style.display="flex";
  document.getElementById("ca-set").style.display="none";
  document.getElementById("us-set").style.display="none";
  document.getElementById("ja-set").style.display="none";
  let a=document.getElementsByClassName("to-eu")
  let aArray=[...a]
  aArray.forEach((elem=>{
    elem.style.display="inline-block"
  }))
  let b=document.getElementsByClassName("to-us-dollar")
  let bArray=[...b]
  bArray.forEach((elem=>{
    elem.style.display="none"
  }))
  let c=document.getElementsByClassName("to-ca-dollar")
  let cArray=[...c]
  cArray.forEach((elem=>{
    elem.style.display="none"
  }))
  let d=document.getElementsByClassName("ja-currency")
  let dArray=[...d]
  dArray.forEach((elem=>{
    elem.style.display="none"
  }))
}

function ca(){
  document.getElementById("eu-set").style.display="none";
  document.getElementById("ca-set").style.display="flex";
  document.getElementById("us-set").style.display="none";
  document.getElementById("ja-set").style.display="none";
  let a=document.getElementsByClassName("to-eu")
  let aArray=[...a]
  aArray.forEach((elem=>{
    elem.style.display="none"
  }))
  let b=document.getElementsByClassName("to-us-dollar")
  let bArray=[...b]
  bArray.forEach((elem=>{
    elem.style.display="none"
  }))
  let c=document.getElementsByClassName("to-ca-dollar")
  let cArray=[...c]
  cArray.forEach((elem=>{
    elem.style.display="inline-block"
  }))
  let d=document.getElementsByClassName("ja-currency")
  let dArray=[...d]
  dArray.forEach((elem=>{
    elem.style.display="none"
  }))
}

function us(){
  document.getElementById("eu-set").style.display="none";
  document.getElementById("ca-set").style.display="none";
  document.getElementById("us-set").style.display="flex";
  document.getElementById("ja-set").style.display="none";
  let a=document.getElementsByClassName("to-eu")
  let aArray=[...a]
  aArray.forEach((elem=>{
    elem.style.display="none"
  }))
  let b=document.getElementsByClassName("to-us-dollar")
  let bArray=[...b]
  bArray.forEach((elem=>{
    elem.style.display="inline-block"
  }))
  let c=document.getElementsByClassName("to-ca-dollar")
  let cArray=[...c]
  cArray.forEach((elem=>{
    elem.style.display="none"
  }))
  let d=document.getElementsByClassName("ja-currency")
  let dArray=[...d]
  dArray.forEach((elem=>{
    elem.style.display="none"
  }))

}

function ja(){
  document.getElementById("eu-set").style.display="none";
  document.getElementById("ca-set").style.display="none";
  document.getElementById("us-set").style.display="none";
  document.getElementById("ja-set").style.display="flex";
  let a=document.getElementsByClassName("to-eu")
  let aArray=[...a]
  aArray.forEach((elem=>{
    elem.style.display="none"
  }))
  let b=document.getElementsByClassName("to-us-dollar")
  let bArray=[...b]
  bArray.forEach((elem=>{
    elem.style.display="none"
  }))
  let c=document.getElementsByClassName("to-ca-dollar")
  let cArray=[...c]
  cArray.forEach((elem=>{
    elem.style.display="none"
  }))
  let d=document.getElementsByClassName("ja-currency")
  let dArray=[...d]
  dArray.forEach((elem=>{
    elem.style.display="inline-block"
  }))
}


