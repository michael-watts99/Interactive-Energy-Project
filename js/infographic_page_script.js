window.onload = function()
{
    //setting each element to a variable
    var envir_button = document.getElementsByClassName("envir_button") [0];
    var future_button = document.getElementsByClassName("future_button_div") [0];
    var cost_button = document.getElementsByClassName("cost_button_div") [0];
    var envir_info_div = document.getElementsByClassName("envir_information_div") [0];
    var future_info_div = document.getElementsByClassName("future_info_div") [0];
    var cost_info_div = document.getElementsByClassName("cost_info_div") [0];
    var envir_button_img = document.getElementsByClassName("envir_button_img") [0];
    var future_button_img = document.getElementsByClassName("future_button") [0];
    var cost_button_img = document.getElementsByClassName("cost_button") [0];
    //setting the visibility of the environment info
    //if the button is clicked the environment info will be set to visible, while the two others are set to hidden
    envir_button.onclick = function()
    {
        console.log("clicked");
        if(future_info_div.style.display || cost_info_div.style.display != "none")
        {
            future_info_div.style.display = "none";
            cost_info_div.style.display = "none";
        }
        if(envir_info_div.style.display = "none")
        {
            envir_info_div.style.display = "block";
        }
        //sets which button has a backgroud colour indicating that it's selected
        if(future_button_img.src != "images/future_button.png")
        {
            future_button_img.src = "images/future_button.png";
        }
        if(cost_button_img.src != "images/cost_button.png")
        {
            cost_button_img.src = "images/cost_button.png";
        }
        envir_button_img.src = "images/environment_button_selected.png";
        
    }
    //sets the visibility of the future into when the future button is clicked
    //hides the environment and cost info divs when clicked
    future_button.onclick = function()
    {
        if(envir_info_div.style.display || cost_info_div.style.display != "none")
        {
            envir_info_div.style.display = "none";
            cost_info_div.style.display = "none";
        }
        if(future_info_div.style.display = "none")
        {
            future_info_div.style.display = "block";
        }
        //sets which button has a backgroud colour indicating that it's selected
        if(envir_button_img.src != "images/environment_button.png")
        {
            envir_button_img.src = "images/environment_button.png";
        }
        if(cost_button_img.src != "images/cost_button.png")
        {
            cost_button_img.src = "images/cost_button.png";
        }
        future_button_img.src = "images/future_button_selected.png";
        
    }
    
    //sets the visibility of the cost information when the cost button is clicked
    //hides the environment and future info divs when clicked.
    cost_button.onclick = function()
    {
        if(envir_info_div.style.display || future_info_div.style.display != "none")
        {
            envir_info_div.style.display = "none";
            future_info_div.style.display = "none";
        }
        if(cost_info_div.style.display = "none")
        {
            cost_info_div.style.display = "block";
        }
        //sets which button has a backgroud colour indicating that it's selected
        if(envir_button_img.src != "images/environment_button.png")
        {
            envir_button_img.src = "images/environment_button.png";
        }
        if(future_button_img.src != "images/future_button.png")
        {
            future_button_img.src = "images/future_button.png";
        }
        cost_button_img.src = "images/cost_button_selected.png";
    }
}

