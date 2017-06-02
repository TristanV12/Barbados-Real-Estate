var color1 = "#6F2800";
var color2 = "#DC6604";
var color3 = "#8E8053";
var color4 = "#E89F2C";

function make_t_rex(top, right, selection){
	var triangle;
	var unit = 25
	if(selection == 1 || selection == 0){
		triangle = $('#triangle1');
		triangle.css("top", top.toFixed() + "px");
		triangle.css("right", (right - (2 * unit)).toFixed() + "px");
		triangle.css("border-left", unit.toFixed() + "px solid " + color1);
		triangle.css("border-bottom", unit.toFixed() + "px solid transparent");
		triangle.css("border-top", unit.toFixed() + "px solid transparent");

		triangle = $('#triangle5');
		triangle.css("top", (top + unit).toFixed() + "px");
		triangle.css("right", (right - (3 * unit)).toFixed() + "px");
		triangle.css("border-left", unit.toFixed() + "px solid " + color1);
		triangle.css("border-top", unit.toFixed() + "px solid transparent");
		triangle.css("border-bottom", unit.toFixed() + "px solid transparent");

		triangle = $('#triangle10');
		triangle.css("top", top.toFixed() + "px");
		triangle.css("right", (right - (5 * unit)).toFixed() + "px");
		triangle.css("border-top", unit.toFixed() + "px solid " + color1);
		triangle.css("border-right", unit.toFixed() + "px solid transparent");
		triangle.css("border-left", unit.toFixed() + "px solid transparent");

		triangle = $('#triangle14');
		triangle.css("top", (top + (3 * unit)).toFixed() + "px");
		triangle.css("right", (right - (2 * unit)).toFixed() + "px");
		triangle.css("border-right", unit.toFixed() + "px solid " + color1);
		triangle.css("border-top", unit.toFixed() + "px solid transparent");
		triangle.css("border-bottom", unit.toFixed() + "px solid transparent");
	}

	if(selection == 2 || selection == 0){
		triangle = $('#triangle2');
		triangle.css("top", (top + (2 * unit)).toFixed() + "px");
		triangle.css("right", (right - (2 * unit)).toFixed() + "px");
		triangle.css("border-left", unit.toFixed() + "px solid " + color2);
		triangle.css("border-bottom", unit.toFixed() + "px solid transparent");
		triangle.css("border-top", unit.toFixed() + "px solid transparent");

		triangle = $('#triangle7');
		triangle.css("top", top.toFixed() + "px");
		triangle.css("right", (right - (4 * unit)).toFixed() + "px");
		triangle.css("border-bottom", unit.toFixed() + "px solid " + color2);
		triangle.css("border-left", unit.toFixed() + "px solid transparent");
		triangle.css("border-right", unit.toFixed() + "px solid transparent");

		triangle = $('#triangle9');
		triangle.css("top", (top + unit).toFixed() + "px");
		triangle.css("right", (right - (4 * unit)).toFixed() + "px");
		triangle.css("border-right", unit.toFixed() + "px solid " + color2);
		triangle.css("border-top", unit.toFixed() + "px solid transparent");
		triangle.css("border-bottom", unit.toFixed() + "px solid transparent");

		triangle = $('#triangle15');
		triangle.css("top", (top + (3 * unit)).toFixed() + "px");
		triangle.css("right", (right - (2 * unit)).toFixed() + "px");
		triangle.css("border-left", (2 * unit).toFixed() + "px solid " + color2);
		triangle.css("border-top", (2 * unit).toFixed() + "px solid transparent");
		triangle.css("border-bottom", (2 * unit).toFixed() + "px solid transparent");
	}

	if(selection == 3 || selection == 0){
		triangle = $('#triangle3');
		triangle.css("top", (top + unit).toFixed() + "px");
		triangle.css("right", (right - (2 * unit)).toFixed() + "px");
		triangle.css("border-right", unit.toFixed() + "px solid " + color3);
		triangle.css("border-bottom", unit.toFixed() + "px solid transparent");
		triangle.css("border-top", unit.toFixed() + "px solid transparent");

		triangle = $('#triangle8');
		triangle.css("top", (top + unit).toFixed() + "px");
		triangle.css("right", (right - (4 * unit)).toFixed() + "px");
		triangle.css("border-top", unit.toFixed() + "px solid " + color3);
		triangle.css("border-left", unit.toFixed() + "px solid transparent");
		triangle.css("border-right", unit.toFixed() + "px solid transparent");

		triangle = $('#triangle11');
		triangle.css("top", (top + unit).toFixed() + "px");
		triangle.css("right", (right - (5 * unit)).toFixed() + "px");
		triangle.css("border-left", unit.toFixed() + "px solid " + color3);
		triangle.css("border-top", unit.toFixed() + "px solid transparent");
		triangle.css("border-bottom", unit.toFixed() + "px solid transparent");

		triangle = $('#triangle16');
		triangle.css("top", (top + (3 * unit)).toFixed() + "px");
		triangle.css("right", right.toFixed() + "px");
		triangle.css("border-right", (2 * unit).toFixed() + "px solid " + color3);
		triangle.css("border-top", (2 * unit).toFixed() + "px solid transparent");
		triangle.css("border-bottom", (2 * unit).toFixed() + "px solid transparent");

		triangle = $('#triangle18');
		triangle.css("top", (top + (4 * unit)).toFixed() + "px");
		triangle.css("right", (right - (3 * unit)).toFixed() + "px");
		triangle.css("border-bottom", (unit / 2).toFixed() + "px solid " + color3);
		triangle.css("border-left", "0px solid transparent");
		triangle.css("border-right", unit.toFixed() + "px solid transparent");
	}

	if(selection == 4 || selection == 0){
		triangle = $('#triangle4');
		triangle.css("top", top.toFixed() + "px");
		triangle.css("right", (right - (3 * unit)).toFixed() + "px");
		triangle.css("border-top", unit.toFixed() + "px solid " + color4);
		triangle.css("border-right", unit.toFixed() + "px solid transparent");
		triangle.css("border-left", unit.toFixed() + "px solid transparent");

		triangle = $('#triangle6');
		triangle.css("top", (top + (2 * unit)).toFixed() + "px");
		triangle.css("right", (right - (4 * unit)).toFixed() + "px");
		triangle.css("border-bottom", unit.toFixed() + "px solid " + color4);
		triangle.css("border-left", unit.toFixed() + "px solid transparent");
		triangle.css("border-right", unit.toFixed() + "px solid transparent");

		triangle = $('#triangle12');
		triangle.css("top", (top).toFixed() + "px");
		triangle.css("right", (right - (5 * unit)).toFixed() + "px");
		triangle.css("border-right", unit.toFixed() + "px solid " + color4);
		triangle.css("border-top", unit.toFixed() + "px solid transparent");
		triangle.css("border-bottom", unit.toFixed() + "px solid transparent");

		triangle = $('#triangle13');
		triangle.css("top", (top + (2 * unit)).toFixed() + "px");
		triangle.css("right", (right - unit).toFixed() + "px");
		triangle.css("border-right", unit.toFixed() + "px solid " + color4);
		triangle.css("border-top", unit.toFixed() + "px solid transparent");
		triangle.css("border-bottom", unit.toFixed() + "px solid transparent");

		triangle = $('#triangle17');
		triangle.css("top", (top + (6 * unit)).toFixed() + "px");
		triangle.css("right", (right - (3 * unit)).toFixed() + "px");
		triangle.css("border-bottom", unit.toFixed() + "px solid " + color4);
		triangle.css("border-left", unit.toFixed() + "px solid transparent");
		triangle.css("border-right", (2 * unit).toFixed() + "px solid transparent");
	}
}

function make_snake(top, right, selection){
	var triangle;
	var unit = 25;

	if(selection == 4 || selection == 0){
		triangle = $('#triangle1');
		triangle.css("top", top.toFixed() + "px");
		triangle.css("right", (right - (13 * (unit / 2.0))).toFixed() + "px");
		triangle.css("border-top", (3 * unit).toFixed() + "px solid " + color1);
		triangle.css("border-right", (2 * unit).toFixed() + "px solid transparent");
		triangle.css("border-left", (2 * unit).toFixed() + "px solid transparent");
	}

	if(selection == 1 || selection == 0){
		triangle = $('#triangle2');
		triangle.css("top", (top + unit).toFixed() + "px");
		triangle.css("right", (right - (13 * (unit / 2.0))).toFixed() + "px");
		triangle.css("border-bottom", (2 * unit).toFixed() + "px solid " + color2);
		triangle.css("border-left", unit.toFixed() + "px solid transparent");
		triangle.css("border-right", unit.toFixed() + "px solid transparent");

		triangle = $('#triangle5');
		triangle.css("top", (top + 1 + (3 * unit)).toFixed() + "px");
		triangle.css("right", (right - (11 * (unit / 2.0))).toFixed() + "px");
		triangle.css("border-bottom", unit.toFixed() + "px solid " + color2);
		triangle.css("border-right", unit.toFixed() + "px solid transparent");
		triangle.css("border-left", unit.toFixed() + "px solid transparent");

		triangle = $('#triangle8');
		triangle.css("top", (top + 2 + (4 * unit)).toFixed() + "px");
		triangle.css("right", (right - (19 * (unit / 2.0))).toFixed() + "px");
		triangle.css("border-bottom", (unit * 2).toFixed() + "px solid " + color2);
		triangle.css("border-right", unit.toFixed() + "px solid transparent");
		triangle.css("border-left", (4 * unit).toFixed() + "px solid transparent");

		triangle = $('#triangle11');
		triangle.css("top", (top + 2 + (4 * unit)).toFixed() + "px");
		triangle.css("right", right.toFixed() + "px");
		triangle.css("border-bottom", (unit * 2).toFixed() + "px solid " + color2);
		triangle.css("border-right", (unit / 2).toFixed() + "px solid transparent");
		triangle.css("border-left", (unit / 2).toFixed() + "px solid transparent");
	}

	if(selection == 2 || selection == 0){
		triangle = $('#triangle3');
		triangle.css("top", (top + 1 + (3 * unit)).toFixed() + "px");
		triangle.css("right", (right - (13 * (unit / 2.0))).toFixed() + "px");
		triangle.css("border-top", unit.toFixed() + "px solid " + color3);
		triangle.css("border-left", unit.toFixed() + "px solid transparent");
		triangle.css("border-right", unit.toFixed() + "px solid transparent");

		triangle = $('#triangle7');
		triangle.css("top", (top + 1 + (3 * unit)).toFixed() + "px");
		triangle.css("right", (right - (7 * (unit / 2.0))).toFixed() + "px");
		triangle.css("border-bottom", unit.toFixed() + "px solid " + color3);
		triangle.css("border-right", unit.toFixed() + "px solid transparent");
		triangle.css("border-left", unit.toFixed() + "px solid transparent");

		triangle = $('#triangle10');
		triangle.css("top", (top + 2 + (4 * unit)).toFixed() + "px");
		triangle.css("right", (right - (17 * (unit / 2.0))).toFixed() + "px");
		triangle.css("border-top", (unit * 2).toFixed() + "px solid " + color3);
		triangle.css("border-right", (4 * unit).toFixed() + "px solid transparent");
		triangle.css("border-left", (4 * unit).toFixed() + "px solid transparent");
	}

	if(selection == 3 || selection == 0){
		triangle = $('#triangle4');
		triangle.css("top", (top + 1 + (3 * unit)).toFixed() + "px");
		triangle.css("right", (right - (15 * (unit / 2.0))).toFixed() + "px");
		triangle.css("border-bottom", unit.toFixed() + "px solid " + color4);
		triangle.css("border-right", unit.toFixed() + "px solid transparent");
		triangle.css("border-left", unit.toFixed() + "px solid transparent");

		triangle = $('#triangle6');
		triangle.css("top", (top + 1 + (3 * unit)).toFixed() + "px");
		triangle.css("right", (right - (9 * (unit / 2.0))).toFixed() + "px");
		triangle.css("border-top", unit.toFixed() + "px solid " + color4);
		triangle.css("border-left", unit.toFixed() + "px solid transparent");
		triangle.css("border-right", unit.toFixed() + "px solid transparent");

		triangle = $('#triangle9');
		triangle.css("top", (top + 2 + (4 * unit)).toFixed() + "px");
		triangle.css("right", (right - (9 * (unit / 2.0))).toFixed() + "px");
		triangle.css("border-bottom", (unit * 2).toFixed() + "px solid " + color4);
		triangle.css("border-right", (4 * unit).toFixed() + "px solid transparent");
		triangle.css("border-left", unit.toFixed() + "px solid transparent");
	}
}

function make_wolf(top, right, selection){
	var triangle;
	var unit = 10;

	if(selection == 1 || selection == 0){ // red
		triangle = $('#triangle5');
		triangle.css("top", (top + (4 * unit)).toFixed() + "px");
		triangle.css("right", (right - (2 * unit)).toFixed() + "px");
		triangle.css("border-left", (2 * unit).toFixed() + "px solid " + color1);
		triangle.css("border-top", (2 * unit).toFixed() + "px solid transparent");
		triangle.css("border-bottom", (2 * unit).toFixed() + "px solid transparent");

		triangle = $('#triangle8');
		triangle.css("top", (top + (8 * unit)).toFixed() + "px");
		triangle.css("right", (right - (4 * unit)).toFixed() + "px");
		triangle.css("border-left", (4 * unit).toFixed() + "px solid " + color1);
		triangle.css("border-top", (4 * unit).toFixed() + "px solid transparent");
		triangle.css("border-bottom", (4 * unit).toFixed() + "px solid transparent");
	}

	if(selection == 2 || selection == 0){ // green
		triangle = $('#triangle4');
		triangle.css("top", (top + (2 * unit)).toFixed() + "px");
		triangle.css("right", (right - (2 * unit)).toFixed() + "px");
		triangle.css("border-right", (2 * unit).toFixed() + "px solid " + color2);
		triangle.css("border-top", (2 * unit).toFixed() + "px solid transparent");
		triangle.css("border-bottom", (2 * unit).toFixed() + "px solid transparent");

		triangle = $('#triangle9');
		triangle.css("top", (top + (12 * unit)).toFixed() + "px");
		triangle.css("right", right.toFixed() + "px");
		triangle.css("border-top", (4 * unit).toFixed() + "px solid " + color2);
		triangle.css("border-left", (4 * unit).toFixed() + "px solid transparent");
		triangle.css("border-right", (0 * unit).toFixed() + "px solid transparent");

		triangle = $('#triangle12');
		triangle.css("top", (top + (16 * unit)).toFixed() + "px");
		triangle.css("right", (right - (2 * unit)).toFixed() + "px");
		triangle.css("border-bottom", (2 * unit).toFixed() + "px solid " + color2);
		triangle.css("border-left", (4 * unit).toFixed() + "px solid transparent");
		triangle.css("border-right", (2 * unit).toFixed() + "px solid transparent");
	}

	if(selection == 3 || selection == 0){ // blue
		triangle = $('#triangle1');
		triangle.css("top", top.toFixed() + "px");
		triangle.css("right", (right - (6 * unit)).toFixed() + "px");
		triangle.css("border-bottom", (2 * unit).toFixed() + "px solid " + color3);
		triangle.css("border-right", "0px solid transparent");
		triangle.css("border-left", (4 * unit).toFixed() + "px solid transparent");

		triangle = $('#triangle3');
		triangle.css("top", (top + (2 * unit)).toFixed() + "px");
		triangle.css("right", (right - (2 * unit)).toFixed() + "px");
		triangle.css("border-top", (2 * unit).toFixed() + "px solid " + color3);
		triangle.css("border-right", (2 * unit).toFixed() + "px solid transparent");
		triangle.css("border-left", (2 * unit).toFixed() + "px solid transparent");

		triangle = $('#triangle6');
		triangle.css("top", (top + (4 * unit)).toFixed() + "px");
		triangle.css("right", (right - (4 * unit)).toFixed() + "px");
		triangle.css("border-right", (4 * unit).toFixed() + "px solid " + color3);
		triangle.css("border-top", (4 * unit).toFixed() + "px solid transparent");
		triangle.css("border-bottom", (4 * unit).toFixed() + "px solid transparent");

		triangle = $('#triangle10');
		triangle.css("top", (top + (12 * unit)).toFixed() + "px");
		triangle.css("right", right.toFixed() + "px");
		triangle.css("border-left", (4 * unit).toFixed() + "px solid " + color3);
		triangle.css("border-top", (4 * unit).toFixed() + "px solid transparent");
		triangle.css("border-bottom", (2 * unit).toFixed() + "px solid transparent");
	}

	if(selection == 4 || selection == 0){ // orange
		triangle = $('#triangle2');
		triangle.css("top", (top + (2 * unit)).toFixed() + "px");
		triangle.css("right", (right - (6 * unit)).toFixed() + "px");
		triangle.css("border-top", (4 * unit).toFixed() + "px solid " + color4);
		triangle.css("border-left", "0px solid transparent");
		triangle.css("border-right", (4 * unit).toFixed() + "px solid transparent");

		triangle = $('#triangle7');
		triangle.css("top", (top + (4 * unit)).toFixed() + "px");
		triangle.css("right", right.toFixed() + "px");
		triangle.css("border-right", (4 * unit).toFixed() + "px solid " + color4);
		triangle.css("border-bottom", "0px solid transparent");
		triangle.css("border-top", (8 * unit).toFixed() + "px solid transparent");

		triangle = $('#triangle11');
		triangle.css("top", (top + (12 * unit)).toFixed() + "px");
		triangle.css("right", (right - (4 * unit)).toFixed() + "px");
		triangle.css("border-right", (2 * unit).toFixed() + "px solid " + color4);
		triangle.css("border-bottom", (4 * unit).toFixed() + "px solid transparent");
		triangle.css("border-top", (2 * unit).toFixed() + "px solid transparent");
	}
}

function animation(top, right){
	var triangle;
	var unit = 25;

	triangle = $('#triangle1');
	triangle.css("top", top.toFixed() + "px");
	triangle.css("right", (right - (4 * unit)).toFixed() + "px");
	triangle.css("border-right", (4 * unit).toFixed() + "px solid " + color1);
	triangle.css("border-top", (4 * unit).toFixed() + "px solid transparent");
	triangle.css("border-bottom", (4 * unit).toFixed() + "px solid transparent");

	triangle = $('#triangle2');
	triangle.css("top", top.toFixed() + "px");
	triangle.css("right", right.toFixed() + "px");
	triangle.css("border-left", (4 * unit).toFixed() + "px solid " + color2);
	triangle.css("border-top", (4 * unit).toFixed() + "px solid transparent");
	triangle.css("border-bottom", (4 * unit).toFixed() + "px solid transparent");

	triangle = $('#triangle3');
	triangle.css("top", (top + (4 * unit)).toFixed() + "px");
	triangle.css("right", (right - (4 * unit)).toFixed() + "px");
	triangle.css("border-bottom", (4 * unit).toFixed() + "px solid " + color3);
	triangle.css("border-right", (4 * unit).toFixed() + "px solid transparent");
	triangle.css("border-left", (4 * unit).toFixed() + "px solid transparent");

	triangle = $('#triangle4');
	triangle.css("top", top.toFixed() + "px");
	triangle.css("right", (right - (4 * unit)).toFixed() + "px");
	triangle.css("border-top", (4 * unit).toFixed() + "px solid " + color4);
	triangle.css("border-right", (4 * unit).toFixed() + "px solid transparent");
	triangle.css("border-left", (4 * unit).toFixed() + "px solid transparent");
}