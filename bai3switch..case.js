let value = prompt('type a number',0);
switch ((value>0)?1:(value<0)?-1:0) {
    case 1:
        alert(1);
        break;
    case -1:
        alert(-1);
        break;
    default:
        alert(0);


}