// ---- ---- ---- ---- grab objects from structure

function POwO_docgetel(InName)
{
    return document.getElementById(InName)
}

const rec_1 = POwO_docgetel("rec_1");
const rec_2 = POwO_docgetel("rec_2");
const rec_3 = POwO_docgetel("rec_3");
const rec_4 = POwO_docgetel("rec_4");
const rec_5 = POwO_docgetel("rec_5");
const rec_6 = POwO_docgetel("rec_6");
const rec_7 = POwO_docgetel("rec_7");
const rec_8 = POwO_docgetel("rec_8");

const rec_q = POwO_docgetel("rec_q");
const rec_w = POwO_docgetel("rec_w");
const rec_e = POwO_docgetel("rec_e");
const rec_r = POwO_docgetel("rec_r");
const rec_t = POwO_docgetel("rec_t");
const rec_y = POwO_docgetel("rec_y");
const rec_u = POwO_docgetel("rec_u");
const rec_i = POwO_docgetel("rec_i");

const rec_a = POwO_docgetel("rec_a");
const rec_s = POwO_docgetel("rec_s");
const rec_d = POwO_docgetel("rec_d");
const rec_f = POwO_docgetel("rec_f");
const rec_g = POwO_docgetel("rec_g");
const rec_h = POwO_docgetel("rec_h");
const rec_j = POwO_docgetel("rec_j");
const rec_k = POwO_docgetel("rec_k");

const rec_z = POwO_docgetel("rec_z");
const rec_x = POwO_docgetel("rec_x");
const rec_c = POwO_docgetel("rec_c");
const rec_v = POwO_docgetel("rec_v");
const rec_b = POwO_docgetel("rec_b");
const rec_n = POwO_docgetel("rec_n");
const rec_m = POwO_docgetel("rec_m");
const rec_coma = POwO_docgetel("rec_,");

const field_met_text = POwO_docgetel("field_metronome_text")
const field_met_playPause = POwO_docgetel("field_metronome_playPause")
const field_met_deltaTime = POwO_docgetel("field_metronome_deltaTime") 
const field_met_interval = POwO_docgetel("field_metronome_interval")
const field_met_pos_cur = POwO_docgetel("field_metronome_pos_cur")
const field_met_pos_full = POwO_docgetel("field_metronome_pos_full")


// ---- ---- ---- ---- prepare global objects

let GLOBAL_colorON = "1"
let GLOBAL_colorOFF = "0.5"
let GLOBAL_met_interval = 1000
let GLOBAL_met_deltaTime = 1
let GLOBAL_met_rhythm_text = "x:0,0.25,0.5,0.75"
let GLOBAL_met_rhythm_array = [[0,"x"],[1,"r"],[2,"d"],[3,"r"]]
let GLOBAL_met_pos_cur = 0 //0~1, where this is a bar
let GLOBAL_met_pos_full = 100
let GLOBAL_met_javascriptInterval;


// ---- ---- ---- ---- ON START

const adkt = new (window.AudioContext || window.webkitAudioContext)();
console.log("new audioKontext");

const List_URL =
[
    'cowbell.ogg',  'glass.ogg',    'tamb.ogg',     'triangle.ogg', 'kick.wav', 'kick.wav', 'kick.wav', 'kick.wav',
    'hhat.wav',     'wood1.ogg',    'wood2.ogg',    'hhat.wav',     'kick.wav', 'kick.wav', 'kick.wav', 'kick.wav',
    'clap.wav',     'snare.wav',    'snare.wav',    'clap.wav',     'kick.wav', 'kick.wav', 'kick.wav', 'kick.wav',
    'stone.ogg',    'kick.wav',     'kick.wav',     'stone.ogg',    'kick.wav', 'kick.wav', 'kick.wav', 'kick.wav',
];

const List_AudioBuffers = [];

const List_Keys =
[
    "1","2","3","4","5","6","7","8",
    "q","w","e","r","t","y","u","i",
    "a","s","d","f","g","h","j","k",
    "z","x","c","v","b","n","m",","
];

const List_Recs =
[
    rec_1, rec_2, rec_3, rec_4, rec_5, rec_6, rec_7, rec_8,
    rec_q, rec_w, rec_e, rec_r, rec_t, rec_y, rec_u, rec_i,
    rec_a, rec_s, rec_d, rec_f, rec_g, rec_h, rec_j, rec_k,
    rec_z, rec_x, rec_c, rec_v, rec_b, rec_n, rec_m, rec_coma
];




//---- ---- ---- ---- POwO Functions : Audio

async function POwO_loadFile(InFileName)
{
    //convert a sound file to a audioBuffer, so that the audioContext can play it
    const response = await fetch(InFileName);
    const arrayBuffer = await response.arrayBuffer();
    return await adkt.decodeAudioData(arrayBuffer);
}

async function POwO_loadSounds()
{
    //turn every sound file into an audio Buffer and have them in a list
    for(var i = 0 ; i < List_URL.length ; i++)
    {
        const getSmallAudioBuffer = await POwO_loadFile(List_URL[i]);
        List_AudioBuffers.push( getSmallAudioBuffer );
    }
}

POwO_loadSounds() //will run on START

function POwO_playSound(InSoundIndex)
{
    const bufferNode = adkt.createBufferSource();
    bufferNode.buffer = List_AudioBuffers[InSoundIndex];
    bufferNode.connect(adkt.destination);
    bufferNode.start();
}

function POwO_KeyDown_PlaySound(InComingKey)
{
    for(var i = 0 ; i < List_Keys.length ; i++)
    {
        if (InComingKey === List_Keys[i])
        {
            POwO_playSound(i);
            List_Recs[i].style.opacity = GLOBAL_colorON
            POwO_RandomCircle(100,500 , 500,0,0,500 , 230,255 , 128,230 , 0,64);
        }
    }
}

function POwO_KeyUp(InComingKey)
{
    for(var i = 0 ; i < List_Keys.length ; i++)
    {
        if (InComingKey === List_Keys[i])
        {
            List_Recs[i].style.opacity = GLOBAL_colorOFF
        }
    }
}

function POwO_metronome_config()
{
    GLOBAL_met_interval = Number(field_met_interval.value)
    GLOBAL_met_deltaTime = Number(field_met_deltaTime.value)

    GLOBAL_met_rhythm_text = field_met_text.value
    Temp_Rythym_Pass0 = GLOBAL_met_rhythm_text.split("\n") //turn each line into an element
    GLOBAL_met_rhythm_array = []
    for(let i = 0 ; i < Temp_Rythym_Pass0.length ; i++)
    {
        GLOBAL_met_rhythm_array.push( Temp_Rythym_Pass0[i].split("/") ) //take every element, split it by usng "/"
        GLOBAL_met_rhythm_array[i][0] = Number(GLOBAL_met_rhythm_array[i][0]) //make sure the given time stamp (element 0) is a number, not a string
    }

    GLOBAL_met_pos_cur = 0 //0~1, where this is a bar
    GLOBAL_met_pos_full = Number(field_met_pos_full.value)

    console.log(GLOBAL_met_rhythm_array)
}

function POwO_metronome_playPause()
{
    if (field_met_playPause.innerText === "play")
    {
        POwO_metronome_config()
        GLOBAL_met_pos_cur = 0;
        GLOBAL_met_javascriptInterval = setInterval(() => {

            //rhythmArray = [ timeStamp , timeStamp , timeStamp ]
            //timeStamp = [ timePosition , channelName , channelName , ... ]
            
            let Temp_CurrentTrialIndex = 0; //rewind the timeline to 0
            while( GLOBAL_met_rhythm_array[Temp_CurrentTrialIndex][0] < GLOBAL_met_pos_cur && Temp_CurrentTrialIndex < GLOBAL_met_rhythm_array.length - 1 ) //while it is not pointing at the correct timestamp
            {
                Temp_CurrentTrialIndex++ //try the next timestamp
            }
            //at this point, we should be pointing at the possible playable timestamp
            if (GLOBAL_met_rhythm_array[Temp_CurrentTrialIndex][0] === GLOBAL_met_pos_cur)//yes, this is the time stamp
            {
                let Temp_CurrentTimeStamp = GLOBAL_met_rhythm_array[Temp_CurrentTrialIndex]

                for(let i = 0 ; i < List_Recs.length ; i++)
                {
                    List_Recs[i].style.opacity = GLOBAL_colorOFF //turn off the LED
                }

                for(let i = 1 ; i < Temp_CurrentTimeStamp.length ; i++)//in a timeStamp, the first element is the timePosition, for every sound, play that sound
                {
                    POwO_KeyDown_PlaySound( Temp_CurrentTimeStamp[i] ) //turn on the LED if needed
                }
            }

            //crank time
            GLOBAL_met_pos_cur += GLOBAL_met_deltaTime
            if (GLOBAL_met_pos_cur >= GLOBAL_met_pos_full)
            {
                GLOBAL_met_pos_cur = 0
            }
            field_met_pos_cur.innerText = GLOBAL_met_pos_cur

        }, GLOBAL_met_interval);

        field_met_playPause.innerText = "pause"
    }
    else
    {
        clearInterval( GLOBAL_met_javascriptInterval )
        field_met_playPause.innerText = "play"
        for(let i = 0 ; i < List_Recs.length ; i++)
        {
            List_Recs[i].style.opacity = GLOBAL_colorOFF //turn off the LED
        }
    }
    
}





// ---- ---- ---- ---- POwO Functions : visual

function POwO_RandomCircle
(
    InRadiusMin, InRadiusMax,
    InMarginR , InMarginU, InMarginL, InMarginD,
    InColorRmin, InColorRmax, InColorGmin, InColorGmax, InColorBmin, InColorBmax
)
{
    
    // Create a new circle element
    const circle = document.createElement('div');
    circle.classList.add('circle');

    // Set random size
    const size = Math.random() * (InRadiusMax - InRadiusMin) + InRadiusMin; // Random size between 10px and 60px
    circle.style.width = `${size}px`;
    circle.style.height = `${size}px`;

    // Set random position
    const x = Math.random() * (window.innerWidth - InMarginR - InMarginL ) + InMarginL ;
    const y = Math.random() * (window.innerHeight - InMarginD - InMarginU) + InMarginU ;
    circle.style.left = `${x}px`;
    circle.style.top = `${y}px`;

    // Set random color
    const r = Math.floor(Math.random() * (InColorRmax - InColorRmin) + InColorRmin);
    const g = Math.floor(Math.random() * (InColorGmax - InColorGmin) + InColorGmin);
    const b = Math.floor(Math.random() * (InColorBmax - InColorBmin) + InColorBmin);
    circle.style.backgroundColor = `rgba(${r}, ${g}, ${b}, 0.8)`;

    // Append the circle to the body
    document.body.appendChild(circle);

    // Remove the circle after the fade-out animation ends
    setTimeout(() => {
        circle.remove();
    }, 2000); // Match the duration of the fadeOut animation (2s)
}





document.addEventListener('keydown', (event) => {
    POwO_KeyDown_PlaySound(event.key);
});

document.addEventListener('keyup', (event) => {
    POwO_KeyUp(event.key);
})

for(var k = 0 ; k < List_Recs.length ; k++)
{
    const currentEventKey = List_Keys[k]
    List_Recs[k].addEventListener("touchstart" , (event) => {POwO_KeyDown_PlaySound( currentEventKey )})
    List_Recs[k].addEventListener("touchend" , (event) => {POwO_KeyUp( currentEventKey )})
}