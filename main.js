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
const field_met_page = POwO_docgetel("field_metronome_page")



const field_visual_circles_show = POwO_docgetel("field_visual_circles_show")
const field_visual_backgroundIsBlack = POwO_docgetel("field_visual_backgroundIsBlack") 

const field_visual_circles_r_min = POwO_docgetel("field_visual_circles_R_min")
const field_visual_circles_r_max = POwO_docgetel("field_visual_circles_R_max")
const field_visual_circles_dur_min = POwO_docgetel("field_visual_circles_dur_min")
const field_visual_circles_dur_max = POwO_docgetel("field_visual_circles_dur_max")

const field_visual_color_r_min = POwO_docgetel("field_visual_color_R_min")
const field_visual_color_g_min = POwO_docgetel("field_visual_color_G_min")
const field_visual_color_b_min = POwO_docgetel("field_visual_color_B_min")
const field_visual_color_a_min = POwO_docgetel("field_visual_color_A_min")

const field_visual_color_r_max = POwO_docgetel("field_visual_color_R_max")
const field_visual_color_g_max = POwO_docgetel("field_visual_color_G_max")
const field_visual_color_b_max = POwO_docgetel("field_visual_color_B_max")
const field_visual_color_a_max = POwO_docgetel("field_visual_color_A_max")


// ---- ---- ---- ---- prepare global objects

var GLOBAL_colorON = "1"
var GLOBAL_colorOFF = "0.25"

var GLOBAL_pageIndex = 0
var GLOBAL_pageName = ["FL_Basic","Kontakt","Estairlevakastor"]

var GLOBAL_met_interval_cur = 0
var GLOBAL_met_interval_full = 1000
var GLOBAL_met_deltaTime = 1 //in the sequencer, much many steps it is going to take ?
var GLOBAL_met_rhythm_text = "x:0,0.25,0.5,0.75"
var GLOBAL_met_rhythm_array = [[0,"x"],[1,"r"],[2,"d"],[3,"r"]]
var GLOBAL_met_pos_cur = 0 //0~1, where this is a bar
var GLOBAL_met_pos_full = 100
var GLOBAL_met_javascriptInterval;

var GLOBAL_visual_circles_radius = [100,500]
var GLOBAL_visual_circles_duration = [1000,2000]

var GLOBAL_visual_color_r = [230,255]
var GLOBAL_visual_color_g = [128,230]
var GLOBAL_visual_color_b = [0,64]
var GLOBAL_visual_color_a = [0.5,0.8]

var GLOBAL_performance_pinA = performance.now()
var GLOBAL_performance_pinB = performance.now()


// ---- ---- ---- ---- ON START

var adkt = new (window.AudioContext || window.webkitAudioContext)();
console.log("new audioKontext");

const List_URL =
[
    [ //FL_Basic
        'hhat_basic.wav',       'hhat_707.ogg',     'hhat_9091.ogg',    'hhat_9092.ogg',        'hhat_attack6.ogg',     'hhat_scissors1.ogg',   'hhat_scissors2.ogg',   'hhat_scissors3.ogg',
        'snare_basic.wav',      'clap.wav',         'clap.wav',         'snare_spray.ogg',      'hhat_light1.ogg',      'hhat_light2.ogg',      'hhat_light3.ogg',      'hhat_light4.ogg',
        'kick_attack35.ogg',    'kick_dnc3.ogg',    'kick_dnc3.ogg',    'kick_downstream12.ogg','bottle_01.ogg',        'bottle_02.ogg',        'bottle_03.ogg',        'glass_knock1.ogg',
        'kick_stone.ogg',       'kick_basic.wav',   'kick_basic.wav',   'kick_stone.ogg',       'wood01.ogg',           'wood02.ogg',           'wood03.ogg',           'wood04.ogg'
    ]
    ,
    [ //Kontakt
        'rim_stick.ogg',        'stick.ogg',        'rim_pluck.ogg',    'rim_stick.ogg',        'jump_01.ogg',          'jump_02.ogg',          'kick_punch.ogg',       'kick_punch.ogg',
        'tom_01.ogg',           'tom_02.ogg',       'tom_03.ogg',       'hhat_tamb.ogg',        'tuba_01.ogg',          'tuba_02.ogg',          'tuba_03.ogg',          'kick_punch.ogg',
        'kick_reso_01.ogg',     'snare.ogg',        'snare.ogg',        'kick_reso_02.ogg',     'kick_punch.ogg',       'kick_punch.ogg',       'kick_punch.ogg',       'kick_punch.ogg',
        'kick_piano_01.ogg',    'kick_punch.ogg',   'kick_punch.ogg',   'kick_piano_02.ogg',    'kick_punch.ogg',       'kick_punch.ogg',       'kick_punch.ogg',       'kick_punch.ogg'
    ]
    ,
    [ //Estairlevakastor
        'hhat-01.ogg',          'reso-01.ogg',      'reso-02.ogg',      'hhat-02.ogg',          'ting-special-01.ogg',  'ting-special-02.ogg',  'ting-special-03.ogg',  'kick-01.ogg',
        'clap-01.ogg',          'clap-02.ogg',      'clap-03.ogg',      'clap-04.ogg',          'ting-soft-01.ogg',     'ting-soft-02.ogg',     'ting-soft-03.ogg',     'ting-smack-05.ogg',
        'snare-01.ogg',         'snare-02.ogg',     'snare-03.ogg',     'snare-04.ogg',         'ting-smack-01.ogg',    'ting-smack-02.ogg',    'ting-smack-03.ogg',    'ting-smack-04.ogg',
        'kick-01.ogg',          'kick-02.ogg',      'kick-03.ogg',      'kick-04.ogg',          'ting-strong-01.ogg',   'ting-strong-02.ogg',   'ting-strong-03.ogg',   'ting-strong-04.ogg'
    ]
    //refer to GLOBAL_pageName
]

var List_AudioBuffers = []; //will be a 2D array

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

for(let i = 0 ; i < List_Recs.length ; i++)
{
    List_Recs[i].style.opacity = GLOBAL_colorOFF //turn off the LED
}




//---- ---- ---- ---- POwO Functions : Audio

function POwO_Math_LERP(inA, inB, inT)
{
    return ( inB - inA ) * inT + inA
}

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
    for(let i = 0 ; i < List_URL.length ; i++) //for every packets/groups/page
    {
        let emptyPage = []
        for(let j = 0 ; j < List_URL[i].length ; j++)
        {
            let temp_fullFileName = "audio/" + GLOBAL_pageName[i] + "/" + List_URL[i][j]
            let getSmallAudioBuffer = await POwO_loadFile( temp_fullFileName );
            emptyPage.push( getSmallAudioBuffer );
            console.log("loaded sound : " + temp_fullFileName)
        }
        List_AudioBuffers.push( emptyPage )
    }
    console.log("loading sound done OwO")
}

POwO_loadSounds() //will run on START

function POwO_playSound(InSoundIndex)
{
    if (List_URL.length === List_AudioBuffers.length)
    {
        let bufferNode = adkt.createBufferSource();
        bufferNode.buffer = List_AudioBuffers[GLOBAL_pageIndex][InSoundIndex];
        bufferNode.connect(adkt.destination);
        bufferNode.start();
    }
    else
    {
        console.log("<!> audio buffers not ready yet OoO/")
    }
}

function POwO_KeyDown_PlaySound(InComingKey)
{
    for(var i = 0 ; i < List_Keys.length ; i++)
    {
        if (InComingKey === List_Keys[i])
        {
            POwO_playSound(i);
            List_Recs[i].style.opacity = GLOBAL_colorON

            if (field_visual_circles_show.checked)
            {
                POwO_RandomCircle(
                    GLOBAL_visual_circles_radius[0],
                    GLOBAL_visual_circles_radius[1],

                    GLOBAL_visual_circles_duration[0],
                    GLOBAL_visual_circles_duration[1],

                    GLOBAL_visual_circles_radius[1],
                    0,
                    0,
                    GLOBAL_visual_circles_radius[1],

                    GLOBAL_visual_color_r[0],
                    GLOBAL_visual_color_r[1],

                    GLOBAL_visual_color_g[0],
                    GLOBAL_visual_color_g[1],

                    GLOBAL_visual_color_b[0],
                    GLOBAL_visual_color_b[1],

                    GLOBAL_visual_color_a[0],
                    GLOBAL_visual_color_a[1]
                )
                console.log("circle : show")
            }
            else
            {
                console.log("circle : hide")
            }
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

function POwO_metronome_config() //setup and tidy up and generate or update the Rhythm Array
{
    GLOBAL_met_interval = Number(field_met_interval.value) //size of hourglass
    GLOBAL_met_deltaTime = Number(field_met_deltaTime.value) //how much time_stamps to jump ?

    /*
    rhythm_text is what the user types, something like "0/x\n1/r\n2/w\n3/r"
    rhythm_array is a 2D array such that
    rhythm_array = [time_stamp , time_stamp , ... , time_stamp]
    time_stamp = [time_position , channelName , channelName , ... , channelName]
    */

    GLOBAL_met_rhythm_text = field_met_text.value

    if (GLOBAL_met_rhythm_text !== "")
    {
        //do some cleaning first
        Temp_Rythym_Pass0 = GLOBAL_met_rhythm_text.split("\n") //turn each line into an element
        for(let i = Temp_Rythym_Pass0.length - 1 ; i >= 0 ; i-- ) //make sure no empty lines
        {
            if ( Temp_Rythym_Pass0[i] === "" )
            {
                Temp_Rythym_Pass0.splice(i,1)
            }
        }

        //prepare array
        GLOBAL_met_rhythm_array = []
        for(let i = 0 ; i < Temp_Rythym_Pass0.length ; i++)
        {
            GLOBAL_met_rhythm_array.push( Temp_Rythym_Pass0[i].split("/") ) //take every element, split it by usng "/"
            GLOBAL_met_rhythm_array[i][0] = Number(GLOBAL_met_rhythm_array[i][0]) //make sure the given time stamp (element 0) is a number, not a string
        }

        //at this point rhythm_array might not be in order
        GLOBAL_met_rhythm_array.sort((a,b)=>{return a[0]-b[0]})
        console.log("raw rhythym array : " + JSON.stringify(GLOBAL_met_rhythm_array))

        //maybe rhythm_array has multiple lines with the same time_Position, we can combine them into a single time_stamp 
        let temp_Index = 0
        while(temp_Index < GLOBAL_met_rhythm_array.length - 1)
        {
            console.log("temp_Index : " + temp_Index)
            console.log("time stamp A : " + JSON.stringify(GLOBAL_met_rhythm_array[temp_Index]))
            console.log("time stamp B : " + JSON.stringify(GLOBAL_met_rhythm_array[temp_Index+1]))
            console.log("range check : " + JSON.stringify(temp_Index < GLOBAL_met_rhythm_array.length - 1))
            while ( temp_Index < GLOBAL_met_rhythm_array.length - 1 && GLOBAL_met_rhythm_array[temp_Index][0] === GLOBAL_met_rhythm_array[temp_Index+1][0])
            {
                //attempt combine
                console.log("repeat time stamp : start")
                for(let j = 1 ; j < GLOBAL_met_rhythm_array[temp_Index+1].length ; j++)
                {
                    GLOBAL_met_rhythm_array[temp_Index].push( GLOBAL_met_rhythm_array[temp_Index+1][j] )
                }
                GLOBAL_met_rhythm_array.splice(temp_Index + 1,1)
                console.log("repeat time stamp : end")
            }
            temp_Index ++
        }

        //now the array should be ready
    }
    else
    {
        GLOBAL_met_rhythm_array = [[0,"-"]] //nothing will play
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
        GLOBAL_performance_pinA = performance.now()
        GLOBAL_met_pos_cur = 0;
        GLOBAL_met_interval_cur = 0;
        GLOBAL_met_interval_full = Number(field_met_interval.value)
        GLOBAL_met_javascriptInterval = setInterval(() => {

            //what is deltaTime ?
            let temp_DeltaTime = performance.now() - GLOBAL_performance_pinA
            GLOBAL_performance_pinA = performance.now()

            //add hourglass
            GLOBAL_met_interval_cur += temp_DeltaTime
            while( GLOBAL_met_interval_cur >= GLOBAL_met_interval_full ) //if hourglass is full
            {
                //drain hourglass
                GLOBAL_met_interval_cur -= GLOBAL_met_interval_full

                //which sounds to play ?
                //quick reminder of what the sequencer should look like :
                //rhythmArray = [ timeStamp , timeStamp , timeStamp ]
                //timeStamp = [ timePosition , channelName , channelName , ... ]
                //and the array is sorted based on timePosition
                
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
                GLOBAL_met_pos_cur += GLOBAL_met_deltaTime //next sequencer slot
                if (GLOBAL_met_pos_cur >= GLOBAL_met_pos_full)
                {
                    GLOBAL_met_pos_cur = 0
                }
                field_met_pos_cur.innerText = GLOBAL_met_pos_cur

            }

            

        }, 1);

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

function POwO_visual_backGround()
{
    if (field_visual_backgroundIsBlack.checked)
    {
        document.body.style.backgroundColor = "rgba(0,0,0,1)"
    }
    else
    {
        document.body.style.backgroundColor = "rgba(0,0,0,0)"
    }
}

function POwO_RandomCircle
(
    InRadiusMin, InRadiusMax, InDurationMin, InDurationMax,
    InMarginR , InMarginU, InMarginL, InMarginD,
    InColorRmin, InColorRmax, InColorGmin, InColorGmax, InColorBmin, InColorBmax, InColorAmin, InColorAmax
)
{
    
    // Create a new circle element
    const circle = document.createElement('div');
    circle.classList.add('circle');

    // Set random size
    let size = POwO_Math_LERP( InRadiusMin , InRadiusMax , Math.random() )// Random size between 10px and 60px
    circle.style.width = `${size}px`;
    circle.style.height = `${size}px`;

    // Set random position
    let x = POwO_Math_LERP( InMarginL , window.innerWidth - InMarginR , Math.random())
    let y = POwO_Math_LERP( InMarginU , window.innerHeight - InMarginD , Math.random())
    circle.style.left = `${x}px`;
    circle.style.top = `${y}px`;

    // Set random color
    let r = Math.floor(POwO_Math_LERP( InColorRmin , InColorRmax , Math.random()))
    let g = Math.floor(POwO_Math_LERP( InColorGmin , InColorGmax , Math.random()))
    let b = Math.floor(POwO_Math_LERP( InColorBmin , InColorBmax , Math.random()))
    let a = (POwO_Math_LERP( InColorAmin , InColorAmax , Math.random()))
    circle.style.backgroundColor = `rgba(${r}, ${g}, ${b}, ${a})`;

    // Append the circle to the body
    document.body.appendChild(circle);

    // Remove the circle after the fade-out animation ends
    let d = Math.floor(POwO_Math_LERP( InDurationMin , InDurationMax , Math.random() ))
    setTimeout(() => {
        circle.remove();
    }, d); // Match the duration of the fadeOut animation (2s)
}

function POwO_visual_config_MainColor()
{
    let mainColorRGB = [
        Math.floor((GLOBAL_visual_color_r[0] + GLOBAL_visual_color_r[1]) / 2) ,
        Math.floor((GLOBAL_visual_color_g[0] + GLOBAL_visual_color_g[1]) / 2 ),
        Math.floor((GLOBAL_visual_color_b[0] + GLOBAL_visual_color_b[1]) / 2 ),
    ]

    let RGBString = "rgb(" + mainColorRGB[0].toString() + "," + mainColorRGB[1].toString() + "," + mainColorRGB[2].toString() + ")" 

    for(let i = 0 ; i < List_Recs.length ; i++)
    {
        List_Recs[i].style.backgroundColor = RGBString
        List_Recs[i].style.opacity = GLOBAL_colorOFF //turn off the LED
    }

    field_met_playPause.style.backgroundColor = RGBString
}

document.addEventListener('keydown', (event) => {
    switch (event.key)
    {
        case "9" : GLOBAL_pageIndex = 0 ; field_met_page.innerText = " 0 - FL Basic" ; break ;
        case "o" : GLOBAL_pageIndex = 1 ; field_met_page.innerText = " 1 - Kontakt Package" ; break ;
        case "l" : GLOBAL_pageIndex = 2 ; field_met_page.innerText = " 2 - Estairlevakastor" ; break ;
        default : POwO_KeyDown_PlaySound(event.key) ; break ;
    }
});

document.addEventListener('keyup', (event) => {
    POwO_KeyUp(event.key);
})

field_visual_circles_r_min.addEventListener("change",(event)=>{GLOBAL_visual_circles_radius[0] = Number(field_visual_circles_r_min.value)})
field_visual_circles_r_max.addEventListener("change",(event)=>{GLOBAL_visual_circles_radius[1] = Number(field_visual_circles_r_max.value)})
field_visual_circles_dur_min.addEventListener("change",(event)=>{GLOBAL_visual_circles_duration[0] = Number(field_visual_circles_dur_min.value)})
field_visual_circles_dur_max.addEventListener("change",(event)=>{GLOBAL_visual_circles_duration[1] = Number(field_visual_circles_dur_max.value)})
field_visual_color_r_min.addEventListener("change",(event)=>{GLOBAL_visual_color_r[0] = Number(field_visual_color_r_min.value) ; POwO_visual_config_MainColor()})
field_visual_color_r_max.addEventListener("change",(event)=>{GLOBAL_visual_color_r[1] = Number(field_visual_color_r_max.value) ; POwO_visual_config_MainColor()})
field_visual_color_g_min.addEventListener("change",(event)=>{GLOBAL_visual_color_g[0] = Number(field_visual_color_g_min.value) ; POwO_visual_config_MainColor()})
field_visual_color_g_max.addEventListener("change",(event)=>{GLOBAL_visual_color_g[1] = Number(field_visual_color_g_max.value) ; POwO_visual_config_MainColor()})
field_visual_color_b_min.addEventListener("change",(event)=>{GLOBAL_visual_color_b[0] = Number(field_visual_color_b_min.value) ; POwO_visual_config_MainColor()})
field_visual_color_b_max.addEventListener("change",(event)=>{GLOBAL_visual_color_b[1] = Number(field_visual_color_b_max.value) ; POwO_visual_config_MainColor()})
field_visual_color_a_min.addEventListener("change",(event)=>{GLOBAL_visual_color_a[0] = Number(field_visual_color_a_min.value) ; POwO_visual_config_MainColor()})
field_visual_color_a_max.addEventListener("change",(event)=>{GLOBAL_visual_color_a[1] = Number(field_visual_color_a_max.value) ; POwO_visual_config_MainColor()})

for(var k = 0 ; k < List_Recs.length ; k++)
{
    const currentEventKey = List_Keys[k]
    List_Recs[k].addEventListener("touchstart" , (event) => {POwO_KeyDown_PlaySound( currentEventKey )})
    List_Recs[k].addEventListener("touchend" , (event) => {POwO_KeyUp( currentEventKey )})
}