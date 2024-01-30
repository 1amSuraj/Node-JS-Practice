function countDown(fromnumber)
{
    console.log(fromnumber);
    let nextnumber=fromnumber - 4;
    if(nextnumber > 0)
    {
        countDown(nextnumber);
    }
}
countDown(10);