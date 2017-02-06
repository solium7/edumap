var dopUnits = [];

function processXLSX(worksheet) { // пока только для доп.образования
    var item;
    for (var i = 5; i < 98; i++) {
        if (worksheet['C' + i]) {
            item = Object.create(null);
            for (var key in XLSMarkUp.sheet1) {
                if (key != 'ooRatings') {
                    if (worksheet[XLSMarkUp.sheet1[key] + i]) item[key] = worksheet[XLSMarkUp.sheet1[key] + i].v;
                } else {
                    item[key] = [];
                    for (var j = 0; j < 6; j++) {
                        item[key][j] = {};
                        item[key][j].title = XLSMarkUp.sheet1[key][j].title;
                        item[key][j].points = [];
                        for (var k = 0; k < 11; k++) {
                            if (worksheet[XLSMarkUp.sheet1[key][j].points[k] + i]) {
                                item[key][j].points[k] = worksheet[XLSMarkUp.sheet1[key][j].points[k] + i].v;
                            } else {
                                item[key][j].points[k] = '0';
                            }
                        }
                    }
                }
            }
            dopUnits.push(item);
            // Результат этих циклов - структура, повторяющая XLSMarkUp.sheet1 в файле constants.js,
            // где вместо колонок Excel-файла ('A', 'B', "CF и прочих) будут вставлены прочитанные значения.
        }
    }


    // Координаты новых организаций из списка старых

    $.getJSON("jsons/units.json", function (data) {
        ooUnits = data;
        dopUnits.forEach(item => {
            var dopUnitCode = item.ooCode.slice(0, -3);
            var coordsUnitIdx = ooUnits.findIndex(unitItem => {
                return unitItem.ooCode == dopUnitCode;
            });

            if (coordsUnitIdx == -1) alert('-1');
            item.ooLatt = ooUnits[coordsUnitIdx].ooLatt;
            item.ooLong = ooUnits[coordsUnitIdx].ooLong;
        });
        console.dir(dopUnits);
        // document.getElementById("result-json").innerHTML = JSON.stringify(dopUnits);

        console.log(JSON.stringify(dopUnits));
    });


}

function readFile(e) {
    var file = e.target.files[0];
    if (!file) {
        return;
    }
    var reader = new FileReader();
    reader.onload = function (e) {
        var data = e.target.result;
        var workbook = XLSX.read(data, {type: 'binary'});
        var first_sheet_name = workbook.SheetNames[1];
        var worksheet = workbook.Sheets[first_sheet_name];
        processXLSX(worksheet);
    };
    reader.readAsBinaryString(file);
}

document.getElementById('file-input').addEventListener('change', readFile, false);

var XLSMarkUp = {
    sheet1: { // additional units
        moCode: 'B',
        ooCode: 'C',
        ooType: 'D',
        ooName: 'E',
        ooFullName: 'F',
        ooBoss: 'G',
        ooAddress: 'H',
        ooPhone: 'J',
        ooMail: 'K',
        ooSite: 'N',
        ooFoundationYear: 'O',
        ooTech: 'P',
        ooScience: 'Q',
        ooSport: 'R',
        ooArt: 'S',
        ooTourism: 'T',
        ooPatriot: 'U',
        ooSocial: 'V',
        ooOther: 'W',
        ooCulture: 'X',
        ooModPrograms: 'AD',
        ooRatings: [
            {
                title: 'Оценка степени открытости и доступности информации об организации по баллам (%)',
                points: ["AE", "AF", "AG", "AH", "AI", "AJ", "AK", "AL", "AM", "AN", "AO"]
            },
            {
                title: "Оценка организации условий для обучения детей с ОВЗ и инвалидов (%)",
                points: ["AP", "AQ", "AR", "AS", "AT", "AU", "AV", "AW", "AX", "AY", "AZ"]
            },
            {
                title: "Оценка компетентности работников организации (%)",
                points: ["BA", "BB", "BC", "BD", "BE", "BF", "BG", "BH", "BI", "BJ", "BK"]
            },
            {
                title: "Оценка материально-технического обеспечения организации (%)",
                points: ["BL", "BM", "BN", "BO", "BP", "BQ", "BR", "BS", "BT", "BU", "BV"]
            },
            {
                title: "Оценка качества предоставляемых образовательных услуг (%)",
                points: ["BW", "BX", "BY", "BZ", "CA", "CB", "CC", "CD", "CE", "CF", "CG"]
            },
            {
                title: "Оценка возможности развития творческих способностей и интересов обучающихся (%)",
                points: ["CH", "CI", "CJ", "CK", "CL", "CM", "CN", "CO", "CP", "CQ", "CR"]
            }]
    },
    sheet0: { // all units
        "ooMOCode": "A",
        "ooCode": "B",
        "ooType": "C",
        "ooName": "D",
        "ooFullName": "E",
        "ooDirector": "F",
        "ooAddress": "G",
        "ooResrvdString1": "H",
        "ooPhone": "I",
        "ooEMail": "J",
        "ooResrvdString2": "K",
        "ooWWW": "L",
        "ooYearOfFndtn": "M",
        "ooHistory": "N",
        "ooKurs1Count": "P",
        "ooKurs2Count": "R",
        "ooKurs3Count": "T",
        "ooKurs4Count": "V",
        "ooKurs5Count": "X",
        "ooWorkersCount": "Y",
        "ooCEOCount": "Z",
        "ooEducatorsCount": "AA",
        "ooResrvdString3": "AB",
        "ooTeachersCount": "AC",
        "ooTechMasters": "AD",
        "ooEducatorsHelpers": "AE",
        "ooServantsCount": "AF",
        "ooForeignTeachers": "AG",
        "ooArea": "AH",
        "ooResrvdString4": "AI",
        "ooMainBiuldings": "AJ",
        "ooDormitories": "AK",
        "ooOtherBiuldings": "AL",
        "ooLandArea": "AM",
        "ooLaboratoriesVacancy": "AN",
        "ooTechAreaVacancy": "AO",
        "ooResrvdString5": "AP"
    }
};