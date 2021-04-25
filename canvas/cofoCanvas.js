async function drawCofoCanvas(cofoData) {
    const lv = getCofoLevel(cofoData.rating);
    const maxLv = getCofoLevel(cofoData.maxRating);

    const cofoCanvas = new Canvas("cofoCanvas", 300, 150);
    cofoCanvas.setBorderRadius("5px");

    cofoCanvas.setBgParticleGradient(150, 300);
    cofoCanvas.putParticles(6, cofoBgColor);
    cofoCanvas.putRoundRect(15, 20, 27, 47, 3, cofoColorTable[lv]);
    if(lv !== 9) {
        cofoCanvas.putRoundRect(30, 14, 42, 47, 3, cofoColorTable[lv]);
        cofoCanvas.putRoundRect(45, 23, 57, 47, 3, cofoColorTable[lv]);
    }
    else {
        cofoCanvas.putRoundRect(30, 14, 42, 47, 3, cofoColorTable[lv - 1]);
        cofoCanvas.putRoundRect(45, 23, 57, 47, 3, cofoColorTable[lv - 1]);
    }
    cofoCanvas.putText(65, 22, cofoData.handle, "bold 15px verdana, sans-serif", fontStyle = "white");
	cofoCanvas.putLine(65, 33, 200, 33, "#ffffff", 1);
    cofoCanvas.putText(65, 43, cofoLv[lv], "bold 10px verdana, sans-serif");

    cofoCanvas.putText(224, 15, "CF Rating", "12px verdana, sans-serif", "#eeeeee", "5px");
    if(lv !== 9) {
        cofoCanvas.putText(getXOfCofoRating(cofoData.rating), 35, cofoData.rating, "bold 28px Arial ", cofoColorTable[lv], "5px", "white");
    }
    else {
        cofoCanvas.putText(getXOfCofoRating(cofoData.rating), 35, String(cofoData.rating)[0], "bold 28px Arial", cofoColorTable[lv], "5px", "white");
        cofoCanvas.putText(getXOfCofoRating(cofoData.rating) + 15, 35, String(cofoData.rating).substring(1), "bold 28px Arial", cofoColorTable[lv-1], "5px", "white");
    }

    cofoCanvas.putText(215, 55, "max rating", "8px verdana, sans-serif", "#eeeeee", "5px");
    if(maxLv !== 9) {
        cofoCanvas.putText(265, 55, cofoData.maxRating, "10px bold Arial", cofoColorTable[maxLv], "5px", "white");
    }
    else {
        cofoCanvas.putText(265, 55, String(cofoData.maxRating)[0], "10px bold Arial", cofoColorTable[maxLv], "5px", "white");
        cofoCanvas.putText(270, 55, String(cofoData.maxRating).substring(1), "10px bold Arial", cofoColorTable[maxLv-1], "5px", "white");
    }
	cofoCanvas.putText(210, 70, String(cofoData.rating) + " / " + String(getNextCofoRating(lv)), "12px verdana, sans-serif")
	cofoCanvas.putLoadingBar(15, 75, getCofoRatingLength(getNeededPercentageCofoRating(lv, cofoData.rating), 15, 280),
     85, 280, 85, "#1d2671", "#0a0328", "#ffffff");

    cofoCanvas.render();
}

function getCofoLevel(rating) {
    let lv = -1;
    for(let i in cofoRating) {
        if (rating >= cofoRating[i]) {
            lv += 1;
        }
    }
    return lv;
}

function getNextCofoRating(lv) {
    if(lv === 9) return cofoRating[lv];
    else return cofoRating[lv + 1];
}

function getRequiredCofoRating(lv, currentRating) {
	let nextRating;
	if (lv === 9) return 0;
	else nextRating = cofoRating[lv + 1];
	return nextRating - currentRating;
}

function getNeededPercentageCofoRating(lv, currentRating) {
    let requiredRating = getRequiredCofoRating(lv, currentRating);
    let nextRating = getNextCofoRating(lv);

    if(nextRating === cofoRating[lv]) return 1.00;

    return requiredRating / (nextRating - cofoRating[lv]);
}

function getCofoRatingLength(percentage, sx, ex) {
    return (ex - sx) * percentage + sx;
}


function getXOfCofoRating(currentRating) {
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