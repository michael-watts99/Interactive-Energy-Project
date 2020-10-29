//loading the event listeners when the page loads
window.onload = gifs = function()
{
    coal_gif_checker();
    solar_gif_checker();
}
//fucntion to check for the mouse hovering over the coal image area
coal_gif_checker = function()
{
    //setting variable for the coal_img area
    //[0] specifies the first instace of that class name found
    var coal_area = document.getElementsByClassName('coal_img') [0];
    //event listener waits for the mouse to move over the coal_area variable, then runs the function to change the src of that element
    coal_area.addEventListener("mousemove", function(e)
    {
        console.log(coal_area);
        coal_gif_on(e, coal_area);
    });
    //event listener waits for the mouse to leave the coal_area variable area and then reverts the src of the element.
    coal_area.addEventListener("mouseleave", function(e)
    {
        console.log(coal_area);
        coal_gif_off(e, coal_area);
    });
}

solar_gif_checker = function()
{
    //setting variable for the coal_img area
    //[0] specifies the first instace of that class name found
    var solar_area = document.getElementsByClassName('solar_img') [0];
    
    
    //event listener waits for the mouse to move over the coal_area variable, then runs the function to change the src of that element
    solar_area.addEventListener("mousemove", function(ev)
    {
        solar_gif_on(ev, solar_area);
    });
    //event listener waits for the mouse to leave the coal_area variable area and then reverts the src of the element.
    solar_area.addEventListener("mouseleave", function(ev)
    {
        
        solar_gif_off(ev, solar_area);
    });
}

//function to switch the gif on by changing the img src. 
coal_gif_on = function(e, coal_area)
{
    coal_area.src = "images/coal_gif.gif";  
}
//function to switch the gif off by changing the img src. 
coal_gif_off = function(e, coal_area)
{
    coal_area.src = "images/coal_link.png";
}
    
//function to switch the gif on by changing the img src. 
solar_gif_on = function(ev, solar_area)
{
    solar_area.src = "images/solar_gif.gif";  
}
//function to switch the gif off by changing the img src. 
solar_gif_off = function(ev, solar_area)
{
    solar_area.src = "images/solar_link.png";
}