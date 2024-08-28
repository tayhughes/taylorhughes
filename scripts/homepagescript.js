const smallNavToggle = document.querySelector('#navbar-toggler');
// const theSmallHeaderElement = document.querySelector('#small-screen-header nav');
const theSmallNavElement = document.querySelector('#small-nav-bar');


const toggleCollapser = () => {
    const lengthOfArr = theSmallNavElement.getAttribute("class");
    // if uncollapsed, let's collapse it by removing class="uncollapsed-block"
    // and adding class="collapsed-block"
    if(lengthOfArr.includes("uncollapsed-block")){ // note "un..." evaluated first
        theSmallNavElement.classList.remove("uncollapsed-block");
        theSmallNavElement.classList.add("collapsed-block");
    }
    else if(lengthOfArr.includes("collapsed-block")){
        theSmallNavElement.classList.remove("collapsed-block");
        theSmallNavElement.classList.add("uncollapsed-block");
    }
    else{
        console.log("error");
    }
};

smallNavToggle.addEventListener('click', toggleCollapser);

const getItemList = document.querySelectorAll('.sm-nav-list-item a');

for(let i = 0; i < getItemList.length; i++){
    getItemList[i].addEventListener('click', toggleCollapser);
}