const textarea = document.querySelector("[textarea_tag]");
const sendBtn = document.querySelector("[send_btn]");

const checkbox = document.getElementsByClassName("check_box");
const cut = document.getElementsByClassName("cut");
const edit = document.getElementsByClassName("edit");

const popupToEdit = document.querySelector("[popup_to_edit]");
const changeTextList = document.querySelector("[change_text_list]")
const closeEditBox = document.querySelectorAll("[close_edit_box]");
const changeBtn = document.querySelector("[change_btn]");

const todoListBoxParent = document.querySelector("[todo_list_box]");





sendBtn.addEventListener("click",function(){
    let textVal = textarea.value;

    if(textVal.length === 0) return;
    
    const createHtml = `<div main_list>
    <div>
        <span><input type="checkbox" class="check_box"></span>
        <span class="list">${textVal}</span>
    </div>
    <div>
        <span class="edit">✎</span>
        <span class="cut">✕</span>
    </div>
</div>`;

    todoListBoxParent.insertAdjacentHTML("beforeend", createHtml);
    done();
    cutFun();
    editFun();
    
    local();

});














// Done
function done(){
    for(let key of checkbox){
        key.addEventListener("click",function(){
            let booleanVal = this.checked;
            if(booleanVal === true){
                this.parentElement.nextElementSibling.style.textDecoration = "line-through";
                return;
            }
            this.parentElement.nextElementSibling.style.textDecoration = "";
        });
    }
}
done();



// cut
function cutFun(){
    for(let key of cut){
        key.addEventListener("click",function(){
            todoListBoxParent.removeChild(this.parentElement.parentElement);
            console.clear();
        });
    }
}
cutFun();



// edit
let mainVal;
function editFun(){
    for(let key of edit){
        key.addEventListener("click", editFunInner)
        function editFunInner(){
            let listVal =  this.parentElement.parentElement.firstElementChild.lastElementChild.innerHTML;
            let newListVal = this.parentElement.parentElement.firstElementChild.lastElementChild;
            popupToEdit.style.display = "flex";
            changeTextList.value = listVal;
            mainVal = newListVal;
        }   
    }
}
editFun();



// change List
changeBtn.addEventListener("click",function(){
    if(changeTextList.value.length === 0){
        console.log("NS");
        return;
    }
    mainVal.innerHTML = changeTextList.value
    popupToEdit.style.display = "none";
});



// list Edit box 
for(let key of closeEditBox){
    key.addEventListener("click",function(){
        popupToEdit.style.display = "none";
    });
}
