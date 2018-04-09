var score, roundScore, activePemain, gamePlaying, A = 0;

init();




document.querySelector('.btn-roll').addEventListener('click', function()
                                                     
                                                     
                                                     
{   
    if(gamePlaying){
		
        var dadu1 = Math.floor(Math.random() * 6) + 1;
        var dadu2 = Math.floor(Math.random() * 6) + 1;
		
        var daduDOM = document.querySelector('.dadu1');
        var daduDOM2 = document.querySelector('.dadu2');
        daduDOM.style.display = 'block';
        daduDOM2.style.display = 'block';
        daduDOM.src = 'dice-' + dadu1 + '.png';
        daduDOM2.src = 'dice-' + dadu2 + '.png';
		
        if (dadu1 !==1 && dadu2 !== 1)
        {
			
            roundScore += dadu1 + dadu2;
            document.querySelector('#current-' + activePemain).textContent = roundScore;
			if(dadu1===6 || dadu2 === 6){
				A += 1;
				if(A === 2){
					scores[activepemain] = 0;
					document.querySelector('#score-' + activePemain).textContent = 0;
					nextPemain();
				}
			}
			else{
				A = 0;
			}
        }
        else{
			
			A = 0;
			nextPemain();
        }
    }
});

document.querySelector('.btn-hold').addEventListener('click', function(){    
if(gamePlaying){
		var batas = document.querySelector('.skorakhir').value;
		
		scores[activePemain] += roundScore;
        
		
		document.querySelector('#score-' + activePemain).textContent = scores[activePemain];
		var skorakhir;
		
		
if(batas){
			skorakhir = batas;
		}
    
    
    
else{
			skorakhir = 100;
		}
    
    
if (scores[activePemain] >= skorakhir){
            document.querySelector('#name-' + activePemain).textContent = 'Winner!';
            document.querySelector('.dadu1').style.display = 'none';
			document.querySelector('.dadu2').style.display = 'none';
            document.querySelector('.pemain-' + activePemain + '-panel').classList.add('winner');
            document.querySelector('.pemain-' + activePemain + '-panel').classList.remove('active');
        
            gamePlaying = false;
        }
    
    
        else{
			
			nextPemain();
        }
    
    
    
    
    }
});



function nextPemain(){
	
    activePemain === 0 ? activePemain = 1 : activePemain = 0;
    roundScore = 0;
	A = 0;
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
	document.querySelector('.pemain-0-panel').classList.toggle('active');
    document.querySelector('.pemain-1-panel').classList.toggle('active');
   
    
    
     
    
}
document.querySelector('.btn-new').addEventListener('click', init);
function init(){
    scores = [0,0];
    activePemain = 0;
    roundScore = 0;
    gamePlaying = true;    
    document.querySelector('.dadu1').style.display = 'none';
    document.querySelector('.dadu2').style.display = 'none';
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = 'pemain 1';
    document.getElementById('name-1').textContent = 'Pemain 2';
    document.querySelector('.pemain-0-panel').classList.remove('winner');
    document.querySelector('.pemain-1-panel').classList.remove('winner');
    document.querySelector('.pemain-0-panel').classList.remove('active');
    document.querySelector('.pemain-1-panel').classList.remove('active');
    document.querySelector('.pemain-0-panel').classList.add('active');
}