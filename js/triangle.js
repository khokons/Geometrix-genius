function calculateTriangleArea(){
    const triangleBase =document.getElementById('base').value;
    const triangleBaseB =parseFloat(triangleBase);

    const triangleHeight = document.getElementById('height').value;
    const triangleH =parseFloat(triangleHeight);

    const triangleArea = 0.5*triangleBaseB*triangleH;

    document.getElementById('areaTriangle').innerText=triangleArea;

}

function calculatReactangleArea(){
    const reactangleLength = document.getElementById('Reactangle_length').value;
    const reactangL = parseFloat(reactangleLength);


    const Reactangle_width =document.getElementById('Reactangle_width').value;
    const reactangW = parseFloat(Reactangle_width);

    if(isNaN(reactangL) || isNaN(reactangW)){
        alert("Please provide a number");
        return;
    }

    const area = reactangL*reactangW;

    document.getElementById('Area_Reactangle').innerText=area;


}



// Common Function use kore ===================

function parallelogramArea(){
    const pBase = getInputValue('parallelogram_base');
    const pHeight= getInputValue('parallelogram_height');
 
    const area = pBase*pHeight;
    setElementtByText('parallelogram_area',area) 
 }

// Ellips Area==============
 function EllipseAreaCalculate(){
    const A = getInputValue('Ellipse_A');
    const B =getInputValue('Ellipse_B');
    const area = 3.14*A*B;
    setElementtByText('Ellipse_Area',area) 

 }


//  ommon Function_start--------------------
function getInputValue(inputId){
    const inputfield = document.getElementById(inputId);
    const inputString = inputfield.value;
    const inputValue = parseFloat(inputString);
    return inputValue;
}

function setElementtByText(elementId,area){
    const element =document.getElementById(elementId);
    element.innerText=area;
 }


 //  ommon Function_End========--------------------







