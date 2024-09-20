var langs = {
    en: {
        text1: 'This is NOT a dating site!',
        text2: 'You will simply choose a woman and ask to fuck!',
        text3: 'Please keep their identity a secret!',
        btn: 'I AGREE'
    },
    fr: {
        text1: "Ce n'est PAS un site de rencontres !",
        text2: 'You will simply choose a woman and ask to fuck!',
        text3: 'Please keep their identity a secret!',
        btn: "JE SUIS D'ACCORD"
    },
    es: {
        text1: '¡Esto NO es un sitio de citas!',
        text2: 'Simplemente elegirás a una mujer y pedirás follar!',
        text3: '¡Por favor, mantén su identidad en secreto!',
        btn: 'ESTOY DE ACUERDO'
    },
    it: {
        text1: 'Questo NON è un sito di incontri!',
        text2: 'Sceglierai semplicemente una donna e chiederai di scopare!',
        text3: 'Per favore, mantieni segreta la loro identità!',
        btn: "SONO D'ACCORDO"
    },
    de: {
        text1: 'Das ist KEINE Dating-Seite!',
        text2: 'Du wirst einfach eine Frau auswählen und um Sex bitten!',
        text3: 'Bitte halte ihre Identität geheim!',
        btn: 'ICH STIMME ZU'
    },
    cs: {
        text1: 'To NENÍ seznamovací stránka!',
        text2: 'Jednoduše si vybereš ženu a požádáš o sex!',
        text3: 'Prosím, udržuj jejich identitu v tajnosti!',
        btn: 'SOUHLASÍM'
    },
    be: {
        text1: 'Гэта НЕ сайт знаёмстваў!',
        text2: 'Ты проста выбярэш жанчыну і папросіш заняцьця!',
        text3: 'Калі ласка, захоўвайце іх асобу ў сакрэце!',
        btn: 'Я ЗГОДНЫ'
    },
    dn: {
        text1: 'Dette er IKKE en dating-site!',
        text2: 'Du vil bare vælge en kvinde og bede om sex!',
        text3: 'Venligst hold deres identitet hemmelig!',
        btn: 'JEG ENIGER'
    },
    pt: {
        text1: 'Isto NÃO é um site de encontros!',
        text2: 'Você simplesmente escolherá uma mulher e pedirá para transar!',
        text3: 'Por favor, mantenha a identidade deles em segredo!',
        btn: 'EU CONCORDO'
    },
    nl: {
        text1: 'Dit is GEEN datingsite!',
        text2: 'Je kiest gewoon een vrouw uit en vraagt om seks!',
        text3: 'Houd hun identiteit alsjeblieft geheim!',
        btn: 'IK GA AKKOORD'
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