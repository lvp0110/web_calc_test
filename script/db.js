let floorBtn = document.getElementById('floor');
let ceilingBtn = document.getElementById('ceiling');
let frameBtn= document.getElementById('frame');
let partitionBtn = document.getElementById('partition');
let formBtnConstr = document.querySelector('.form');
let textChoosse = document.querySelector('.constr_choose');
let textConstr = document.querySelector('.constr_text');
let formListBtnConstr = document.querySelector('.form_constr_list_btn');
let constrTypesLadel = document.querySelector('.constr_types_ladel');
let constrTypesLadelF = document.getElementById('F');
let constrTypesLadelC = document.getElementById('C');
let constrTypesLadelL = document.getElementById('L');
let constrTypesLadelW = document.getElementById('W');

let stopBtn = 0;
let constrTypes = document.querySelector('.constr_types');
let buttonCostrType = document.querySelector('button_cstr_type');

function prinButton (data,select) {
       let typeButton = data.map((el)=>`<button type="button" class="constr_list" value="${el.id}">${el.title}</button>`).join('');
       select.innerHTML = typeButton;
   }
function filtrData (data,param){
          return data.filter((el)=>el.id_type == param);
      }
function hideBtns(arrElements){
   arrElements.forEach((element) => element.style.display = 'none'); 
}

floorBtn.onclick = function(){
   floorParam.style.display = 'block';
   insulationButton.disabled = stopBtn === 0;
   textConstr.style.display = 'none';
   textChoosse.style.display = 'flex';
   formBtnConstr.style.display = 'none';
   floorBtn.style.display = 'none';
   constrTypesLadelF.style.display = 'block';
   ceilingBtn.style.display = 'none';
   frameBtn.style.display = 'none';
   partitionBtn.style.display = 'none';
   createConstrBtns(this);
   let constrListByType = document.querySelectorAll('.constr_list');
   console.log(constrListByType);
   constrListByType.forEach(btn=>{
      // Вешаем событие клик
      btn.addEventListener('click', function(e) {
         
        console.log('Button clicked' + e.target.classList);
      })
    })
}

let frameParam = document.getElementById('frame_const_param');
let floorParam = document.getElementById('floor_const_param');
let ceilingParam = document.getElementById('ceiling_const_param');

ceilingBtn.onclick = function(){
   ceilingParam.style.display = 'block';
   insulationButton.disabled = stopBtn === 0;
   ceilingBtn.style.display = 'none';
   formBtnConstr.style.display = 'none';
   textConstr.style.display = 'none';
   constrTypesLadelC.style.display = 'block';
   textChoosse.style.display = 'block';
   floorBtn.style.display = 'none';
   frameBtn.style.display = 'none';
   partitionBtn.style.display = 'none';
   createConstrBtns(this);
}
frameBtn.onclick = function(){
   frameParam.style.display = 'block';
   insulationButton.disabled = stopBtn === 0;
   frameBtn.style.display = 'none';
   textConstr.style.display = 'none';
   textChoosse.style.display = 'block';
   floorBtn.style.display = 'none';
   floorBtn.style.display = 'none';
   textConstr.style.display = 'none';
   formBtnConstr.style.display = 'none';
   constrTypesLadelL.style.display = 'block';

   ceilingBtn.style.display = 'none';
   partitionBtn.style.display = 'none';
   createConstrBtns(this);
}
partitionBtn.onclick = function(){
   insulationButton.disabled = stopBtn === 0;
   partitionBtn.style.display = 'none';
   textConstr.style.display = 'none';
   textChoosse.style.display = 'block';
   formBtnConstr.style.display = 'none';
   constrTypesLadelW.style.display = 'block';
   floorBtn.style.display = 'none';
   ceilingBtn.style.display = 'none';
   frameBtn.style.display = 'none';
   createConstrBtns(this);
}

function createConstrBtns(constrBtn){
   switch(constrBtn.id){
      case 'floor': prinButton(filtrData(Constructions,'F'),formListBtnConstr);break;
      case 'ceiling': prinButton(filtrData(Constructions,'C'),formListBtnConstr);break;
      case 'frame': prinButton(filtrData(Constructions,'L'),formListBtnConstr);break;
      case 'partition': prinButton(filtrData(Constructions,'W'),formListBtnConstr);break;
   }
};







