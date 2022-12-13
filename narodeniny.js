function vyrataj() {

    let now = moment().format("YYYY-MM-DD").split("-");

    let birthdayDate = document.getElementById("birthday").value.split("-");

    let nextBirthday = now[0] + "-" + birthdayDate[1] + "-" + birthdayDate[2];

    let roky = now[0] - birthdayDate[0];

    let doba = parseInt(birthdayDate[1]);

    let obdobie;

    let slovo2;

    let slovo;

    switch (doba) {
        case 1:
        case 2:
        case 12:
            obdobie = "v Zime.";
            break;
        case 3:
        case 4:
        case 5:
            obdobie = "na Jar.";
            break;
        case 6:
        case 7:
        case 8:
            obdobie = "v Lete.";
            break;
        case 9:
        case 10:
        case 11:
            obdobie = "na Jeseň.";
    }

    switch (roky) {
        case 1:
            slovo2 = " rok.";
            break;
        case 2:
        case 3:
        case 4:
            slovo2 = " roky."
            break;
        default:
            slovo2 = " rokov."
    }

    if (moment().format("YYYY-MM-DD") != nextBirthday) {

        if (moment(nextBirthday).valueOf() < moment().valueOf()) {
            nextBirthday = parseInt(now[0]) + 1 + "-" + birthdayDate[1] + "-" + birthdayDate[2];
            roky = now[0] - birthdayDate[0] + 1;
        }

        let daysToParty = moment(nextBirthday).valueOf() - moment().valueOf();
        let days = parseInt(daysToParty / (24 * 60 * 60 * 1000)) + 1;

        switch (roky) {
            case 1:
                slovo2 = " rok.";
                break;
            case 2:
            case 3:
            case 4:
                slovo2 = " roky."
                break;
            default:
                slovo2 = " rokov."
        }

        switch (days) {
            case 1:
                slovo = " deň.";
                break;
            case 2:
            case 3:
            case 4:
                slovo = " dni."
                break;
            default:
                slovo = " dní."
        }
        document.getElementById("obraz").innerText = "Narodeniny máš o  " + days + slovo + "\n\nBudeš mať " + roky + slovo2 + "\n\nBol si narodený " + obdobie;
    } else {
        document.getElementById("obraz").innerText = "HAPPY BIRTHDAY TO YOU :)\n\nMáš " + roky + slovo2 + "\n\nBol si narodený " + obdobie;
    }
}
