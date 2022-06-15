let d = new Date();

d.setHours(0);
d.setMinutes(0);
d.setSeconds(0);
d.setMilliseconds(0);

let h;
let m;
let s;
let ml;

let timer;
let ativo = false;

let cont = 1;

document.querySelector('.checkbox').setAttribute('disabled', true);

function run(){

    h = d.getHours();
    m = d.getMinutes();
    s = d.getSeconds();
    ml = d.getMilliseconds() / 10;

    document.querySelector('.timer-display').innerHTML = 
    ('0'+h).slice(-2)+":"+('0'+m).slice(-2)+":"+('0'+s).slice(-2)+":"+('0'+ml).slice(-2);

    d.setMilliseconds(d.getMilliseconds() + 10);
};

function start(){
    if (ativo == false){
        timer = setInterval(run, 10);
        ativo = true;
        document.querySelector('.buttonText').innerHTML = "Pause";
        document.querySelector('.buttonImg').setAttribute('src', 'assets/images/pause-icon.png');
    } else {
        clearInterval(timer);
        ativo = false;
        document.querySelector('.buttonText').innerHTML = "Resume";
        document.querySelector('.buttonImg').setAttribute('src', 'assets/images/play-icon.png');
    }
    
};

function timeCheck(){
    document.querySelector('.checkbox').setAttribute('disabled', false);
    let checks = document.querySelector('.checkbox').value;
    document.querySelector('.checkbox').innerHTML = 
    checks + cont + ". " + ('0'+h).slice(-2)+":"+('0'+m).slice(-2)+":"+('0'+s).slice(-2)+":"+('0'+ml).slice(-2)+'\n';
    document.querySelector('.checkbox').setAttribute('disabled', true);
    let downScreen = document.querySelector('.checkbox').scrollHeight;
    document.querySelector('.checkbox').scrollTo(0,downScreen);
    cont++;
};

function reset(){

    clearInterval(timer);
    ativo = false;
    d.setHours(0);
    d.setMinutes(0);
    d.setSeconds(0);
    d.setMilliseconds(0);

    document.querySelector('.timer-display').innerHTML = "00:00:00:00";
    document.querySelector('.buttonText').innerHTML = "Start";
    document.querySelector('.buttonImg').setAttribute('src', 'assets/images/play-icon.png');

};

function clean(){
    document.querySelector('.checkbox').innerHTML = "";
    cont = 1;
}