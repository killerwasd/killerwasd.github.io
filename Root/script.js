const 悄悄话 = document.querySelector(".悄悄话");
const 漂流 = document.querySelector(".漂流")
const 藏着 = document.querySelector(".藏")

function 藏() {
    if(悄悄话.value === ""){
        return;
    }
    const 增加 = document.createElement("藏着");
    增加.textContent = 悄悄话.value;
    藏着.append(增加);
    悄悄话.value = ""
}

漂流.addEventListener("click",藏)

悄悄话.addEventListener("keyup",function(e){
    if (e.key === "Enter"){
        藏()
    }
});

