var laLigaGoals = 43;
var championLeagueGoals = 10;
var copaDelReyGoals = 5;
var totalGoals=laLigaGoals+championLeagueGoals+copaDelReyGoals

function messiSubmit(e){
    e.preventDefault();
    messiGoalsDiv = document.getElementById('messi-goals');
    messiGoalsDiv.innerHTML = '<p>He has scored <strong>'+laLigaGoals+'</strong> GOALS in La Liga</p><p>He has scored <strong>'+championLeagueGoals+'</strong> GOALS in Champion League</p><p>He has scored <strong>'+copaDelReyGoals+'</strong> GOALS in Copa del Rey</p><h3>Total Goals: '+totalGoals+'</h3>';
    return false;
}