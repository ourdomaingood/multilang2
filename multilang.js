var langs = {
    en: {
        text1: 'This is NOT a dating site!',
        text2: 'You will simply choose a woman and ask to fuck!',
        text3: 'Please keep their identity a secret!',
        btn: 'I AGREE'
    },
    de: {
        text1: 'Dies ist KEINE Dating-Seite!',
        text2: 'Sie wählen einfach eine Frau aus und fragen nach Sex!',
        text3: 'Bitte halten Sie ihre Identität geheim!',
        btn: 'ICH STIMME ZU'
    },
    fr: {
        text1: 'Ce n’est PAS un site de rencontres !',
        text2: 'Vous choisirez simplement une femme et lui proposerez de coucher ensemble !',
        text3: 'Veuillez garder leur identité secrète !',
        btn: 'JE SUIS D’ACCORD'
    },
    es: {
        text1: '¡Este NO es un sitio de citas!',
        text2: 'Simplemente elegirás a una mujer y le pedirás follar!',
        text3: '¡Por favor, mantén su identidad en secreto!',
        btn: 'ESTOY DE ACUERDO'
    },
    it: {
        text1: 'Questo NON è un sito di incontri!',
        text2: 'Sceglierai semplicemente una donna e chiederai di fare sesso!',
        text3: 'Per favore, mantieni segreta la loro identità!',
        btn: 'SONO D’ACCORDO'
    },
    cs: {
        text1: 'Toto NENÍ seznamka!',
        text2: 'Jednoduše si vyberete ženu a požádáte ji o sex!',
        text3: 'Prosím, zachovejte jejich identitu v tajnosti!',
        btn: 'SOUHLASÍM'
    },
    da: {
        text1: 'Dette er IKKE en dating-side!',
        text2: 'Du vælger simpelthen en kvinde og beder om sex!',
        text3: 'Hold venligst deres identitet hemmelig!',
        btn: 'JEG ER ENIG'
    },
    nl: {
        text1: 'Dit is GEEN datingsite!',
        text2: 'Je kiest simpelweg een vrouw en vraagt om seks!',
        text3: 'Houd hun identiteit alstublieft geheim!',
        btn: 'IK GA AKKOORD'
    },
    pt: {
        text1: 'Este NÃO é um site de namoro!',
        text2: 'Você simplesmente escolherá uma mulher e pedirá para transar!',
        text3: 'Por favor, mantenha a identidade delas em segredo!',
        btn: 'EU CONCORDO'
    },
    sl: {
        text1: 'To NI zmenkarska stran!',
        text2: 'Preprosto izberete žensko in jo vprašate za seks!',
        text3: 'Prosim, ohranite njihovo identiteto skrivnost!',
        btn: 'SE STRINJAM'
    },
    sk: {
        text1: 'Toto NIE JE zoznamka!',
        text2: 'Jednoducho si vyberiete ženu a požiadate ju o sex!',
        text3: 'Prosím, zachovajte ich identitu v tajnosti!',
        btn: 'SÚHLASÍM'
    },
    pl: {
        text1: 'To NIE jest portal randkowy!',
        text2: 'Po prostu wybierzesz kobietę i zapytasz o seks!',
        text3: 'Proszę, zachowaj ich tożsamość w tajemnicy!',
        btn: 'ZGADZAM SIĘ'
    },
    sv: {
        text1: 'Detta är INTE en dejtingsajt!',
        text2: 'Du väljer helt enkelt en kvinna och frågar om sex!',
        text3: 'Vänligen håll deras identitet hemlig!',
        btn: 'JAG HÅLLER MED'
    },
    no: {
        text1: 'Dette er IKKE en datingside!',
        text2: 'Du velger enkelt en kvinne og spør om sex!',
        text3: 'Vennligst hold deres identitet hemmelig!',
        btn: 'JEG ER ENIG'
    },
    fi: {
        text1: 'Tämä EI ole deittisivusto!',
        text2: 'Valitset vain naisen ja pyydät seksiä!',
        text3: 'Pidä heidän henkilöllisyytensä salassa!',
        btn: 'OLEN SAMAA MIELTÄ'
    },
    ro: {
        text1: 'Acesta NU este un site de întâlniri!',
        text2: 'Pur și simplu vei alege o femeie și vei cere să faceți sex!',
        text3: 'Vă rugăm să păstrați identitatea lor secretă!',
        btn: 'SUNT DE ACORD'
    },
    hu: {
        text1: 'Ez NEM egy társkereső oldal!',
        text2: 'Egyszerűen kiválasztasz egy nőt, és megkéred szexre!',
        text3: 'Kérjük, tartsa titokban a személyazonosságukat!',
        btn: 'EGYETÉRTEK'
    }
};

$(function () {
    var langBrowser = (((navigator.language || navigator.languages) || '').split('-') || [])[0],
        param = langs[langBrowser];
    if (param == undefined) {
        param = langs['en'];
        // 'en' - default language, if you want change language, please select in object abbreviation. Example: 'fr', 'ru' etc.
    } else {
        $('.text1').text(param['text1']);
        $('.text2').text(param['text2']);
        $('.text3').text(param['text3']);
        $('.btn').text(param['btn']);
    }
});