window.onload = function(){
    d3.selectAll("p").style("background-color", function(){
        return "hsl("+Math.random()*360+",100%,50%";
    });

    d3.select(".intro").transition().style("color","pink").duration(2000);
}



//hsl(230, 100%, 50%)