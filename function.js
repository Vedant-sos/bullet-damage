function hascollided(testbullet,testwall){
bulletre=testbullet.x+testbullet.width/2;
walledge=testwall.x-testwall.width/2;
if(bulletre>=walledge){
    return true;
}
return false;
}