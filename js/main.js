// 1 - Titanic survivors based on pclass
    var width = 590,
        height = 400;
    var svg1 = dimple.newSvg("#chart1", width, height);
    d3.csv("data/pclass.csv", function(data){
        var chart = new dimple.chart(svg1, data);
        chart.addCategoryAxis("x", "Pclass");
        chart.addMeasureAxis("y", "Survived_Rate");
        chart.addSeries("Survived", dimple.plot.bar);
        svg1.append("text")
         .attr("x", chart._xPixels() + chart._widthPixels() / 2)
         .attr("y", chart._yPixels() - 20)
         .style("text-anchor", "middle")
         .style("font-weight", "bold")
         .text("Survivors v.s. Pclass");
    chart.draw();
    });

    // 2 - Titanic survivors based on sex 
    var width = 590,
        height = 400;
    var svg2 = dimple.newSvg("#chart2", width, height);
    d3.csv("data/sex.csv", function(data){
        var chart = new dimple.chart(svg2, data);
        chart.addCategoryAxis("x", "Sex");
        chart.addMeasureAxis("y", "Survived_Rate");
        chart.addSeries("Survived", dimple.plot.bar);
        svg2.append("text")
         .attr("x", chart._xPixels() + chart._widthPixels() / 2)
         .attr("y", chart._yPixels() - 20)
         .style("text-anchor", "middle")
         .style("font-weight", "bold")
         .text("Survivors v.s. Sex");
      chart.draw();
    });
	
    // 3 - Titanic survivors based on age
    var width = 590,
        height = 400;
    var svg3 = dimple.newSvg("#chart3", width, height);
    d3.csv("data/age.csv", function(data){
        var chart = new dimple.chart(svg3, data);
        x = chart.addCategoryAxis("x", "Age");
        chart.addMeasureAxis("y", "Survived_Rate");
        chart.addSeries("Survived",dimple.plot.bar);
        svg3.append("text")
         .attr("x", chart._xPixels() + chart._widthPixels() / 2)
         .attr("y", chart._yPixels() - 20)
         .style("text-anchor", "middle")
         .style("font-weight", "bold")
         .text("Survivors v.s. Age");
    chart.draw();
    }); 

