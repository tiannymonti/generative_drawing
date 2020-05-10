// let step = 2.5;


function drawChart() {
	const drawingCanvas = document.getElementById('canvas2');
	const rc = rough.canvas(drawingCanvas);

	const colors = ["#ff1919", "#f4f4f4", "#03AC13"];
	let Xseed = 30;
	let Yseed = 30;
	for (let j = 0; j < 9; j++) {
		for (let i = 0; i < 8; i++) {
			if((9-(i+1))>=j+1){
				rc.polygon([[(Xseed + 70*i), (Yseed + 60*j)], [70*(i + 1), (Yseed + 60*j)], [70*(i + 1) - 20, (Yseed*2 + 60*j)]],  {
					bowing: 8, stroke: colors[0], strokeWidth: 3, 
					fill: colors[0], fillStyle: 'dots'
				});	
			} else {
				rc.polygon([[(Xseed + 70*i), (Yseed + 60*j)], [70*(i + 1), (Yseed + 60*j)], [70*(i + 1) - 20, (Yseed*2 + 60*j)]],  {
					bowing: 8, stroke: colors[1], strokeWidth: 3, 
					fill: colors[1], fillStyle: 'dots'
				});	
			}
			
			rc.arc(70*(i + 1) - 20, (Yseed + 60*j), 15, 15, Math.PI, Math.PI * 2, true, {
				stroke: colors[2], strokeWidth: 2, roughness: 2.8,
				fill: colors[2], fillStyle: 'hachure'
			});
		}		
	}
	
}


window.onload = drawChart;
