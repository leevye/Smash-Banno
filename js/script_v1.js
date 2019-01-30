const g1Button = document.querySelector('.game1-button');
    const cp = document.querySelector('.cp');
    let displayCp = false;
    let bans = 1;
    g1Button.addEventListener('click', displayUI);
    const g2Button = document.querySelector('.game2-button');
    g2Button.addEventListener('click', displayUI);
    const stages = document.querySelectorAll('.stage-button');
    stages.forEach(stage => stage.addEventListener('click', () => banStage(stage, bans, displayCp)));

    function displayUI() {
        if (this.classList.contains('game1-button')) {
            cp.style.display = 'none';
            g1Button.classList.add('selected-button');
            g2Button.classList.remove('selected-button');
            clearVars(false);
        } else {
            cp.style.display = 'flex';
            g2Button.classList.add('selected-button');
            g1Button.classList.remove('selected-button');
            clearVars(true);

        }
    }

    function clearVars(displayAll) {
        displayAll === true ? displayCp = true : displayCp = false;
        clearBanClasses();
        bans = 1;
    }

    function clearBanClasses() {
        stages.forEach(stage => stage.classList.remove('banned', 'banned-red', 'banned-blue'));
    }

    function banStage(el) {
        if (el.classList.contains('banned-red')) {
            bans--;
            el.classList.remove('banned-red');
        } else if (el.classList.contains('banned-blue')) {
            bans--;
            el.classList.remove('banned-blue');
        } else if (!displayCp && bans < 5) {
            // ban stage & rotate ban color
            // (bans % 2 === 0) ? //red : //blue
            if (bans === 1 || bans === 4) {
                el.classList.add('banned-red')
            } else {
                el.classList.add('banned-blue');
            }
            // updateBans(bans);
            bans++;
        } else if (displayCp) {
            el.classList.add('banned-red');
            // ban stage red
            bans++;
        }
    }