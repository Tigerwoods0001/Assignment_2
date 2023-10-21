var vg_1 = "map.json";
vegaEmbed("#map1_Chart", vg_1).then(function(result) {
 }).catch(console.error);
var vg_2 = "map2.json";
vegaEmbed("#map2_chart", vg_2).then(function(result) {
 }).catch(console.error);
var vg_3 = "bar.json";
vegaEmbed("#bar_chart", vg_3).then(function(result) {
}).catch(console.error);
var vg_4 = "types_fish_production.json";
vegaEmbed("#piechart", vg_4).then(function(result) {
 }).catch(console.error);


var vg_5 = "comparison.json";
vegaEmbed("#dot_chart", vg_5).then(function(result) {
}).catch(console.error);