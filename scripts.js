// Write your JavaScript code here.
// Remember to pay attention to page loading!

window.addEventListener('load', () => {

    let takeOff = document.getElementById('takeoff');
    let land = document.getElementById('landing');
    let abortMission = document.getElementById('missionAbort');

    let flightStatus = document.getElementById('flightStatus');
    let shuttleBg = document.getElementById('shuttleBackground');
    let spaceShuttleHeight = document.getElementById('spaceShuttleHeight');

    let rocket = document.getElementById('rocket');
    
    takeOff.addEventListener('click', () => {
        let response = confirm('Confirm that the shuttle is ready for takeoff.');

        if (response) {

            shuttleHeight = 0;
            let fly = 0;
            let int = setInterval(flight, 100);
        
            function flight() {
                fly += 10;
                shuttleHeight += 10000;
                if (fly > 170) {
                    clearInterval(int);
                }
                rocket.style.bottom = `${fly}px`;
                // console.log(shuttleHeight);
                spaceShuttleHeight.innerText = `${shuttleHeight}`; 
            }

            flightStatus.innerText = 'Shuttle in flight.';
            flightStatus.style.color = 'cornflowerblue';
            shuttleBg.style.backgroundColor = 'CornFlowerBlue';
        }
    });

    land.addEventListener('click', () => {
        alert('The shuttle is landing. Landing gear engaged.');

        let fly = 180;
        let shuttleHeight = 18000;
        let int = setInterval(flight, 100);
    
        function flight() {
            fly -= 10;
            shuttleHeight -= 1000;
            if (fly < 10) {
                clearInterval(int);
            }
            rocket.style.bottom = `${fly}px`;
            // console.log(shuttleHeight);
            spaceShuttleHeight.innerText = `${shuttleHeight}`; 

            if (shuttleHeight === 0) {
                flightStatus.style.color = 'green';
                shuttleBg.style.backgroundColor = 'green';
            }
        }
        flightStatus.innerText = 'The shuttle has landed.';
    });

    abortMission.addEventListener('click', () => {
        let responseAbort = confirm('Confirm that you want to abort the mission.');

        if (responseAbort) {
            rocket.style.bottom = '0px';
            flightStatus.innerText = 'Mission aborted.';
            flightStatus.style.color = 'red';
            shuttleBg.style.backgroundColor = 'green';
            shuttleHeight = 0;   
            spaceShuttleHeight.innerText = `${shuttleHeight}`;    
        }
    });

    let up = document.getElementById('up');
    let down = document.getElementById('down');
    let left = document.getElementById('left');
    let right = document.getElementById('right');

    let moveUpDown = 0;
    // let moveLeftRight = 0;

    let width = shuttleBg.clientWidth;
    // console.log(width);
    rocket.style.left = `${width / 2}px`;
    // rocket.style.left = parseInt(`${width / 2}px`);
    // console.log(parseInt(`${width / 2}px`));

    // rocket.style.left = `114px`;
    let shuttleHeight = 0;

    up.addEventListener('click', () => {
        if (moveUpDown < 195) {
            moveUpDown += 10;
            rocket.style.bottom = `${moveUpDown}px`;
            shuttleHeight += 10000;
            spaceShuttleHeight.innerText = `${shuttleHeight}`; 
            // console.log('up', moveUpDown);
        }
    });

    down.addEventListener('click', () => {
        if (moveUpDown > 0) {
            moveUpDown -= 10;
            rocket.style.bottom = `${moveUpDown}px`;
            shuttleHeight -= 10000;
            spaceShuttleHeight.innerText = `${shuttleHeight}`; 
            // console.log('down', moveUpDown);
        }
    });

    let positionX = parseInt(rocket.style.left, 10);
    // console.log(positionX);

    right.addEventListener('click', () => {
        if (positionX < width - 20) {
            positionX += 5;
            rocket.style.left = `${positionX}px`;
            // console.log('right', positionX);
        }
    });

    left.addEventListener('click', () => {
        if (positionX > 20) {
            positionX -= 5;
            // rocket.style.left = `${positionX}px`;
            rocket.style.left = positionX + 'px';
            // console.log('left', positionX);
        }
    });

});




