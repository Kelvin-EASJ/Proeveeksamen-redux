let json = [
    {
        "id": 100,
        "bygning": "Femøvej",
        "lokale": "001",
        "temperatur": "23.9",
        "luftfugtighed": 37,
        "co2": 466,
        "luftkvalitet": 3.07,
        "lysniveau": 346,
        "lysfarve": 2986,
        "lydniveau": 36
    },
    {
        "id": 101,
        "bygning": "Femøvej",
        "lokale": "002",
        "temperatur": "12.9",
        "luftfugtighed": 27,
        "co2": 422,
        "luftkvalitet": 2.07,
        "lysniveau": 396,
        "lysfarve": 3111,
        "lydniveau": 35
    },
    {
        "id": 102,
        "bygning": "Femøvej",
        "lokale": "101",
        "temperatur": "23.5",
        "luftfugtighed": 33,
        "co2": 566,
        "luftkvalitet": 3.24,
        "lysniveau": 312,
        "lysfarve": 2989,
        "lydniveau": 32
    },
    {
        "id": 103,
        "bygning": "Maglemølle",
        "lokale": "101",
        "temperatur": "34.9",
        "luftfugtighed": 37,
        "co2": 399,
        "luftkvalitet": 3.17,
        "lysniveau": 446,
        "lysfarve": 2532,
        "lydniveau": 82
    },
    {
        "id": 104,
        "bygning": "Maglemølle",
        "lokale": "102",
        "temperatur": "23.2",
        "luftfugtighed": 32,
        "co2": 189,
        "luftkvalitet": 3.12,
        "lysniveau": 336,
        "lysfarve": 2678,
        "lydniveau": 44
    }
]


function insertData() {
    document.getElementById("id1").innerHTML = json[0].id;
    document.getElementById("byg1").innerHTML = json[0].bygning;
    document.getElementById("lok1").innerHTML = json[0].lokale;
    document.getElementById("temp1").innerHTML = json[0].temperatur;
    document.getElementById("fugt1").innerHTML = json[0].luftfugtighed;
    document.getElementById("kul1").innerHTML = json[0].co2;
    document.getElementById("kval1").innerHTML = json[0].luftkvalitet;
    document.getElementById("lysniv1").innerHTML = json[0].lysniveau;
    document.getElementById("lysfarv1").innerHTML = json[0].lysfarve;
    document.getElementById("lydniv1").innerHTML = json[0].lydniveau;

    document.getElementById("id2").innerHTML = json[1].id;
    document.getElementById("byg2").innerHTML = json[1].bygning;
    document.getElementById("lok2").innerHTML = json[1].lokale;
    document.getElementById("temp2").innerHTML = json[1].temperatur;
    document.getElementById("fugt2").innerHTML = json[1].luftfugtighed;
    document.getElementById("kul2").innerHTML = json[1].co2;
    document.getElementById("kval2").innerHTML = json[1].luftkvalitet;
    document.getElementById("lysniv2").innerHTML = json[1].lysniveau;
    document.getElementById("lysfarv2").innerHTML = json[1].lysfarve;
    document.getElementById("lydniv2").innerHTML = json[1].lydniveau;

    document.getElementById("id3").innerHTML = json[2].id;
    document.getElementById("byg3").innerHTML = json[2].bygning;
    document.getElementById("lok3").innerHTML = json[2].lokale;
    document.getElementById("temp3").innerHTML = json[2].temperatur;
    document.getElementById("fugt3").innerHTML = json[2].luftfugtighed;
    document.getElementById("kul3").innerHTML = json[2].co2;
    document.getElementById("kval3").innerHTML = json[2].luftkvalitet;
    document.getElementById("lysniv3").innerHTML = json[2].lysniveau;
    document.getElementById("lysfarv3").innerHTML = json[2].lysfarve;
    document.getElementById("lydniv3").innerHTML = json[2].lydniveau;

    document.getElementById("id4").innerHTML = json[3].id;
    document.getElementById("byg4").innerHTML = json[3].bygning;
    document.getElementById("lok4").innerHTML = json[3].lokale;
    document.getElementById("temp4").innerHTML = json[3].temperatur;
    document.getElementById("fugt4").innerHTML = json[3].luftfugtighed;
    document.getElementById("kul4").innerHTML = json[3].co2;
    document.getElementById("kval4").innerHTML = json[3].luftkvalitet;
    document.getElementById("lysniv4").innerHTML = json[3].lysniveau;
    document.getElementById("lysfarv4").innerHTML = json[3].lysfarve;
    document.getElementById("lydniv4").innerHTML = json[3].lydniveau;

    document.getElementById("id5").innerHTML = json[4].id;
    document.getElementById("byg5").innerHTML = json[4].bygning;
    document.getElementById("lok5").innerHTML = json[4].lokale;
    document.getElementById("temp5").innerHTML = json[4].temperatur;
    document.getElementById("fugt5").innerHTML = json[4].luftfugtighed;
    document.getElementById("kul5").innerHTML = json[4].co2;
    document.getElementById("kval5").innerHTML = json[4].luftkvalitet;
    document.getElementById("lysniv5").innerHTML = json[4].lysniveau;
    document.getElementById("lysfarv5").innerHTML = json[4].lysfarve;
    document.getElementById("lydniv5").innerHTML = json[4].lydniveau;
}

insertData();
