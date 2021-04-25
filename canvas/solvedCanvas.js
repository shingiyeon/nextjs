async function drawSolvedCanvas(solvedData) {
	const solvedCanvas = new Canvas("solvedCanvas", 300, 150);
	solvedCanvas.setBorderRadius("5px");
	//solvedCanvas.setBackgroundColor("#17CE3A");

	solvedCanvas.putImage(15, 13, 40, 50, solvedData.imgUrl)

	solvedCanvas.putText(65, 22, solvedData.user_id);
	solvedCanvas.putLine(65, 33, 200, 33, "#ffffff", 1);
	solvedCanvas.putText(65, 42, "Level: " + solvedData.level, "13px verdana, sans-serif")
	solvedCanvas.putText(65, 55, solvedLv[solvedData.level], "bold 15px verdana, sans-serif", "5px")
  
	solvedCanvas.putText(223, 24, "AC Rating", "12px verdana, sans-serif", "#eeeeee", "5px");
	solvedCanvas.putText(getXOfSolvedRating(solvedData.rating), 48, solvedData.rating, "bold 28px Arial ", solvedColorTable[solvedData.level], "5px", "white");

	solvedCanvas.setBgParticleGradient(150, 300);
	solvedCanvas.putParticles(8, solvedBgColor);
	
	const requiredRating = await getRequiredSolvedRating(solvedData);
	const mx = await getSolvedRatingLength(280 - 15, requiredRating, solvedRating[solvedData.level], solvedRating[solvedData.level+1]);
	
	solvedCanvas.putText(210, 75, String(solvedData.rating) + " / " + String(solvedRating[solvedData.level+1]), "12px verdana, sans-serif")
	solvedCanvas.putLoadingBar(15, 80, mx + 15, 90, 280, 90, "#1d2671", "#0a0328", "#ffffff");

	solvedCanvas.putText(10, 103, "\uf518", "900 13px 'Font Awesome 5 Free'");
	solvedCanvas.putText(30, 103, "solved: " + solvedData.solved, "13px verdana, sans-serif");


	solvedCanvas.putText(10, 120, "\uf091", "900 13px 'Font Awesome 5 Free'");
	solvedCanvas.putText(30, 120, "rank: " + solvedData.rank, "13px verdana, sans-serif");
	
	solvedCanvas.putText(112, 120, '\uf0c3', "900 13px 'Font Awesome 5 Free'");
	solvedCanvas.putText(130, 120, "exp: " + solvedData.exp, "13px verdana, sans-serif");

	
	solvedCanvas.putText(10, 137, '\uf19d', "900 13px 'Font Awesome 5 Free'");
	solvedCanvas.putText(30, 137, "class: " + solvedData.class, "13px verdana, sans-serif");
	
	solvedCanvas.putText(110, 137, '\uf772', "900 13px 'Font Awesome 5 Free'");
	solvedCanvas.putText(130, 137, "vote: " + solvedData.vote_count, "14px verdana, sans-serif");

	solvedCanvas.putText(240, 140, "solved.ac", "10px verdana, sans-serif")
	solvedCanvas.render();
}

function getRequiredSolvedRating(solvedData) {
	let nextRating;
	let lv = solvedData.level;
	if (lv === 31) return 0;
	else nextRating = solvedRating[lv + 1];

	return nextRating - solvedData.rating;
}

function getSolvedRatingLength(length, requiredRating, curLvRating, nextLvRating) {
	if(nextLvRating === curLvRating) return length;
	return length - (requiredRating / (nextLvRating - curLvRating) ) * length;
}

function getXOfSolvedRating(currentRating) {
	let digit_num = digit(currentRating);
	if(digit_num == 1) {
		return 245;
	}
	else if(digit_num == 2) {
		return 238;
	}
	else if(digit_num == 3) {
		return 230;
	}
	return 222;
}