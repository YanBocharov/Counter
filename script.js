let count = 0;

function changeCount(num) {
    count += num;
    document.getElementById('count').innerHTML = count;
    if(count == 10) {
        count = -1;
    } else if (count == -10) {
        count = 1;
    }
}
    