
$('button').on('click',function(event){
    event.preventDefault();
    let roll=$('#roll');
    let name=$('#name');
    let marks=$('#marks');
    let items=$('#div2');

    let rollVal = roll.val();
    let nameVal = name.val();
    let marksVal = marks.val();

    if(rollVal=="" || nameVal=="" || marksVal==""){
        alert("Please fill all the fields");
    }
    else{
        let item='<div class="items">Roll No- '+'<span class="highlight">'+rollVal+'</span>'+' , '+'<span class="highlight">'+nameVal+'</span>'+' has scored '+'<span class="highlight">'+marksVal+'</span>'+' marks'+'</div>';
        items.append(item);
        roll.val("");
        name.val("");
        marks.val("");
    }
});