function distanceFromHqInBlocks(block) {
    if (block >= 42) {
        return block-42;
    }
    else{
        return 42-block;
    }
}

function distanceFromHqInFeet(block) {
    return distanceFromHqInBlocks(block)*264;
}

function distanceTravelledInFeet(start,destination) {
    if (destination >= start){
        return (destination-start)*264;
    }
    else {
        return (start-destination)*264;
    }
}

function calculatesFarePrice(start, destination) {
    let distance=distanceTravelledInFeet(start,destination);
    let fare;
    if (distance<400) {
        fare = 0;
        return fare;
    }

    else if (distance >= 400 && distance < 2000) {
        fare = (distance-400)*0.02;
        return fare;
    }

    else if (distance >= 2000 && distance <= 2500) {
        fare = 25;
        return fare;
    }

    else {
        fare='cannot travel that far';
        return fare;
    }
}

