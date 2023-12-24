var instagram = "https://www.instagram.com/its_da_foz/";
var github = "https://github.com/yassinfouzai";

whois = [
    "<br>",
    "No one right now..",
    "<br>",
];

social = [
    "<br>",
    'instagram  <a herf="' + instagram + '" target="_blank">instagram/Yassine Fouzai' + '</a>',
    'github  <a herf="' + github + '" target="_blank">github/Yassine Fouzai' + '</a>',
    "<br>",
];


help = [
    "<br>",
    'whois     Who am I?',
    'video     View videos',
    'projects  View projects',
    'social    Display social networks',
    'secret    Find the password',
    'clear     Clear terminal',
    "<br>",

];


projects =[
    "<br>",
    "Nothing right now..",
    "<br>",
];


function command(cmd){
    switch(cmd.toLowerCase()){
        case 'help':
            help;
            break;
        case 'whois':
            whois;
            break;
        case 'video':
            video;
            break;
        case 'projects':
            projects;
            break;
        case 'social':
            social;
            break;
        case 'secret':
            secret;
            break;
        case 'clear' :
            //clear
            break;
        default:
            //error
            break;
    }
};
function enterKey(e){
    return 0;
};