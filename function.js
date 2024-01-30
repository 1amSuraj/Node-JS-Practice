/*function x(foo)
{
    x=45;                              //if we remove this then x will become a function
    console.log('hello',foo);
    console.log(typeof foo);
}
x(true);
console.log(typeof x);*/

function y(a)
{
    return (a-32)*5/9;
}
console.log(y(50));
console.log(y(40));