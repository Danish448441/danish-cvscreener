console.log("Cv Screener project");

// data is an array of objects which contains information about candidates
const data = [
    {
        name : 'James',
        age : 24,
        city : 'Amstradam',
        language : 'Python',
        framework : 'Django',
        image : 'https://randomuser.me/api/portraits/men/75.jpg', 
    },

    {
        name : 'Kelly',
        age :23,
        city : 'Chicago',
        language : 'Java Script',
        framework : 'Angular JS',
        image : 'https://randomuser.me/api/portraits/women/97.jpg', 
    },

    {
        name : 'Beverly',
        age : 30,
        city : 'Buston',
        language : 'Python',
        framework : 'Flask',
        image : 'https://randomuser.me/api/portraits/women/81.jpg', 
    },

    {
        name : 'Eugene',
        age : 25,
        city : 'San Deigo',
        language : 'Java/Kotlin',
        framework : 'Spring',
        image : 'https://randomuser.me/api/portraits/men/79.jpg', 
    },

    {
        name : 'Laura',
        age : 26,
        city : 'Austin',
        language : 'Node jS',
        framework : 'Express',
        image : 'https://randomuser.me/api/portraits/women/91.jpg', 
    }

]

// using Itrators:

function cvItrator(profiles){
    let nextIndex = 0;
    return {
        next : function(){
            return nextIndex < profiles.length ?
            {value:profiles[nextIndex++],done:false}:
            {done:true}
        }
    }
}

// button listner

const candidates = cvItrator(data);
nextCV();
const next = document.getElementById('next');
next.addEventListener('click', nextCV);


function nextCV(){
    const currentCandidate = candidates.next().value
    let image = document.getElementById('image');
    let profile = document.getElementById('profile');
    if(currentCandidate != undefined){
    image.innerHTML = `<image src='${currentCandidate.image}'>`;
    profile.innerHTML = `<ul class="list-group list-group-flush">
    <li class="list-group-item">Name: ${currentCandidate.name}</li>
    <li class="list-group-item">${currentCandidate.age} years old</li>
    <li class="list-group-item">Lives in ${currentCandidate.city}</li>
    <li class="list-group-item">Primarily works on ${currentCandidate.language}</li>
    <li class="list-group-item">Uses ${currentCandidate.framework} Framework</li>
    </ul>`
    }
    else{
        alert("End of Candidate Application");
        window.location.reload();
    }
}
